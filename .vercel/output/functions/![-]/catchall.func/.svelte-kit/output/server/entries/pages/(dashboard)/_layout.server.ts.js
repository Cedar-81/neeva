import { redirect } from "@sveltejs/kit";
//#region src/routes/(dashboard)/+layout.server.ts
var load = async ({ params, locals: { supabase, getSession } }) => {
	async function getUserDetails() {
		const session = await getSession();
		console.log("inside here", session);
		console.log("outside here");
		if (session) {
			const { data, error: err } = await supabase.from("UserDetails").select("*").eq("user_id", session.user.id).single();
			if (!data) throw redirect(303, "/auth/details");
			console.log("first data", data);
			if (err) throw err;
			console.log("data", data);
			return {
				...data,
				lens_progress: JSON.stringify(data.lens_progress)
			};
		}
	}
	return { userDetails: getUserDetails() };
};
//#endregion
export { load };
