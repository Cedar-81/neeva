import { AuthApiError, type Provider } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

// src/routes/login/+page.server.ts
export const actions = {
	register: async ({ request, url, locals: { supabase } }) => {
		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider,
				options: {
					redirectTo: 'https://neeva.vercel.app/auth/details/'
				}
			});

			if (error) {
				console.log('login with google error', error);
				return fail(500, { message: 'Server error. Try again later.', success: false });
			}

			console.log('data ', data);

			throw redirect(303, data.url);
		}

		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await supabase.auth.signUp({
			email: body.email as string,
			password: body.password as string,
			options: {
				emailRedirectTo: `localhost:5173/auth/callback`
			}
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

		//save user details after registeration
		data.user && saveUserDetails(supabase, body, data.user.id);
	}
};

async function checkIfUserExists(supabase: any, email: string): Promise<boolean> {
	const { data: existingUser, error: userError } = await supabase
		.from('auth.users')
		.select('*')
		.eq('email', email);

	if (userError) {
		throw new Error('Error checking for existing user');
	}

	return !!existingUser && existingUser.length > 0;
}

async function saveUserDetails(supabase: any, body: any, user_id: string) {
	try {
		// If registration is successful, save additional user details to the UserDetails table
		const { data: createdData, error: dbError } = await supabase.from('UserDetails').insert([
			{
				firstname: body.firstname as string,
				lastname: body.lastname as string,
				username: body.username as string,
				user_id
			}
		]);

		if (dbError) {
			console.error('Error inserting user details:', dbError);
			return fail(500, { message: 'Error saving user details.', success: false });
		}

		// Return a success response
		return {
			status: 200,
			body: {
				successful: true,
				message: 'User registration successful',
				user: createdData
			}
		};
	} catch (e) {
		console.error('Error in try-catch block:', e);
		return fail(500, { message: 'Server error. Try again later.', success: false });
	}
}
