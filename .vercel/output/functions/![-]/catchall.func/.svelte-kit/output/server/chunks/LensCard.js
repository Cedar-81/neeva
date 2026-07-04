import { A as attr, M as escape_html, g as unsubscribe_stores, i as bind_props, m as store_get } from "./server.js";
import { t as appSession } from "./appStore.js";
import { t as Icon } from "./Icon.js";
import { t as Avatar } from "./Avatar.js";
//#region src/components/lens/LensCard.svelte
function LensCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let story = $$props["story"];
		function trimStringToWordCount(inputString, maxWords) {
			const words = inputString.split(/\s+/);
			if (words.length > maxWords) return words.slice(0, maxWords).join(" ") + " ...";
			return inputString;
		}
		$$renderer.push(`<div class="hover:shadow-xl mx-auto cursor-pointer w-[16rem] lg:w-[15rem] bg-base-200 rounded-lg mt-8 p-4">`);
		if (story) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", "/lens/read/" + story.id)} class="text-sm flex flex-col justify-between h-full space-y-3"><div class="space-y-3"><h2 class="text-lg text-black/70 dark:text-white">${escape_html(story.title)}</h2> <p class="leading-5">${escape_html(trimStringToWordCount(story.summary, 60))}</p> <p><span class="font-bold">Genre:</span> ${escape_html(story.genre)}</p></div> <div class="space-y-3"><div class="flex justify-between items-center"><p class="flex items-center">`);
			Icon($$renderer, {
				class: "mr-1",
				icon: "solar:eye-broken"
			});
			$$renderer.push(`<!----> ${escape_html(story.views)}</p> <p class="flex items-center">`);
			Icon($$renderer, {
				class: "mr-1",
				icon: "basil:comment-outline"
			});
			$$renderer.push(`<!----> ${escape_html(story.comment_count)}</p> <p class="flex items-center">`);
			Icon($$renderer, {
				class: "mr-1",
				icon: "solar:heart-broken"
			});
			$$renderer.push(`<!----> ${escape_html(story.likes ? story.likes?.length : 0)}</p></div> `);
			if (store_get($$store_subs ??= {}, "$appSession", appSession)) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="divider my-2"></div> <div class="flex items-center px-1 pt-0">`);
				Avatar($$renderer, {
					className: "h-8 w-8",
					avatar: {
						image: story.UserDetails?.profile_image ? story.UserDetails.profile_image : "",
						name: "CO"
					}
				});
				$$renderer.push(`<!----></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { story });
	});
}
//#endregion
export { LensCard as t };
