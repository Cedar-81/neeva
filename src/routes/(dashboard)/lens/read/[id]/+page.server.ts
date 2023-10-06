import type { PersonalBio } from '$lib/appStore';
import calculatePostPriority from '$lib/lensPriorityCalc';
import type { Author, SingleLens } from '$lib/store';
import { fail, redirect } from '@sveltejs/kit';
import { onDestroy } from 'svelte';

export const load = async ({ params, locals: { supabase, getSession } }) => {
	const { id } = params;
	const session = await getSession();

	async function getSingleLens() {
		// Fetch the comments for the specific lens_id
		const { data: lens, error } = await supabase
			.from('Lens')
			.select(
				`*, UserDetails (username, profile_image, firstname, lastname, following, followers, user_id)`
			)
			.eq('id', id)
			.single();

		if (error) {
			throw error;
		}

		return {
			...lens,
			comment_count: 0,
			progress: 0
		};
	}

	async function getCommentCount(lens_id: string) {
		try {
			// Fetch the comments for the specific lens_id
			const { data: comments, error } = await supabase
				.from('LensComments')
				.select('id')
				.eq('lens_id', lens_id);

			if (error) {
				throw error;
			}

			console.log('comments: ', comments);

			// Calculate the comment count
			const commentCount = comments.length;

			return commentCount;
		} catch (error) {
			// Handle errors here, e.g., log the error or return an error response
			console.error('Error getting comment count:', error);
			return -1; // Return -1 to indicate an error
		}
	}

	async function getAuthor(author_id: string | null) {
		console.log('author_id', author_id);
		if (!author_id) {
			return null;
		}

		const { data: author, error } = await supabase
			.from('UserDetails')
			.select('*')
			.eq('user_id', author_id)
			.single();

		console.log('author', author);
		if (error) {
			throw error;
		}

		return {
			...author,
			lens_progress: JSON.stringify(author.lens_progress)
		};
	}

	async function getComments() {
		// Fetch the comments for the specific lens_id
		const { data: comments, error } = await supabase
			.from('LensComments')
			.select(`*, UserDetails (profile_image, username)`)
			.eq('lens_id', id);

		if (error) {
			throw error;
		}

		console.log('inside comments', id, comments);

		return comments;
	}

	const getLens = async () => {
		// Fetch data from the Supabase database
		const { data, error } = await supabase
			.from('Lens')
			.select('*, UserDetails (profile_image, username)')
			.eq('published', true);

		// console.log('lens data', data);

		if (error) {
			console.error('Error fetching data:', error.message);
			return {
				status: 500, // Return an error status code
				body: { error: 'Error fetching data' }
			};
		}

		//modify post priority
		const postsWithPriority = data.map(async (post) => {
			const comment_count = await getCommentCount(post.id);
			return {
				...post,
				comment_count,
				progress: 0,
				priority_score: calculatePostPriority(post, comment_count)
			};
		});

		// Use Promise.all to await all the promises and get the resolved values
		let prioritizedLens = await Promise.all(postsWithPriority)
			.then((postsWithPriority) =>
				postsWithPriority.sort((a, b) => b.priority_score - a.priority_score)
			)
			.catch((error) => {
				console.error('Error:', error);
			});

		return {
			status: 200,
			body: { prioritizedLens }
		};
	};

	// onDestroy(async () => {
	// 	console.log('unmounted');
	// 	const { data: lensProgress, error: loadErr } = await supabase
	// 		.from('UserDetails')
	// 		.select('lens_progress')
	// 		.eq('user_id', session.user.id)
	// 		.single();

	// 	if (loadErr) {
	// 		throw loadErr;
	// 	}

	// 	console.log('jsonb lens progress: ', JSON.stringify(lensProgress));

	// 	// Perform the JSONB upsert here
	// 	// const dataToUpsert = {};

	// 	// const { data, error } = await supabase.from('your_table_name').upsert(
	// 	// 	[
	// 	// 		{
	// 	// 			// Specify the condition to match (e.g., by ID)
	// 	// 			id: params.id
	// 	// 		}
	// 	// 	],
	// 	// 	dataToUpsert
	// 	// );

	// 	// if (error) {
	// 	// 	console.error('Error performing JSONB upsert:', error);
	// 	// } else {
	// 	// 	console.log('JSONB upsert successful:', data);
	// 	// }
	// });

	return {
		singleLens: getSingleLens(),
		userId: session && session.user.id,
		comments: getComments(),
		lens: getLens()
	};
};

