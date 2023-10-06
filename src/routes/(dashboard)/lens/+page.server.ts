import calculatePostPriority from '$lib/lensPriorityCalc';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	// if (!session) {
	// 	// redirect user to login page
	// 	throw redirect(303, '/auth/signin');
	// }
	const getLens = async () => {
		// Fetch data from the Supabase database
		const { data, error } = await supabase
			.from('Lens')
			.select(`*, UserDetails (profile_image, username)`)
			.eq('published', true);
		console.log('lens data', data);

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

			// Calculate the comment count
			const commentCount = comments.length;

			return commentCount;
		} catch (error) {
			// Handle errors here, e.g., log the error or return an error response
			console.error('Error getting comment count:', error);
			return -1; // Return -1 to indicate an error
		}
	}

	return {
		lens: getLens()
	};
};
