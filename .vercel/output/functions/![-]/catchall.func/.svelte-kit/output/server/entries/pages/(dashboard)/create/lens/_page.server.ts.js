import { fail, redirect } from "@sveltejs/kit";
//#region src/routes/(dashboard)/create/lens/+page.server.ts
var load = async ({ params, locals: { supabase, getSession } }) => {
	if (!await getSession()) throw redirect(303, "/auth/signin");
};
var actions = { save_details: async ({ request, url, locals: { supabase, getSession } }) => {
	if (!await getSession()) throw redirect(303, "/auth/signin");
	const content = await request.formData();
	const details = JSON.parse(content.get("details"));
	console.log("book create data", content);
	const { data, error: err } = await supabase.from("Lens").insert({
		title: details.title,
		content: `<p class='lenstext'>Let's start writing!!! What story would you like to draw the Lens on? </p>`,
		genre: details.genre,
		summary: details.summary,
		published: false,
		author_id: details.author_id
	}).select();
	console.log("create lens data ", data);
	if (err) return fail(500, {
		message: "Server error. Try again later.",
		success: false
	});
	console.log("redirect id ", data[0].id);
	return { redirect_id: data[0].id };
} };
//#endregion
export { actions, load };
