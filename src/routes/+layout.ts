// src/routes/+layout.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createBrowserClient, isBrowser, parse } from '@supabase/ssr';
import type { Database } from '$lib/DatabaseDefinitions';

export const load = async ({ fetch, data, depends }) => {
    depends('supabase:auth');

    // Create a client only once or let createBrowserClient handle singleton state
    const supabase = createBrowserClient<Database>(
        PUBLIC_SUPABASE_URL,
        PUBLIC_SUPABASE_ANON_KEY,
        {
            global: {
                fetch,
            },
        }
    );

    const session = data?.session;

    return { supabase, session };
};