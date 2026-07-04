import { n as PUBLIC_SUPABASE_URL } from "../../../../../chunks/public.js";
import { redirect } from "@sveltejs/kit";
//#region src/routes/(dashboard)/profile/[username]/+page.server.ts
var load = async ({ params, locals: { supabase, getSession } }) => {
	const session = await getSession();
	async function getAuthor() {
		const { username } = params;
		if (!session) throw redirect(303, "/auth/signin");
		const { data: profile, error } = await supabase.from("UserDetails").select("*").eq("username", username).single();
		if (error) throw error;
		const loggedInUser = await getAuthorWithId(session.user.id);
		const is_following = profile.followers == null ? false : !(profile.followers?.indexOf(loggedInUser.username) == -1);
		console.log("liu, following, profile", loggedInUser.username, is_following, profile);
		return {
			...profile,
			user_is_following: is_following,
			lens_progress: JSON.stringify(profile.lens_progress)
		};
	}
	async function getAuthorLens() {
		const { username } = params;
		if (!session) throw redirect(303, "/auth/signin");
		const { data: user, error: err } = await supabase.from("UserDetails").select("*").eq("username", username).single();
		console.log("here here here", user);
		if (err) throw err;
		if (!user || !user.id) return;
		const { data: lens, error } = await supabase.from("Lens").select("*").eq("author_id", user.id);
		if (user.user_id === session.user.id) lens?.sort((a, b) => {
			if (a.published !== b.published) return a.published ? 1 : -1;
			return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
		});
		else lens?.sort((a, b) => {
			return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
		});
		console.log("lens", lens);
		if (error) throw error;
		return {
			lens,
			profileOwner: user.user_id === session.user.id
		};
	}
	async function getAuthorWithId(id) {
		const { data: profile, error } = await supabase.from("UserDetails").select("*").eq("user_id", id).single();
		console.log("author", profile);
		if (error) throw error;
		return profile;
	}
	return {
		profile: getAuthor(),
		usersLens: getAuthorLens()
	};
};
var actions = {
	follow: async ({ request, params, url, locals: { getSession, supabase } }) => {
		await getSession();
		const dataVal = { content: "" };
		(await request.formData()).forEach((value) => dataVal.content = value);
		let userFollowing = JSON.parse(dataVal.content).user_following;
		let userToFollow = JSON.parse(dataVal.content).user_to_follow;
		console.log("new follow button", userFollowing, userToFollow);
		if (userFollowing.following == null || userToFollow.followers == null) {
			userToFollow.followers = [];
			userFollowing.following = [];
		}
		if (userToFollow.username && userFollowing.following.indexOf(userToFollow.username) == -1) {
			userFollowing.following.push(userToFollow.username);
			console.log("following ", userToFollow.username, userFollowing);
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
		await getSession();
		const dataVal = { content: "" };
		(await request.formData()).forEach((value) => dataVal.content = value);
		let userFollowing = JSON.parse(dataVal.content).user_following;
		let userToFollow = JSON.parse(dataVal.content).user_to_follow;
		console.log("new follow button", userFollowing, userToFollow);
		if (userFollowing.following == null || userToFollow.followers == null) return;
		if (userToFollow.username && !(userFollowing.following.indexOf(userToFollow.username) == -1)) {
			userFollowing.following.indexOf(userToFollow.username);
			const newFollowing = userFollowing.following.filter((username) => username !== userToFollow.username);
			const { data: user2, error: err2 } = await supabase.from("UserDetails").update({ following: newFollowing }).eq("username", userFollowing.username);
			if (err2) throw err2;
		}
		if (userFollowing.username && !(userToFollow.followers.indexOf(userFollowing.username) == -1)) {
			const newFollowers = userToFollow.followers.filter((username) => username !== userFollowing.username);
			const { data: user2, error: err2 } = await supabase.from("UserDetails").update({ followers: newFollowers }).eq("username", userToFollow.username);
			if (err2) throw err2;
		}
		console.log("u2f, uf, u2funame, ufuname", userToFollow.followers, userFollowing.following, userToFollow.username, userFollowing.username);
		console.log("Followed successfully");
	},
	uploadProfileImage: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		if (!session) throw redirect(303, "/auth/signin");
		const content = await request.formData();
		const image = content.get("info");
		const profile_version_no = content.get("profile_version");
		console.log("profile", image);
		const { data, error } = await supabase.storage.from("avatar").upload(`profile/${session.user.id}.png?v=${profile_version_no}`, image, {
			cacheControl: "3600",
			upsert: true
		});
		if (error) throw error;
		const imageUrl = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatar`;
		const { error: err } = await supabase.from("UserDetails").update({
			profile_version_no: parseInt(profile_version_no, 10),
			profile_image: `${imageUrl}/profile/${session && session.user.id}.png?v${profile_version_no}`
		}).eq("user_id", session.user.id);
		if (err) throw err;
	},
	uploadBannerImage: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		if (!session) throw redirect(303, "/auth/signin");
		const content = await request.formData();
		const image = content.get("info");
		const banner_version_no = content.get("banner_version");
		console.log("image upload", content.get("info"), content.get("type"));
		const { data, error } = await supabase.storage.from("avatar").upload(`banner/${session.user.id}.png?v=${banner_version_no}`, image, {
			cacheControl: "3600",
			upsert: true
		});
		if (error) throw error;
		const imageUrl = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatar`;
		console.log("banner ", banner_version_no, imageUrl, session.user.id);
		const { error: err } = await supabase.from("UserDetails").update({
			banner_version_no: parseInt(banner_version_no, 10),
			banner_image: `${imageUrl}/banner/${session.user.id}.png?v${banner_version_no}`
		}).eq("user_id", session.user.id);
		if (err) throw err;
	},
	updateProfile: async ({ request, params, url, locals: { getSession, supabase } }) => {
		const session = await getSession();
		const content = await request.formData();
		const profile = JSON.parse(content.get("profile"));
		console.log("updated profile", profile);
		if (session) {
			const { error: err } = await supabase.from("UserDetails").update({
				firstname: profile.firstname,
				lastname: profile.lastname,
				username: profile.username,
				bio: profile.bio
			}).eq("user_id", session.user.id);
			if (err) throw err;
		}
	}
};
//#endregion
export { actions, load };
