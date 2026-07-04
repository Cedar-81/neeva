import { fail, redirect } from "@sveltejs/kit";
//#region src/routes/auth/details/+page.server.ts
var actions = { update_bio: async ({ request, url, locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		console.log("inside session", session);
		throw redirect(301, "/auth/signin");
	}
	let result = await saveUserDetails(supabase, Object.fromEntries(await request.formData()), session.user.id);
	if (result.body.successful == false) return fail(500, result);
	throw redirect(303, "/lens");
} };
async function saveUserDetails(supabase, body, user_id) {
	try {
		const { data: createdData, error: dbError } = await supabase.from("UserDetails").insert([{
			firstname: body.firstname,
			lastname: body.lastname,
			username: body.username.toLowerCase(),
			user_id
		}]);
		if (dbError) {
			if (dbError.code === "23505") return {
				status: 500,
				body: {
					successful: false,
					message: "The username you entered is already in use, please pick another."
				}
			};
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
