// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import type { RequestEvent } from '@sveltejs/kit';

export const supabaseClient = (
	event: RequestEvent<Partial<Record<string, string>>, string | null>
) =>
	createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		}
	});
