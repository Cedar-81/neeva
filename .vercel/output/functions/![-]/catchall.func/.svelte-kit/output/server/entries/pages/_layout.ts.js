import { n as PUBLIC_SUPABASE_URL, t as PUBLIC_SUPABASE_ANON_KEY } from "../../chunks/public.js";
import { createClient } from "@supabase/supabase-js";
//#region src/routes/+layout.ts
var load = async ({ data, depends }) => {
	depends("supabase:auth");
	const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} });
	const { data: { session } } = await supabase.auth.getSession();
	return {
		supabase,
		session
	};
};
//#endregion
export { load };
