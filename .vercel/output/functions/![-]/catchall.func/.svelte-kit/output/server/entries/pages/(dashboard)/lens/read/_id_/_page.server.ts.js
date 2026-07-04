import { t as calculatePostPriority } from "../../../../../../chunks/lensPriorityCalc.js";
import { fail, redirect } from "@sveltejs/kit";
//#region src/routes/(dashboard)/lens/read/[id]/+page.server.ts
var load = async ({ params, locals: { supabase, getSession } }) => {
	const { id } = params;
	const session = await getSession();
	async function getSingleLens() {
		const { data: lens, error } = await supabase.from("Lens").select(`*, UserDetails (username, profile_image, firstname, lastname, following, followers, user_id)`).eq("id", id).single();
		if (error) throw error;
		return {
			...lens,
			comment_count: 0,
			progress: 0
		};
	}
	async function getCommentCount(lens_id) {
		try {
			const { data: comments, error } = await supabase.from("LensComments").select("id").eq("lens_id", lens_id);
			if (error) throw error;
			console.log("comments: ", comments);
			return comments.length;
		} catch (error) {
			console.error("Error getting comment count:", error);
			return -1;
		}
	}
	async function getComments() {
		const { data: comments, error } = await supabase.from("LensComments").select(`*, UserDetails (profile_image, username)`).eq("lens_id", id);
		if (error) throw error;
		console.log("inside comments", id, comments);
		return comments;
	}
	const getLens = async () => {
		const { data, error } = await supabase.from("Lens").select("*, UserDetails (profile_image, username)").eq("published", true);
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
	return {
		singleLens: await getSingleLens(),
		userId: session?.user?.id ?? null,
		comments: await getComments(),
		lens: await getLens()
	};
};
var actions = {
	likeLens: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const { id } = params;
		const session = await getSession();
		const content = await request.formData();
		const liked = content.get("liked");
		const username = content.get("username");
		if (!session) throw redirect(303, "/auth/signin");
		const { data, error: err } = await supabase.from("Lens").select("*").eq("id", id).single();
		if (err) return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
		let likes = data?.likes ? data.likes : [];
		if (liked == "true" && !likes.includes(username)) {
			likes.push(username);
			console.log("not meant to be here", likes, id);
			const { error: err } = await supabase.from("Lens").update({ likes }).eq("id", id);
			if (err) return fail(500, {
				message: "Server error. Try again later.",
				success: false
			});
		}
		if (liked == "false" && likes.includes(username)) {
			console.log("in here");
			const updatedLikes = likes.filter((item) => item !== username);
			console.log("updated likes", updatedLikes);
			const { error: err } = await supabase.from("Lens").update({ likes: updatedLikes }).eq("id", id);
			if (err) return fail(500, {
				message: "Server error. Try again later.",
				success: false
			});
		}
	},
	postComment: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const { id } = params;
		const session = await getSession();
		const content = await request.formData();
		const comment = content.get("comment");
		const username = content.get("username");
		console.log("handling comment: ", username, comment, id, session?.user.id);
		if (!session) throw redirect(303, "/auth/signin");
		const { error: err } = await supabase.from("LensComments").insert({
			content: comment,
			lens_id: id,
			author_username: username
		});
		if (err) return fail(500, {
			message: "Server error. Try again later.",
			success: false
		});
	},
	follow: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const content = await request.formData();
		if (!session) throw redirect(303, "/auth/signin");
		let userFollowing = JSON.parse(content.get("user_following"));
		let userToFollow = JSON.parse(content.get("user_to_follow"));
		console.log("new follow button", userFollowing, userToFollow);
		if (userFollowing.following == null || userToFollow.followers == null) {
			userToFollow.followers = [];
			userFollowing.following = [];
		}
		if (userToFollow.username && userFollowing.following.indexOf(userToFollow.username) == -1) {
			userFollowing.following.push(userToFollow.username);
			const { data: user2, error: err2 } = await supabase.from("UserDetails").update({ following: userFollowing.following }).eq("username", userFollowing.username);
			if (err2) throw err2;
		}
		if (userFollowing.username && userToFollow.followers.indexOf(userFollowing.username) == -1) {
			userToFollow.followers.push(userFollowing.username);
			const { data: user2, error: err2 } = await supabase.from("UserDetails").update({ followers: userToFollow.followers }).eq("username", userToFollow.username);
			if (err2) throw err2;
		}
		console.log("u2f, uf, u2funame, ufuname", userToFollow.followers, userFollowing.following, userToFollow.username, userFollowing.username);
		console.log("Followed successfully");
	},
	unfollow: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const content = await request.formData();
		if (!session) throw redirect(303, "/auth/signin");
		let userFollowing = JSON.parse(content.get("user_following"));
		let userToFollow = JSON.parse(content.get("user_to_follow"));
		console.log("new follow button", userFollowing, userToFollow);
		if (userFollowing.following == null || userToFollow.followers == null) return;
		if (userToFollow.username && !(userFollowing.following.indexOf(userToFollow.username) == -1)) {
			const usernameIndex = userFollowing.following.indexOf(userToFollow.username);
			userFollowing.following.splice(usernameIndex, 1);
			const { data: user2, error: err2 } = await supabase.from("UserDetails").update({ following: userFollowing.following }).eq("username", userFollowing.username);
			if (err2) throw err2;
		}
		if (userFollowing.username && !(userToFollow.followers.indexOf(userFollowing.username) == -1)) {
			const usernameIndex = userToFollow.followers.indexOf(userFollowing.username);
			userToFollow.followers.splice(usernameIndex, 1);
			const { data: user2, error: err2 } = await supabase.from("UserDetails").update({ followers: userToFollow.followers }).eq("username", userToFollow.username);
			if (err2) throw err2;
		}
		console.log("u2f, uf, u2funame, ufuname", userToFollow.followers, userFollowing.following, userToFollow.username, userFollowing.username);
		console.log("Followed successfully");
	},
	view: async ({ request, params, url, locals: { getSession, supabase } }) => {
		await getSession();
		const { id } = params;
		let viewCount = (await request.formData()).get("view_count");
		console.log("viewcount ", viewCount);
		const { data: user, error: err } = await supabase.from("Lens").update({ views: parseInt(viewCount) }).eq("id", id);
		if (err) throw err;
	}
};
//#endregion
export { actions, load };
