import { redirect } from '@sveltejs/kit';

export const load = async ({ url, locals: { supabase, getSession } }) => {
    const session = await getSession();

    // 1. Define public routes that don't require an active session
    const isAuthRoute = url.pathname.startsWith('/auth');
    const isPublicRoute = url.pathname === '/' || url.pathname.startsWith('/lens');

    // 2. If no session, return null for public/auth routes instead of throwing a redirect
    if (!session) {
        if (isAuthRoute || isPublicRoute) {
            return {
                session: null,
                userDetails: null
            };
        }
        // Redirect to signin only for protected routes (e.g., /dashboard, /settings)
        throw redirect(303, '/auth/signin');
    }

    // 3. If signed in and visiting /auth/signin or /auth/signup, redirect away to /lens
    if (isAuthRoute && url.pathname !== '/auth/details') {
        throw redirect(303, '/lens');
    }

    // 4. Fetch UserDetails safely
    try {
        const { data, error: err } = await supabase
            .from('UserDetails')
            .select('*')
            .eq('user_id', session.user.id)
            .maybeSingle(); // maybeSingle doesn't throw on 0 rows

        if (err) {
            console.error('Error fetching user details:', err);
            return { session, userDetails: null };
        }

        // If user is signed in but has no profile details yet, redirect to setup page
        if (!data && url.pathname !== '/auth/details') {
            throw redirect(303, '/auth/details');
        }

        return {
            session,
            userDetails: data
                ? {
                      ...data,
                      lens_progress: data.lens_progress ? JSON.stringify(data.lens_progress) : null
                  }
                : null
        };
    } catch (error) {
        // Re-throw SvelteKit redirects if they originated from above
        if (error && typeof error === 'object' && 'status' in error && 'location' in error) {
            throw error;
        }
        console.error('Error in +layout.server.ts:', error);
        return { session, userDetails: null };
    }
};