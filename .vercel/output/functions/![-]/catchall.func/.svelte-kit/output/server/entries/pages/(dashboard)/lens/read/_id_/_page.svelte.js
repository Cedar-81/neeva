import "../../../../../../chunks/index-server.js";
import { A as attr, M as escape_html, c as head, d as sanitize_props, f as slot, g as unsubscribe_stores, i as bind_props, m as store_get, p as spread_props, t as attr_class, v as html } from "../../../../../../chunks/server.js";
import "../../../../../../chunks/navigation.js";
import { a as personalBio, c as supabaseClient, o as scrollPosition, t as appSession } from "../../../../../../chunks/appStore.js";
import "../../../../../../chunks/dist.js";
import { t as Icon } from "../../../../../../chunks/Icon2.js";
import { t as Pencil } from "../../../../../../chunks/pencil.js";
import { t as page } from "../../../../../../chunks/stores.js";
import { a as lens, c as user_id, o as lensComments, s as singleLens } from "../../../../../../chunks/store.js";
import { t as Avatar } from "../../../../../../chunks/Avatar.js";
import "../../../../../../chunks/CommentList.js";
import { marked } from "marked";
//#region node_modules/lucide-svelte/dist/icons/heart.svelte
function Heart($$renderer, $$props) {
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
		{ name: "heart" },
		sanitize_props($$props),
		{
			/**
			* @component @name Heart
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heart
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" }]],
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
//#region node_modules/lucide-svelte/dist/icons/message-circle.svelte
function Message_circle($$renderer, $$props) {
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
		{ name: "message-circle" },
		sanitize_props($$props),
		{
			/**
			* @component @name MessageCircle
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/message-circle
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }]],
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
//#region src/components/lens/LensContentAppBar.svelte
function LensContentAppBar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let liked = store_get($$store_subs ??= {}, "$personalBio", personalBio) && store_get($$store_subs ??= {}, "$singleLens", singleLens).likes ? store_get($$store_subs ??= {}, "$singleLens", singleLens).likes.includes(store_get($$store_subs ??= {}, "$personalBio", personalBio).username) : false;
		$$renderer.push(`<div class="fixed bottom-0 lg:static w-full">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="navbar px-4 sticky top-0 space-x-6 items-center flex justify-between rounded-lg bg-base-300 min-h-[1rem] h-[4rem]"><input type="range" min="20" max="100"${attr("value", `${store_get($$store_subs ??= {}, "$scrollPosition", scrollPosition)}`)} class="range range-xs w-full"/> `);
		if (store_get($$store_subs ??= {}, "$singleLens", singleLens).published) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="flex relative items-center -space-x-3"><button${attr_class(`btn   relative hover:z-10 cursor-pointer`)}>`);
			Message_circle($$renderer, { class: "h-5 w-5" });
			$$renderer.push(`<!----></button> <button class="btn relative hover:z-10 cursor-pointer">`);
			Heart($$renderer, { class: `h-5 w-5 ${liked ? "text-[#35c5ec]" : "stroke-slate-400"}` });
			$$renderer.push(`<!----></button></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/components/lens/LensContent.svelte
function LensContent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let htmlText = marked.parse(store_get($$store_subs ??= {}, "$singleLens", singleLens).content);
		store_get($$store_subs ??= {}, "$personalBio", personalBio) && store_get($$store_subs ??= {}, "$singleLens", singleLens).likes && store_get($$store_subs ??= {}, "$singleLens", singleLens).likes.includes(store_get($$store_subs ??= {}, "$personalBio", personalBio).username);
		let owner = store_get($$store_subs ??= {}, "$singleLens", singleLens).UserDetails?.user_id == store_get($$store_subs ??= {}, "$user_id", user_id);
		$$renderer.push(`<div class="lg:p-8">`);
		if (owner) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", `/create/lens/write/${store_get($$store_subs ??= {}, "$singleLens", singleLens).id}`)} class="mb-6"><button class="btn btn-outline flex gap-3 items-center relative float-right">`);
			Pencil($$renderer, { class: "h-5 w-5" });
			$$renderer.push(`<!----> Edit Story</button></a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div id="one" class="bg-base-200 mx-auto max-w-4xl rounded-lg min-h-min"><div class="p-8 prose"><h1 class="text-2xl">${escape_html(store_get($$store_subs ??= {}, "$singleLens", singleLens).title)}</h1> ${html(htmlText)}</div> <div class="sticky bottom-0">`);
		LensContentAppBar($$renderer, {});
		$$renderer.push(`<!----></div></div> <div class="p-14"><h2 class="text-xl dark:text-gray-400">Author:</h2> <div class="flex mx-auto items-center">`);
		Avatar($$renderer, {
			avatar: {
				image: store_get($$store_subs ??= {}, "$singleLens", singleLens)?.UserDetails?.profile_image ? store_get($$store_subs ??= {}, "$singleLens", singleLens)?.UserDetails?.profile_image : "",
				name: "SO"
			},
			className: "h-[150px] w-[150px]"
		});
		$$renderer.push(`<!----> <div class="space-y-4"><div class="-space-y-2"><h1 class="text:xl lg:text-2xl items-center text-gray-300 flex">${escape_html(store_get($$store_subs ??= {}, "$singleLens", singleLens)?.UserDetails?.firstname + " " + store_get($$store_subs ??= {}, "$singleLens", singleLens)?.UserDetails?.lastname)} `);
		if (store_get($$store_subs ??= {}, "$appSession", appSession)) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span>`);
			if (!owner && store_get($$store_subs ??= {}, "$singleLens", singleLens)?.UserDetails?.following?.includes(store_get($$store_subs ??= {}, "$personalBio", personalBio).username)) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<button class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Unfollow</button>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (!owner && !store_get($$store_subs ??= {}, "$singleLens", singleLens)?.UserDetails?.following?.includes(store_get($$store_subs ??= {}, "$personalBio", personalBio).username)) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<button class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Follow</button>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></h1> <h2 class="pt-2">@${escape_html(store_get($$store_subs ??= {}, "$singleLens", singleLens)?.UserDetails?.username)}</h2></div></div></div></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/(dashboard)/lens/read/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let data = $$props["data"];
		let { params } = store_get($$store_subs ??= {}, "$page", page);
		let id = +params.id;
		singleLens.set(data.singleLens);
		user_id.set(data.userId);
		lensComments.set(data.comments);
		const lensList = data.lens.body.prioritizedLens;
		lens.set(lensList ? lensList : []);
		store_get($$store_subs ??= {}, "$supabaseClient", supabaseClient).channel("lens_comments_channel").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "LensComments"
		}, (event) => {
			let lens_comments = [...store_get($$store_subs ??= {}, "$lensComments", lensComments), {
				...event.new,
				UserDetails: {
					profile_image: store_get($$store_subs ??= {}, "$personalBio", personalBio).profile_image,
					username: store_get($$store_subs ??= {}, "$personalBio", personalBio).username
				}
			}];
			lensComments.set(lens_comments);
		}).subscribe();
		head("1j52fx2", $$renderer, ($$renderer) => {
			$$renderer.push(`<meta property="og:site_name" content="Neeva"/> <meta property="“og:title”"${attr("content", `Lens - ${data.singleLens.title}`)}/> <meta property="og:description"${attr("content", `${data.singleLens.summary}`)}/> <meta property="og:url"${attr("content", `https://neeva.vercel.app/lens/read/${id}`)}/> <meta property="og:type" content="article"/> <meta property="og:image:width" content="1280"/> <meta property="og:image:height" content="640"/> <meta property="twitter:card" content="summary"/>`);
		});
		LensContent($$renderer, {});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
