import "../../../../../chunks/index-server.js";
import { A as attr, M as escape_html, d as sanitize_props, f as slot, g as unsubscribe_stores, i as bind_props, m as store_get, p as spread_props, s as ensure_array_like } from "../../../../../chunks/server.js";
import { a as personalBio, c as supabaseClient } from "../../../../../chunks/appStore.js";
import "../../../../../chunks/dist.js";
import "../../../../../chunks/Icon.js";
import { t as Icon } from "../../../../../chunks/Icon2.js";
import { t as Pencil } from "../../../../../chunks/pencil.js";
import "../../../../../chunks/stores.js";
import { l as usersLens, t as author } from "../../../../../chunks/store.js";
import "../../../../../chunks/Avatar.js";
import "compressorjs";
//#region node_modules/lucide-svelte/dist/icons/earth.svelte
function Earth($$renderer, $$props) {
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	Icon($$renderer, spread_props([
		{ name: "earth" },
		sanitize_props($$props),
		{
			/**
			* @component @name Earth
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuNTQgMTVIMTdhMiAyIDAgMCAwLTIgMnY0LjU0IiAvPgogIDxwYXRoIGQ9Ik03IDMuMzRWNWEzIDMgMCAwIDAgMyAzYTIgMiAwIDAgMSAyIDJjMCAxLjEuOSAyIDIgMmEyIDIgMCAwIDAgMi0yYzAtMS4xLjktMiAyLTJoMy4xNyIgLz4KICA8cGF0aCBkPSJNMTEgMjEuOTVWMThhMiAyIDAgMCAwLTItMmEyIDIgMCAwIDEtMi0ydi0xYTIgMiAwIDAgMC0yLTJIMi4wNSIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/earth
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["path", { "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
				["path", { "d": "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }],
				["path", { "d": "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
				["circle", {
					"cx": "12",
					"cy": "12",
					"r": "10"
				}]
			],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
//#endregion
//#region src/components/Profile/ProfileHeader.svelte
function ProfileHeader($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let owner = $$props["owner"];
		let charCount = 0;
		const maxChars = 200;
		const profile = { ...store_get($$store_subs ??= {}, "$author", author) };
		function updateCharCount() {
			charCount = profile.bio ? profile.bio.length : 0;
			if (profile.bio && charCount > maxChars) {
				profile.bio = profile.bio.substring(0, maxChars);
				charCount = maxChars;
			}
		}
		$: updateCharCount();
		$$renderer.push(`<div><label for="bannerImageInput"><div class="w-full h-[40vh] relative group bg-accent/30"><img class="w-full h-full object-cover"${attr("src", store_get($$store_subs ??= {}, "$author", author).banner_image)} alt="banner_image"/> `);
		if (owner) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="absolute text-[#35c5ec] transition-all hidden group-hover:flex cursor-pointer items-center justify-center h-full w-full bg-black/40 top-0 right-0">`);
			Pencil($$renderer, { class: "h-8 w-8 text-[#35c5ec]-focus" });
			$$renderer.push(`<!----></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></label> <input type="file" class="hidden" accept="image/*" name="bannerImageInput" id="bannerImageInput"/></div> <dialog id="my_modal_1" class="modal"><form method="dialog" class="modal-box space-y-4"><h3 class="text-xl">Update Profile</h3> <div class="form-control w-full"><label for="firstname" class="label"><span class="label-text font-bold text-black/80 dark:text-white">Firstname</span></label> <input id="firtname" name="firstname"${attr("value", profile.firstname)} type="text" placeholder="Firstname" class="input input-bordered w-full"/></div> <div class="form-control w-full"><label for="lastname" class="label"><span class="label-text font-bold text-black/70 dark:text-white">Lastname</span></label> <input id="lastname" name="lastname"${attr("value", profile.lastname)} type="text" placeholder="Lastname" class="input input-bordered w-full"/></div> <div class="form-control w-full"><label for="username" class="label"><span class="label-text font-bold text-black/70 dark:text-white">Username</span></label> <input id="username" name="username"${attr("value", profile.username)} type="text" placeholder="@username" class="input input-bordered w-full"/></div> <div class="form-control"><label for="bio" class="label"><span class="label-text text-black/70 dark:text-white">Bio</span></label> <textarea rows="4" cols="50" name="bio" id="bio" class="textarea textarea-bordered h-24" placeholder="Bio">`);
		const $$body = escape_html(profile.bio);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea> <div class="w-full flex justify-end pt-2"><p class="text-xs"><span>${escape_html(charCount)}</span> / 200 characters</p></div></div> <button class="btn normal-case w-full text-black/70 dark:text-white">Update Profile</button></form></dialog> <div class="w-full max-w-[96vw] px-20 flex flex-col items-center lg:mt-14"><div class="flex w-full justify-center mt-8"><div class="flex flex-col lg:space-x-14 lg:flex-row mx-auto items-center"><form><label for="imageInput"><div class="relative group transition-all"><div class="w-[130px] h-[130px] border-2 mask mask-hexagon bg-accent/30"><img class="w-full h-full object-cover"${attr("src", store_get($$store_subs ??= {}, "$author", author).profile_image)}${attr("alt", `${store_get($$store_subs ??= {}, "$author", author).username}'s profile'`)}/></div> `);
		if (owner) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="absolute text-[#35c5ec] transition-all hidden group-hover:flex cursor-pointer items-center justify-center h-full w-full bg-black/40 top-0 right-0 mask mask-hexagon">`);
			Pencil($$renderer, { class: "h-8 w-8 text-[#35c5ec]-focus" });
			$$renderer.push(`<!----></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></label> <input type="file" class="hidden" accept="image/*" name="imageInput" id="imageInput"/></form> <div class="lg:mt-8 mt-4 space-y-4"><div class="-space-y-2"><h1 class="text-xl md:text-2xl items-center dark:text-gray-300 flex">${escape_html(store_get($$store_subs ??= {}, "$author", author).firstname + " " + store_get($$store_subs ??= {}, "$author", author).lastname)} <span class="flex items-center gap-3">`);
		if (!owner && store_get($$store_subs ??= {}, "$author", author).user_is_following) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Unfollow</button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (!owner && !store_get($$store_subs ??= {}, "$author", author).user_is_following) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Follow</button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (owner) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button class="pl-5 text-[#35c5ec] text-sm flex gap-2">Edit Profile `);
			Pencil($$renderer, { class: "h-5 w-5" });
			$$renderer.push(`<!----></button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></span></h1> <h2>@${escape_html(store_get($$store_subs ??= {}, "$author", author).username)}</h2></div> <div class="flex space-x-20"><div class="flex items-center justify-center flex-col font-bold"><h3 class="dark:text-gray-300 md:text-lg">${escape_html(store_get($$store_subs ??= {}, "$author", author).followers ? store_get($$store_subs ??= {}, "$author", author).followers?.length : 0)}</h3> <p class="uppercase text-xs font-bold">followers</p></div> <div class="flex items-center justify-center flex-col font-bold"><h3 class="dark:text-gray-300 md:text-lg">${escape_html(store_get($$store_subs ??= {}, "$author", author).following ? store_get($$store_subs ??= {}, "$author", author).following?.length : 0)}</h3> <p class="uppercase text-xs font-bold">following</p></div></div></div></div></div> <div class="w-[100vw] px-10 text-center lg:max-w-[60vw] mt-16"><p class="whitespace-break-all">${escape_html(store_get($$store_subs ??= {}, "$author", author).bio)}</p></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { owner });
	});
}
//#endregion
//#region src/components/Profile/ProfileLensCard.svelte
function ProfileLensCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let story = $$props["story"];
		let owner = $$props["owner"];
		$$renderer.push(`<div class="hover:shadow-xl mx-auto cursor-pointer w-[16rem] lg:w-[15rem] bg-base-200 rounded-lg mt-8 p-4">`);
		if (story) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", "/lens/read/" + story.id)} class="text-sm flex flex-col justify-between h-full space-y-3"><div class="space-y-3"><h2 class="text-lg text-black/80 dark:text-white">${escape_html(story.title)}</h2> <p class="leading-5">${escape_html(story.summary)}</p> <p><span class="font-bold">Genre:</span> ${escape_html(story.genre)}</p></div> `);
			if (owner && !story.published || owner && story.published == null) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="text-sm gap-2 items-center font-semibold text-red-600/40 flex">`);
				Pencil($$renderer, { class: "h-3 w-3" });
				$$renderer.push(`<!----> Draft</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (owner && story.published) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="text-sm gap-2 items-center font-semibold text-green-600/40 flex">`);
				Earth($$renderer, { class: "h-3 w-3" });
				$$renderer.push(`<!----> Published</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, {
			story,
			owner
		});
	});
}
//#endregion
//#region src/components/Profile/ProfileLens.svelte
function ProfileLens($$renderer, $$props) {
	var $$store_subs;
	let owner = $$props["owner"];
	let lensToShow = store_get($$store_subs ??= {}, "$usersLens", usersLens);
	if (!owner) lensToShow = lensToShow.filter((lens) => lens.published == true);
	$$renderer.push(`<section class="mt-20"><h4 class="text-xl pl-6 lg:pl-0">Lens</h4> `);
	if (lensToShow.length > 0) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-20"><!--[-->`);
		const each_array = ensure_array_like(lensToShow);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let lens = each_array[$$index];
			ProfileLensCard($$renderer, {
				owner,
				story: lens
			});
		}
		$$renderer.push(`<!--]--></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> `);
	if (lensToShow.length == 0) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="w-full h-full flex items-center justify-center p-8"><p class="text-xl dark:text-gray-500">${escape_html(`${!owner ? `This user doesn't` : "You don't"}`)} have any Lens yet.</p></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></section>`);
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { owner });
}
//#endregion
//#region src/routes/(dashboard)/profile/[username]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let data = $$props["data"];
		let owner = data.usersLens ? data.usersLens.profileOwner : false;
		data.usersLens && usersLens.set(data.usersLens.lens);
		author.set(data.profile);
		store_get($$store_subs ??= {}, "$supabaseClient", supabaseClient).channel("author_profile_channel").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "UserDetails"
		}, (event) => {
			let author_profile;
			author_profile = event.new;
			const is_following = author_profile.followers == null ? false : !(author_profile.followers?.indexOf(store_get($$store_subs ??= {}, "$personalBio", personalBio).username) == -1);
			if (author_profile.user_id !== store_get($$store_subs ??= {}, "$author", author).user_id) {
				personalBio.set(author_profile);
				return;
			}
			author.set({
				...author_profile,
				user_is_following: is_following,
				lens_progress: store_get($$store_subs ??= {}, "$author", author).lens_progress
			});
		}).subscribe();
		$$renderer.push(`<section class="lg:pl-8">`);
		ProfileHeader($$renderer, { owner });
		$$renderer.push(`<!----> `);
		ProfileLens($$renderer, { owner });
		$$renderer.push(`<!----></section>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
