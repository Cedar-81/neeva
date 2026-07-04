import { fail, redirect } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";
//#region src/routes/auth/signup/+page.server.ts
var actions = { register: async ({ request, url, locals: { supabase } }) => {
	const provider = url.searchParams.get("provider");
	if (provider) {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider,
			options: { redirectTo: "https://neevaverse.com/auth/details/" }
		});
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
	const { data, error: err } = await supabase.auth.signUp({
		email: body.email,
		password: body.password,
		options: { emailRedirectTo: `localhost:5173/auth/callback` }
	});
	if (err) {
		console.log("there was an error", err);
		if (err instanceof AuthApiError && err.status === 400) return fail(400, { error: "Invalid email or password" });
		return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
	}
	data.user && saveUserDetails(supabase, body, data.user.id);
} };
async function saveUserDetails(supabase, body, user_id) {
	try {
		const { data: createdData, error: dbError } = await supabase.from("UserDetails").insert([{
			firstname: body.firstname,
			lastname: body.lastname,
			username: body.username,
			user_id
		}]);
		if (dbError) {
			console.error("Error inserting user details:", dbError);
			return fail(500, {
				message: "Error saving user details.",
				success: false
			});
		}
		return {
			status: 200,
			body: {
				successful: true,
				message: "User registration successful",
				user: createdData
			}
		};
	} catch (e) {
		console.error("Error in try-catch block:", e);
		return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
	}
}
//#endregion
export { actions };
