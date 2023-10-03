import { redirect } from '@sveltejs/kit';

// src/routes/+layout.server.ts
export const load = async ({ locals: { supabase, getSession } }) => {
	let session = await getSession();

	return {
		session: session
	};
};
