import { fail, redirect } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";
//#region src/routes/auth/signin/+page.server.ts
console.log("here within");
var actions = { login: async ({ request, url, locals: { supabase } }) => {
	const provider = url.searchParams.get("provider");
	if (provider) {
		const { data, error } = await supabase.auth.signInWithOAuth({ provider });
		if (error) {
			console.log("login with google error", error);
			return fail(500, {
				message: "Server error. Try again later.",
				success: false
			});
		}
		console.log("data ", data);
		throw redirect(303, data.url);
	}
	const body = Object.fromEntries(await request.formData());
	const { data, error: err } = await supabase.auth.signInWithPassword({
		email: body.email,
		password: body.password
	});
	if (err) {
		console.log("there was an error", err);
		if (err instanceof AuthApiError && err.status === 400) return fail(400, { error: "Invalid email or password" });
		return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
	}
	throw redirect(303, "/lens");
} };
//#endregion
export { actions };