export const actions = {
	likeLens: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const { id } = params;
		const session = await getSession();
		const content = await request.formData();
		const liked = content.get('liked');
		const username = content.get('username') as string;

		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		const { data, error: err } = await supabase.from('Lens').select('*').eq('id', id).single();
		if (err) {
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		let likes = data?.likes ? data.likes : [];

		if (liked == 'true' && !likes.includes(username)) {
			likes.push(username);
			console.log('not meant to be here', likes, id);
			const { error: err } = await supabase
				.from('Lens')
				.update({
					likes
				})
				.eq('id', id);

			if (err) {
				return fail(500, { message: 'Server error. Try again later.', success: false });
			}
		}

		if (liked == 'false' && likes.includes(username)) {
			console.log('in here');
			const updatedLikes = likes.filter((item) => item !== username);
			console.log('updated likes', updatedLikes);
			const { error: err } = await supabase
				.from('Lens')
				.update({
					likes: updatedLikes
				})
				.eq('id', id);

			if (err) {
				return fail(500, { message: 'Server error. Try again later.', success: false });
			}
		}
	},

	postComment: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const { id } = params;
		const session = await getSession();
		const content = await request.formData();
		const comment = content.get('comment');
		const username = content.get('username');

		console.log('handling comment: ', username, comment, id, session?.user.id);

		if (!session) {
			throw redirect(303, '/auth/signin');
		}

		const { error: err } = await supabase.from('LensComments').insert({
			content: comment as string,
			lens_id: id,
			author_username: username as string
		});

		if (err) {
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}
	},

	follow: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const content = await request.formData();

		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		let userFollowing: PersonalBio = JSON.parse(content.get('user_following') as string);
		let userToFollow: Author = JSON.parse(content.get('user_to_follow') as string);

		console.log('new follow button', userFollowing, userToFollow);

		if (userFollowing.following == null || userToFollow.followers == null) {
			userToFollow.followers = [];
			userFollowing.following = [];
		}

		//add userToFollow's username to userFollowing'S following list
		if (userToFollow.username && userFollowing.following.indexOf(userToFollow.username) == -1) {
			userFollowing.following.push(userToFollow.username);

			const { data: user2, error: err2 } = await supabase
				.from('UserDetails')
				.update({ following: userFollowing.following })
				.eq('username', userFollowing.username);

			if (err2) {
				throw err2;
			}
		}

		//add userFollowing's username to userToFollow's followers list
		if (userFollowing.username && userToFollow.followers.indexOf(userFollowing.username) == -1) {
			userToFollow.followers.push(userFollowing.username);

			const { data: user2, error: err2 } = await supabase
				.from('UserDetails')
				.update({ followers: userToFollow.followers })
				.eq('username', userToFollow.username);

			if (err2) {
				throw err2;
			}
		}

		console.log(
			'u2f, uf, u2funame, ufuname',
			userToFollow.followers,
			userFollowing.following,
			userToFollow.username,
			userFollowing.username
		);

		console.log('Followed successfully');
	},

	unfollow: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const content = await request.formData();

		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		let userFollowing: PersonalBio = JSON.parse(content.get('user_following') as string);
		let userToFollow: Author = JSON.parse(content.get('user_to_follow') as string);

		console.log('new follow button', userFollowing, userToFollow);

		if (userFollowing.following == null || userToFollow.followers == null) {
			return;
		}

		//add userToFollow's username to userFollowing'S following list
		if (userToFollow.username && !(userFollowing.following.indexOf(userToFollow.username) == -1)) {
			const usernameIndex = userFollowing.following.indexOf(userToFollow.username);
			userFollowing.following.splice(usernameIndex, 1);

			const { data: user2, error: err2 } = await supabase
				.from('UserDetails')
				.update({ following: userFollowing.following })
				.eq('username', userFollowing.username);

			if (err2) {
				throw err2;
			}
		}

		//add userFollowing's username to userToFollow's followers list
		if (userFollowing.username && !(userToFollow.followers.indexOf(userFollowing.username) == -1)) {
			const usernameIndex = userToFollow.followers.indexOf(userFollowing.username);
			userToFollow.followers.splice(usernameIndex, 1);

			const { data: user2, error: err2 } = await supabase
				.from('UserDetails')
				.update({ followers: userToFollow.followers })
				.eq('username', userToFollow.username);

			if (err2) {
				throw err2;
			}
		}

		console.log(
			'u2f, uf, u2funame, ufuname',
			userToFollow.followers,
			userFollowing.following,
			userToFollow.username,
			userFollowing.username
		);

		console.log('Followed successfully');
	},

	view: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const { id } = params;
		const content = await request.formData();
		let viewCount: string = content.get('view_count') as string;

		console.log('viewcount ', viewCount);

		const { data: user, error: err } = await supabase
			.from('Lens')
			.update({ views: parseInt(viewCount) })
			.eq('id', id);

		if (err) {
			throw err;
		}
	}
};
