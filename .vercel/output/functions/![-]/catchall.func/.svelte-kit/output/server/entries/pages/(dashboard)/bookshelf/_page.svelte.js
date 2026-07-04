import { M as escape_html, g as unsubscribe_stores, i as bind_props, m as store_get, s as ensure_array_like } from "../../../../chunks/server.js";
import { n as books } from "../../../../chunks/store.js";
import { t as BookCard } from "../../../../chunks/BookCard.js";
//#region src/components/Bookshelf/ShelfCategory.svelte
function ShelfCategory($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let category = $$props["category"];
		$$renderer.push(`<section class="grid grid-cols-6 category svelte-1ag3294">`);
		if (category.continue) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$books", books).slice(0, 5));
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let book = each_array[$$index];
				BookCard($$renderer, {
					book,
					className: "mt-8"
				});
			}
			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--[-->`);
			const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$books", books));
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let book = each_array_1[$$index_1];
				BookCard($$renderer, {
					book,
					className: "mt-8"
				});
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></section>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { category });
	});
}
//#endregion
//#region src/components/Bookshelf/ShelfCategories.svelte
function ShelfCategories($$renderer) {
	const categories = [{
		name: "Hop Back In",
		continue: true
	}, {
		name: "Check These",
		continue: false
	}];
	$$renderer.push(`<div class="relative z-20 top-10 space-y-10"><!--[-->`);
	const each_array = ensure_array_like(categories);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let category = each_array[$$index];
		$$renderer.push(`<section class="pt-10 pl-8"><h2 class="text-xl text-white">${escape_html(category.name)}</h2> `);
		ShelfCategory($$renderer, { category });
		$$renderer.push(`<!----></section>`);
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
//#region src/components/Bookshelf/ShelfHeader.svelte
function ShelfHeader($$renderer) {
	$$renderer.push(`<section class="space-y-8"><div class="w-[50%] mt-20 space-y-2"><h1 class="text-3xl text-white">Continue Your Journey</h1> <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quae harum repellat quisquam magni quos dolore debitis repellendus vitae, 
            odio porro quis voluptatem nam ratione beatae unde quam impedit in exercitationem?</p></div></section>`);
}
//#endregion
//#region src/routes/(dashboard)/bookshelf/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div class="px-8 pb-20">`);
	ShelfHeader($$renderer, {});
	$$renderer.push(`<!----> `);
	ShelfCategories($$renderer, {});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _page as default };
