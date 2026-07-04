import "../../../../chunks/index-server.js";
import { c as head, d as sanitize_props, f as slot, g as unsubscribe_stores, i as bind_props, m as store_get, p as spread_props, s as ensure_array_like } from "../../../../chunks/server.js";
import "../../../../chunks/appStore.js";
import "../../../../chunks/dist.js";
import { t as Icon } from "../../../../chunks/Icon2.js";
import { a as lens } from "../../../../chunks/store.js";
import "../../../../chunks/Avatar.js";
import { t as LensCard } from "../../../../chunks/LensCard.js";
//#region node_modules/lucide-svelte/dist/icons/pen-line.svelte
function Pen_line($$renderer, $$props) {
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
		{ name: "pen-line" },
		sanitize_props($$props),
		{
			/**
			* @component @name PenLine
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgMjFoOCIgLz4KICA8cGF0aCBkPSJNMjEuMTc0IDYuODEyYTEgMSAwIDAgMC0zLjk4Ni0zLjk4N0wzLjg0MiAxNi4xNzRhMiAyIDAgMCAwLS41LjgzbC0xLjMyMSA0LjM1MmEuNS41IDAgMCAwIC42MjMuNjIybDQuMzUzLTEuMzJhMiAyIDAgMCAwIC44My0uNDk3eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/pen-line
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M13 21h8" }], ["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]],
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
//#region src/components/lens/LensHeader.svelte
function LensHeader($$renderer) {
	$$renderer.push(`<section class="space-y-8"><div class="mt-20 space-y-2"><div class="flex justify-between items-baseline pb-3 lg:pb-0"><h1 class="text-3xl text-black/80 dark:text-white">Lens</h1> <a class="text-base" href="/create/lens"><button class="btn lg:hidden text-[#35c5ec] animate-pulse space-x-2 flex items-center text-base">`);
	Pen_line($$renderer, { class: "h-5 w-5 stroke-[2px]" });
	$$renderer.push(`<!----><p>Create</p></button></a></div> <p class="text-sm lg:w-[70%]">Step into the Lens, where brevity is an art form that ignites 
          boundless creativity. In these small yet mighty stories, brevity 
          is the canvas for boundless creativity.  Dive into captivating 
          narratives, where every word holds a universe of meaning. Join us 
          on a journey through microfiction wonders, where every word 
          carries the weight of a universe. Whether you're reading or 
          crafting your own stories, Lens invites you to embrace the power 
          of concise storytelling.</p> <div class="hidden w-full lg:flex items-center justify-end px-4"><a class="text-base" href="/create/lens"><button class="btn text-[#35c5ec] animate-pulse space-x-2 flex items-center text-base">`);
	Pen_line($$renderer, { class: "h-5 w-5 stroke-[2px]" });
	$$renderer.push(`<!----><p>Create</p></button></a></div></div></section>`);
}
//#endregion
//#region src/components/lens/LensList.svelte
function LensList($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		if (store_get($$store_subs ??= {}, "$lens", lens).length == 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h2 class="w-full text-center text-xl text-black/60 dark:text-white/30 mt-[20%]">Well... I guess we are fresh out, why don't you write something :)</h2>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">`);
		if (store_get($$store_subs ??= {}, "$lens", lens).length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$lens", lens));
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let story = each_array[$$index];
				LensCard($$renderer, { story });
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></section>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/(dashboard)/lens/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let data = $$props["data"];
		const lensList = data.lens.body.prioritizedLens;
		lens.set(lensList ? lensList : []);
		head("1h8nwex", $$renderer, ($$renderer) => {
			$$renderer.push(`<meta property="og:site_name" content="Neeva"/> <meta property="“og:title”" content="Lens - Explore a world of unique captivating short stories"/> <meta property="og:description" content="Step into the Lens, where brevity is an art form that ignites boundless creativity. In these small yet mighty stories, brevity is the canvas for boundless creativity. Dive into captivating narratives, where every word holds a universe of meaning. Join us on a journey through microfiction wonders, where every word carries the weight of a universe. Whether you're reading or crafting your own stories, Lens invites you to embrace the power of concise storytelling."/> <meta property="og:url" content="https://neeva.vercel.app/lens"/> <meta property="og:type" content="website"/> <meta property="og:image" content="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/> <meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/> <meta property="og:image:width" content="1280"/> <meta property="og:image:height" content="640"/> <meta property="twitter:card" content="summary_large_image"/> <meta property="twitter:image" content="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/> <meta property="twitter:site" content="@neevaverse"/>`);
		});
		$$renderer.push(`<div class="px-8 pb-10">`);
		LensHeader($$renderer, {});
		$$renderer.push(`<!----> `);
		LensList($$renderer, {});
		$$renderer.push(`<!----></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
