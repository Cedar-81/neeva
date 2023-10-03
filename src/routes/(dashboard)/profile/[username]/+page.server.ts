import type { PersonalBio } from '$lib/appStore.js';
import compressImage from '$lib/compressImage.js';
import type { Author } from '$lib/store.js';
import { redirect } from '@sveltejs/kit';
import sharp from 'sharp';
import { readFile } from 'fs/promises';

type Data = {
	content: string;
};

export const load = async ({ params, locals: { supabase, getSession } }) => {
	const session = await getSession();

	async function getAuthor() {
		const { username } = params;
		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		const { data: profile, error } = await supabase
			.from('UserDetails')
			.select('*')
			.eq('username', username)
			.single();

		if (error) {
			throw error;
		}

		const loggedInUser = await getAuthorWithId(session.user.id);
		const is_following =
			profile.followers == null
				? false
				: !(profile.followers?.indexOf(loggedInUser.username) == -1);
		console.log('liu, following, profile', loggedInUser.username, is_following, profile);

		return {
			...profile,
			user_is_following: is_following,
			lens_progress: JSON.stringify(profile.lens_progress)
		};
	}

	async function getAuthorLens() {
		const { username } = params;
		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		const { data: user, error: err } = await supabase
			.from('UserDetails')
			.select('*')
			.eq('username', username)
			.single();

		console.log('here here here', user);

		if (err) {
			throw err;
		}

		if (!user || !user.id) {
			return;
		}

		const { data: lens, error } = await supabase.from('Lens').select('*').eq('author_id', user.id);

		if (user.user_id === session.user.id) {
			// Sort the items
			lens?.sort((a, b) => {
				// First, sort by 'published' (unpublished items come first)
				if (a.published !== b.published) {
					return a.published ? 1 : -1;
				}

				// Then, if both items are of the same type (published or unpublished),
				// sort by 'created_at' in descending order (most recent first)
				return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
			});
		} else {
			// Sort the items
			lens?.sort((a, b) => {
				// sort by 'created_at' in descending order (most recent first)
				return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
			});
		}

		console.log('lens', lens);
		if (error) {
			throw error;
		}

		return { lens, profileOwner: user.user_id === session.user.id };
	}

	async function getAuthorWithId(id: string) {
		const { data: profile, error } = await supabase
			.from('UserDetails')
			.select('*')
			.eq('user_id', id)
			.single();

		console.log('author', profile);
		if (error) {
			throw error;
		}

		return profile;
	}

	return {
		profile: getAuthor(),
		usersLens: getAuthorLens()
	};
};

export const actions = {
	follow: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const dataVal: Data = { content: '' };
		const content = await request.formData();
		content.forEach((value) => (dataVal.content = value as string));

		// if (!session) {
		// 	// redirect user to login page
		// 	throw redirect(303, '/auth/signin');
		// }

		let userFollowing: PersonalBio = JSON.parse(dataVal.content).user_following;
		let userToFollow: Author = JSON.parse(dataVal.content).user_to_follow;

		console.log('new follow button', userFollowing, userToFollow);

		if (userFollowing.following == null || userToFollow.followers == null) {
			userToFollow.followers = [];
			userFollowing.following = [];
		}

		//add userToFollow's username to userFollowing'S following list
		if (userToFollow.username && userFollowing.following.indexOf(userToFollow.username) == -1) {
			userFollowing.following.push(userToFollow.username);

			console.log('following ', userToFollow.username, userFollowing);

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
		const dataVal: Data = { content: '' };
		const content = await request.formData();
		content.forEach((value) => (dataVal.content = value as string));

		// if (!session) {
		// 	// redirect user to login page
		// 	throw redirect(303, '/auth/signin');
		// }

		let userFollowing: PersonalBio = JSON.parse(dataVal.content).user_following;
		let userToFollow: Author = JSON.parse(dataVal.content).user_to_follow;

		console.log('new follow button', userFollowing, userToFollow);

		if (userFollowing.following == null || userToFollow.followers == null) {
			return;
		}

		//remove userToFollow's username from userFollowing'S following list
		if (userToFollow.username && !(userFollowing.following.indexOf(userToFollow.username) == -1)) {
			const usernameIndex = userFollowing.following.indexOf(userToFollow.username);
			const newFollowing = userFollowing.following.filter(
				(username) => username !== userToFollow.username
			);

			const { data: user2, error: err2 } = await supabase
				.from('UserDetails')
				.update({ following: newFollowing })
				.eq('username', userFollowing.username);

			if (err2) {
				throw err2;
			}
		}

		//remove userFollowing's username from userToFollow's followers list
		if (userFollowing.username && !(userToFollow.followers.indexOf(userFollowing.username) == -1)) {
			const newFollowers = userToFollow.followers.filter(
				(username) => username !== userFollowing.username
			);

			const { data: user2, error: err2 } = await supabase
				.from('UserDetails')
				.update({ followers: newFollowers })
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

	uploadImage: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		// if (!session) {
		// 	// redirect user to login page
		// 	throw redirect(303, '/auth/signin');
		// }
		const dataVal: Data = { content: '' };
		const content = await request.formData();
		// content.forEach((value) => (dataVal.content = value as string));
		const image: File = content.get('info') as File;
		const type: string = content.get('type') as string;
		const profile_version_no: string = content.get('profile_version') as string;
		const banner_version_no: string = content.get('banner_version') as string;

		console.log('image upload', content.get('info'), content.get('type'));

		const { data, error } = await supabase.storage
			.from('avatar')
			.upload(
				`${type}/${session && session.user.id}.png?v=${
					type == 'profile' ? profile_version_no : banner_version_no
				}`,
				image,
				{
					cacheControl: '3600',
					upsert: true
				}
			);

		if (error) {
			throw error;
		}

		const imageUrl = 'https://gymsixcdrsdtjpvyjwha.supabase.co/storage/v1/object/public/avatar';
		console.log('type: ', type);
		if (type == 'profile' && session) {
			const { error: err } = await supabase
				.from('UserDetails')
				.update({
					profile_version_no: parseInt(profile_version_no, 10),
					profile_image: `${imageUrl}/${type}/${
						session && session.user.id
					}.png?v${profile_version_no}`
				})
				.eq('user_id', session.user.id);

			if (err) throw err;
		} else if (type == 'banner' && session) {
			console.log('banner ', banner_version_no, imageUrl, type, session.user.id);
			const { error: err } = await supabase
				.from('UserDetails')
				.update({
					banner_version_no: parseInt(banner_version_no, 10),
					banner_image: `${imageUrl}/${type}/${session.user.id}.png?v${banner_version_no}`
				})
				.eq('user_id', session.user.id);

			if (err) throw err;
		}
	},

	updateProfile: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		// if (!session) {
		// 	// redirect user to login page
		// 	throw redirect(303, '/auth/signin');
		// }

		const dataVal: Data = { content: '' };
		const content = await request.formData();
		// content.forEach((value) => (dataVal.content = value as string));
		const profile: Author = JSON.parse(content.get('profile') as string) as Author;

		console.log('updated profile', profile);

		if (session) {
			const { error: err } = await supabase
				.from('UserDetails')
				.update({
					firstname: profile.firstname,
					lastname: profile.lastname,
					username: profile.username,
					bio: profile.bio
				})
				.eq('user_id', session.user.id);

			if (err) throw err;
		}
	}
};
