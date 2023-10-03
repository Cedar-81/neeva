import { error, fail, redirect } from '@sveltejs/kit';

// src/routes/login/+page.server.ts
export const actions = {
	update_bio: async ({ request, url, locals: { supabase, getSession } }) => {
		const session = await getSession();

		if (!session) {
			console.log('inside session', session);
			throw redirect(301, '/auth/signin');
			// throw redirect(303, '/auth/signin');
		}

		const body = Object.fromEntries(await request.formData());

		let result: any = await saveUserDetails(supabase, body, session.user.id);

		if (result.body.successful == false) {
			return fail(500, result);
		}

		throw redirect(303, '/lens');
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
				username: (body.username as string).toLowerCase(),
				user_id
			}
		]);

		if (dbError) {
			if (dbError.code === '23505') {
				return {
					status: 500,
					body: {
						successful: false,
						message: 'The username you entered is already in use, please pick another.'
					}
				};
			}
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
