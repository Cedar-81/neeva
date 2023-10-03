import { lensCreateForm, showToast, toastMessage } from '$lib/appStore.js';
import { fail, json, redirect } from '@sveltejs/kit';

type Data = {
	content: FormDataEntryValue;
};

export const load = async ({ params, locals: { supabase, getSession } }) => {
	const { bookid } = params;
	const session = await getSession();
	if (!session) {
		// redirect user to login page
		throw redirect(303, '/auth/signin');
	}

	async function getSingleLens() {
		const { data, error: err } = await supabase.from('Lens').select('*').eq('id', bookid).single();

		if (err) {
			throw err;
		}
		console.log('loaded successfully');

		return data;
	}

	return {
		getLensForm: getSingleLens()
	};
};

export const actions = {
	publish: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const dataVal: Data = { content: '' };
		const { bookid } = params;
		const session = await getSession();
		const content = await request.formData();
		content.forEach((value) => (dataVal.content = value));

		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		const { data, error: err } = await supabase
			.from('Lens')
			.update({
				content: dataVal.content as string,
				published: true
			})
			.eq('id', bookid);

		if (err) {
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		console.log('writing data ', dataVal);
	},

	save: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const dataVal: Data = { content: '' };
		const { bookid } = params;
		const session = await getSession();
		const content = await request.formData();
		content.forEach((value) => (dataVal.content = value));

		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		const { data, error: err } = await supabase
			.from('Lens')
			.update({
				content: dataVal.content as string,
				published: false
			})
			.eq('id', bookid);

		if (err) {
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		console.log('done');
	},

	update_details: async ({ request, params, locals: { supabase, getSession } }) => {
		const { bookid } = params;
		const session = await getSession();
		const body = Object.fromEntries(await request.formData());

		if (!session) {
			// redirect user to login page
			throw redirect(303, '/auth/signin');
		}

		const { data, error: err } = await supabase
			.from('Lens')
			.update({
				title: body.title as string,
				summary: body.summary as string,
				genre: body.genre as string,
				published: false
			})
			.eq('id', bookid);

		if (err) {
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		toastMessage.set('Story details updated successfully');
		showToast.set(true);
	}
};
