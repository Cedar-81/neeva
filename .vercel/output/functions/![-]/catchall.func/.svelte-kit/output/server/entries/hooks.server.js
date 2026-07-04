import { n as PUBLIC_SUPABASE_URL, t as PUBLIC_SUPABASE_ANON_KEY } from "../chunks/public.js";
import { createClient } from "@supabase/supabase-js";
//#region src/hooks.server.ts
var handle = async ({ event, resolve }) => {
	event.locals.supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} });
	event.locals.getSession = async () => {
		const { data: { session } } = await event.locals.supabase.auth.getSession();
		return session;
	};
	return resolve(event, { filterSerializedResponseHeaders(name) {
		return name === "content-range";
	} });
};
//#endregion
export { handle };
