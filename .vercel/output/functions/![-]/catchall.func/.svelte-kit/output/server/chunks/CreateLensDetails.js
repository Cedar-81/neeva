import "./index-server.js";
import { A as attr, M as escape_html, d as sanitize_props, f as slot, g as unsubscribe_stores, m as store_get, p as spread_props, s as ensure_array_like } from "./server.js";
import "./navigation.js";
import { a as personalBio, n as genres } from "./appStore.js";
import "./dist.js";
import { t as Icon } from "./Icon2.js";
//#region node_modules/lucide-svelte/dist/icons/view.svelte
function View($$renderer, $$props) {
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
		{ name: "view" },
		sanitize_props($$props),
		{
			/**
			* @component @name View
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTd2MmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtMiIgLz4KICA8cGF0aCBkPSJNMjEgN1Y1YTIgMiAwIDAgMC0yLTJINWEyIDIgMCAwIDAtMiAydjIiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIgLz4KICA8cGF0aCBkPSJNMTguOTQ0IDEyLjMzYTEgMSAwIDAgMCAwLS42NiA3LjUgNy41IDAgMCAwLTEzLjg4OCAwIDEgMSAwIDAgMCAwIC42NiA3LjUgNy41IDAgMCAwIDEzLjg4OCAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/view
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["path", { "d": "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }],
				["path", { "d": "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }],
				["circle", {
					"cx": "12",
					"cy": "12",
					"r": "1"
				}],
				["path", { "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }]
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
//#region src/components/Create/CreateLensDetails.svelte
function CreateLensDetails($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let text = "";
		let charCount = 0;
		const maxChars = 500;
		function updateCharCount() {
			charCount = text.length;
			if (charCount > maxChars) {
				text = text.substring(0, maxChars);
				charCount = maxChars;
			}
		}
		const detailFormVal = {
			title: "",
			genre: "",
			summary: "",
			author_id: store_get($$store_subs ??= {}, "$personalBio", personalBio).id
		};
		$: updateCharCount();
		$$renderer.push(`<div class="w-full h-full flex items-center justify-center"><div class="tooltip" data-tip="Click to start writing"><button><div class="flex flex-col items-center justify-center border-2 transition-all border-transparent hover:border-accent-focus/30 bg-base-200 rounded-lg m-8 min-h-[11rem] p-8">`);
		View($$renderer, { class: "w-[8rem] h-[9rem] text-accent-focus/60" });
		$$renderer.push(`<!----> <p class="pt-4 text-center text-accent-focus font-bold">Start Writing</p></div></button></div></div> <dialog id="my_modal_1" class="modal"><form class="modal-box space-y-4"><h3 class="text-xl">Create Lens</h3> <div class="form-control w-full"><label for="title" class="label"><span class="label-text">Title</span></label> <input id="title"${attr("value", detailFormVal.title)} name="title" type="text" placeholder="Enter lens title" class="input input-bordered w-full"/></div> <div class="form-control w-full"><label for="genre" class="label"><span class="label-text">Genre</span></label> `);
		$$renderer.select({
			name: "genre",
			value: detailFormVal.genre,
			id: "genre",
			class: "select select-bordered"
		}, ($$renderer) => {
			$$renderer.option({
				disabled: true,
				selected: true,
				class: "text-normal"
			}, ($$renderer) => {
				$$renderer.push(`Select genre`);
			});
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(genres);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let genre = each_array[$$index];
				$$renderer.option({}, genre);
			}
			$$renderer.push(`<!--]-->`);
		});
		$$renderer.push(`</div> <div class="form-control"><label for="summary" class="label"><span class="label-text">Plot</span></label> <textarea rows="4" cols="50" name="summary" id="summary" class="textarea textarea-bordered h-24" placeholder="Lens summary">`);
		const $$body = escape_html(detailFormVal.summary);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea> <div class="w-full flex justify-end pt-2"><p class="text-xs"><span>${escape_html(charCount)}</span> / 500 characters</p></div></div> <div class="modal-action"><button type="submit" class="btn">Create</button></div></form></dialog>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { CreateLensDetails as t };
