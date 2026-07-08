import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get('code');

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (error) {
			console.error('Error exchanging code for session:', error);
			throw redirect(303, '/auth/signin?error=session_exchange_failed');
		}
	}

	throw redirect(303, '/lens');
};
