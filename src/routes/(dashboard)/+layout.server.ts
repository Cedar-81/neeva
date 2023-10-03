import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals: { supabase, getSession } }) => {
	async function getUserDetails() {
		const session = await getSession();
		console.log('inside here', session);
		if (!session) {
			console.log('inside session', session);
			throw redirect(301, '/auth/signin');
			// throw redirect(303, '/auth/signin');
		}

		console.log('outside here');
		let dataVal: any;

		const { data, error: err } = await supabase
			.from('UserDetails')
			.select('*')
			.eq('user_id', session.user.id)
			.single();

		dataVal = data;

		if (err && session.user.id) {
			throw redirect(303, '/auth/details');
			// const uniqueRandomNumber = parseInt(uuidv4().replace(/-/g, '').slice(0, 8), 16);
			// const { data: createdData, error: dbError } = await supabase.from('UserDetails').insert([
			// 	{
			// 		firstname: '',
			// 		lastname: '',
			// 		username: `user${uniqueRandomNumber}`,
			// 		user_id: session.user.id
			// 	}
			// ]);

			// dataVal = createdData;

			// console.log('created data', createdData);

			// if (dbError) {
			// 	throw dbError;
			// }
		}

		if (err) {
			throw err;
		}

		console.log('data', data);

		return {
			...dataVal,
			lens_progress: JSON.stringify(data.lens_progress)
		};
	}

	return { userDetails: getUserDetails() };
};
