import { fail, redirect } from "@sveltejs/kit";
//#region src/routes/(dashboard)/create/lens/write/[bookid]/+page.server.ts
var load = async ({ params, locals: { supabase, getSession } }) => {
	const { bookid } = params;
	if (!await getSession()) throw redirect(303, "/auth/signin");
	async function getSingleLens() {
		const { data, error: err } = await supabase.from("Lens").select("*").eq("id", bookid).single();
		if (err) throw err;
		console.log("loaded successfully");
		return data;
	}
	return { getLensForm: getSingleLens() };
};
var actions = {
	publish: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const dataVal = { content: "" };
		const { bookid } = params;
		const session = await getSession();
		(await request.formData()).forEach((value) => dataVal.content = value);
		if (!session) throw redirect(303, "/auth/signin");
		const { data, error: err } = await supabase.from("Lens").update({
			content: dataVal.content,
			published: true
		}).eq("id", bookid);
		if (err) return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
		console.log("writing data ", dataVal);
	},
	save: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const dataVal = { content: "" };
		const { bookid } = params;
		const session = await getSession();
		(await request.formData()).forEach((value) => dataVal.content = value);
		if (!session) throw redirect(303, "/auth/signin");
		const { data, error: err } = await supabase.from("Lens").update({
			content: dataVal.content,
			published: false
		}).eq("id", bookid);
		if (err) return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
		console.log("done");
	},
	update_details: async ({ request, params, locals: { supabase, getSession } }) => {
		const { bookid } = params;
		const session = await getSession();
		const body = Object.fromEntries(await request.formData());
		if (!session) throw redirect(303, "/auth/signin");
		const { data, error: err } = await supabase.from("Lens").update({
			title: body.title,
			summary: body.summary,
			genre: body.genre,
			published: false
		}).eq("id", bookid);
		if (err) return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
	}
};
//#endregion
export { actions, load };
