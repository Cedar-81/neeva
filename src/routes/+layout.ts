// src/routes/+layout.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '$lib/DatabaseDefinitions';

export const load = async ({ data, depends }) => {
	depends('supabase:auth');

	const supabase = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		auth: {
			persistSession: true,
			autoRefreshToken: true
		}
	});

	// Use the session from server data (this is the authoritative source)
	const session = data?.session;

	return { supabase, session };
};
