import { M as escape_html, f as slot, g as unsubscribe_stores, i as bind_props, m as store_get, s as ensure_array_like } from "../../../../../../chunks/server.js";
import { t as Icon } from "../../../../../../chunks/Icon.js";
import { a as lens, s as singleLens } from "../../../../../../chunks/store.js";
import { t as LensCard } from "../../../../../../chunks/LensCard.js";
//#region src/components/lens/LensQuickLibCard.svelte
function LensQuickLibCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let lens = $$props["lens"];
		$$renderer.push(`<div class="bg-base-200 p-3 space-y-1 rounded-lg hover:shadow-lg cursor-pointer"><h2 class="text-sm text-black/70 dark:text-white">${escape_html(lens.title)}</h2> <p class="text-xs">${escape_html(lens.UserDetails?.username)}</p>  <div class="rounded-full text-sm pt-2"><div class="flex justify-between items-center"><p class="flex items-center">`);
		Icon($$renderer, {
			class: "mr-1",
			icon: "solar:eye-broken"
		});
		$$renderer.push(`<!----> ${escape_html(lens.views)}</p> <p class="flex items-center">`);
		Icon($$renderer, {
			class: "mr-1",
			icon: "basil:comment-outline"
		});
		$$renderer.push(`<!----> 0</p> <p class="flex items-center">`);
		Icon($$renderer, {
			class: "mr-1",
			icon: "solar:heart-broken"
		});
		$$renderer.push(`<!----> ${escape_html(lens.likes ? lens.likes.length : "0")}</p></div></div></div>`);
		bind_props($$props, { lens });
	});
}
//#endregion
//#region src/components/lens/LensQuickLibList.svelte
function LensQuickLibList($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const lensStories = store_get($$store_subs ??= {}, "$lens", lens).slice(0, 4);
		$$renderer.push(`<div class="space-y-5 lg:mt-8"><h3 class="text-lg text-black/80 dark:text-white">Quick Library</h3> <div class="space-y-4 pb-[4rem]"><!--[-->`);
		const each_array = ensure_array_like(lensStories);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let lens = each_array[$$index];
			LensQuickLibCard($$renderer, { lens });
		}
		$$renderer.push(`<!--]--></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/components/lens/LensReaderSidebar.svelte
function LensReaderSidebar($$renderer) {
	var $$store_subs;
	$$renderer.push(`<section class="lg:pr-8 lg:fixed top-0 right-0 lg:h-[100vh] lg:overflow-y-auto pb-10"><div class="hidden lg:block">`);
	LensCard($$renderer, { story: store_get($$store_subs ??= {}, "$singleLens", singleLens) });
	$$renderer.push(`<!----></div> `);
	LensQuickLibList($$renderer, {});
	$$renderer.push(`<!----></section>`);
	if ($$store_subs) unsubscribe_stores($$store_subs);
}
//#endregion
//#region src/routes/(dashboard)/lens/read/[id]/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.push(`<div class="lg:flex"><div class="flex-1"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></div> <div class="flex-none"><div class="lg:w-[18rem] w-full px-8 mx-auto">`);
	LensReaderSidebar($$renderer, {});
	$$renderer.push(`<!----></div></div></div>`);
}
//#endregion
export { _layout as default };
