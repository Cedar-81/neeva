import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ params, locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		// redirect user to login page
		throw redirect(303, '/auth/signin');
	}
};
export const actions = {
	save_details: async ({ request, url, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		const content = await request.formData();
		const details = JSON.parse(content.get('details') as string);
		console.log('book create data', content);

		const { data, error: err } = await supabase
			.from('Lens')
			.insert({
				title: details.title as string,
				content: `<p class='lenstext'>Let's start writing!!! What story would you like to draw the Lens on? </p>`,
				genre: details.genre as string,
				summary: details.summary as string,
				published: false,
				author_id: details.author_id as string
			})
			.select();

		console.log('create lens data ', data);

		if (err) {
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		console.log('redirect id ', data[0].id);

		return { redirect_id: data[0].id };

		// console.log('Before redirect');
		// throw redirect(307, `create/lens/write/${data[0].id}`);
		// console.log('after redirect');
	}
};
