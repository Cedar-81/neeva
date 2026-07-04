import { A as attr, M as escape_html, g as unsubscribe_stores, i as bind_props, m as store_get } from "../../../../chunks/server.js";
import { t as page } from "../../../../chunks/stores.js";
import { n as books } from "../../../../chunks/store.js";
import "../../../../chunks/BookCard.js";
//#region src/components/bookdetail/BookDetailContent.svelte
function BookDetailContent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { params } = store_get($$store_subs ??= {}, "$page", page);
		let id = +params.id;
		let book = store_get($$store_subs ??= {}, "$books", books).find((book) => book.id === id);
		$$renderer.push(`<div class="relative -top-8 flex px-20 pb-20 rounded-lg bg-base-200 justify-between z-10 max-w-4xl pt-20 mx-auto"><div class="space-y-14"><div class="space-y-4 w-[80%]"><h2 class="font-semibold text-white">Description</h2> <p>${escape_html(book?.summary)}</p></div> <div class="space-y-4"><h2 class="font-semibold text-white">Reviews</h2></div></div> <div class="space-y-14"><div class="space-y-4"><h2 class="font-semibold text-white">Language</h2> <p>English</p></div> <div class="space-y-4"><h2 class="font-semibold text-white">Genres</h2> <div><p><span class="font-semibold">Main:</span> ${escape_html(book?.genre)}</p> <p><span class="font-semibold">Other:</span> Young Adult, Coming of Age</p></div></div></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/components/bookdetail/BookDetImage.svelte
function BookDetImage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let book = $$props["book"];
		$$renderer.push(`<div class="book-container svelte-h2c73y"><div class="book svelte-h2c73y"><div class="h-44 w-32 relative rounded-lg overflow-hidden svelte-h2c73y"><img class="absolute inset-0 object-cover w-full h-full svelte-h2c73y"${attr("src", book?.image)}${attr("alt", book?.name)}/></div></div></div>`);
		bind_props($$props, { book });
	});
}
//#endregion
//#region src/components/bookdetail/BookDetailHeader.svelte
function BookDetailHeader($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { params } = store_get($$store_subs ??= {}, "$page", page);
		let id = +params.id;
		let book = store_get($$store_subs ??= {}, "$books", books).find((book) => book.id === id);
		$$renderer.push(`<div class="relative flex justify-center mt-20 z-20"><div class="flex max-w-[80%] space-x-10">`);
		BookDetImage($$renderer, { book });
		$$renderer.push(`<!----> <div class="static space-y-4 mt-4 w-[28rem]"><h1 class="text-3xl text-white">${escape_html(book?.name)}</h1> <div class="flex items-center space-x-2"><p class="text-white">JK Rowling</p> <span class="h-2 w-2 rounded-full bg-gray-400"></span> <p class="text-white">${escape_html(book?.rating)}/10</p></div> <p class="text-sm">${escape_html(book?.summary)}
                ${escape_html(book?.summary)}</p> <div><a${attr("href", "/books/read/" + id)}><button class="btn relative normal-case">Start Reading</button></a></div></div></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/(dashboard)/[id]/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<section class="w-full">`);
	BookDetailHeader($$renderer, {});
	$$renderer.push(`<!----> `);
	BookDetailContent($$renderer, {});
	$$renderer.push(`<!----></section>`);
}
//#endregion
export { _page as default };
