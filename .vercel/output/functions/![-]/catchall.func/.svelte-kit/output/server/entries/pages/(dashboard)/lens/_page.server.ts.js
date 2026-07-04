import { t as calculatePostPriority } from "../../../../chunks/lensPriorityCalc.js";
//#region src/routes/(dashboard)/lens/+page.server.ts
var load = async ({ locals: { supabase, getSession } }) => {
	await getSession();
	const getLens = async () => {
		const { data, error } = await supabase.from("Lens").select(`*, UserDetails (profile_image, username)`).eq("published", true);
		console.log("lens data", data);
		if (error) {
			console.error("Error fetching data:", error.message);
			return {
				status: 500,
				body: { error: "Error fetching data" }
			};
		}
		const postsWithPriority = data.map(async (post) => {
			const comment_count = await getCommentCount(post.id);
			return {
				...post,
				comment_count,
				progress: 0,
				priority_score: calculatePostPriority(post, comment_count)
			};
		});
		return {
			status: 200,
			body: { prioritizedLens: await Promise.all(postsWithPriority).then((postsWithPriority) => postsWithPriority.sort((a, b) => b.priority_score - a.priority_score)).catch((error) => {
				console.error("Error:", error);
			}) }
		};
	};
	async function getCommentCount(lens_id) {
		try {
			const { data: comments, error } = await supabase.from("LensComments").select("id").eq("lens_id", lens_id);
			if (error) throw error;
			return comments.length;
		} catch (error) {
			console.error("Error getting comment count:", error);
			return -1;
		}
	}
	return { lens: await getLens() };
};
//#endregion
export { load };
