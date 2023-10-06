import { AuthApiError, type Provider } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

console.log('here within');
export const actions = {
	login: async ({ request, url, locals: { supabase } }) => {
		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider
			});

			if (error) {
				console.log('login with google error', error);
				return fail(500, { message: 'Server error. Try again later.', success: false });
			}

			console.log('data ', data);

			throw redirect(303, data.url);
		}

		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await supabase.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		});

		if (err) {
			console.log('there was an error', err);
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid email or password'
				});
			}
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		throw redirect(303, '/lens');
	}
};
