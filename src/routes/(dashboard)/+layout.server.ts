import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	async function getUserDetails() {
		const session = await getSession();
		console.log('Dashboard - Session:', session?.user?.email);
		
		// If no session, redirect to signin
		if (!session) {
			console.log('No session found, redirecting to signin');
			throw redirect(303, '/auth/signin');
		}

		try {
			const { data, error: err } = await supabase
				.from('UserDetails')
				.select('*')
				.eq('user_id', session.user.id)
				.single();

			if (err) {
				if (err.code === 'PGRST116') {
					// No user details found, redirect to details page
					console.log('No user details found, redirecting to details page');
					throw redirect(303, '/auth/details');
				}
				console.error('Error fetching user details:', err);
				throw err;
			}

			if (!data) {
				console.log('No user details data, redirecting to details page');
				throw redirect(303, '/auth/details');
			}

			console.log('User details loaded:', data.username);

			return {
				...data,
				lens_progress: data.lens_progress ? JSON.stringify(data.lens_progress) : null
			};
		} catch (error) {
			console.error('Error in getUserDetails:', error);
			throw error;
		}
	}

	return { userDetails: getUserDetails() };
};
