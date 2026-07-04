import { M as escape_html, f as slot, g as unsubscribe_stores, m as store_get, s as ensure_array_like } from "../../../../../../chunks/server.js";
import { t as Icon } from "../../../../../../chunks/Icon.js";
import { t as page } from "../../../../../../chunks/stores.js";
import { a as lens, n as books } from "../../../../../../chunks/store.js";
import { t as BookImage } from "../../../../../../chunks/BookImage.js";
//#region src/components/Bookshelf/BSQuickLibCard.svelte
function BSQuickLibCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { params } = store_get($$store_subs ??= {}, "$page", page);
		let id = +params.id;
		let book = store_get($$store_subs ??= {}, "$books", books).find((book) => book.id === id);
		let bookname = book ? book?.name : "";
		function limitWords(sentence, characterLimit) {
			if (sentence.length > characterLimit) return `${sentence.substring(0, characterLimit)}...`;
			return sentence;
		}
		$$renderer.push(`<div class="bg-base-200 p-4 space-x-4 flex rounded-lg hover:shadow-lg cursor-pointer">`);
		BookImage($$renderer, {
			book,
			className: "!h-24 !w-20"
		});
		$$renderer.push(`<!----> <div class="space-y-2 mt-1"><div class="flex space-x-1 bg-yellow-200/20 rounded-full px-2 w-max items-center">`);
		Icon($$renderer, {
			class: "h-4 w-4 text-yellow-500 ",
			icon: "material-symbols:star"
		});
		$$renderer.push(`<!----> <p class="text-xs mt-1">${escape_html(book?.rating)}</p></div> <div class="space-y-1"><h2 class="text-sm text-white">${escape_html(limitWords(bookname, 25))}</h2> <p class="text-xs">Don Norman</p> <progress class="progress progress-accent w-full" value="50" max="100"></progress></div></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/components/Bookshelf/BSQuickLibList.svelte
function BSQuickLibList($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const lensStories = store_get($$store_subs ??= {}, "$lens", lens).slice(0, 2);
		$$renderer.push(`<div class="space-y-5 mt-8"><h3 class="text-lg text-white">Quick Library</h3> <div class="space-y-4"><!--[-->`);
		const each_array = ensure_array_like(lensStories);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			each_array[$$index];
			BSQuickLibCard($$renderer, {});
		}
		$$renderer.push(`<!--]--></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/components/Bookshelf/BSReaderSidebar.svelte
function BSReaderSidebar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { params } = store_get($$store_subs ??= {}, "$page", page);
		let id = +params.id;
		let book = store_get($$store_subs ??= {}, "$books", books).find((book) => book.id === id);
		$$renderer.push(`<section class="pr-6 py-6 fixed top-0 right-0 w-[21rem] h-[100vh] overflow-y-auto pb-10"><div class="space-y-7 mt-4">`);
		BookImage($$renderer, {
			book,
			className: "h-44 w-32 mx-auto"
		});
		$$renderer.push(`<!----> <div class="space-y-4 flex flex-col items-center"><h2 class="text-lg text-white leading-6 text-center">${escape_html(book?.name)}</h2> <progress class="progress progress-accent w-[90%] mx-auto" value="50" max="100"></progress></div></div> `);
		BSQuickLibList($$renderer, {});
		$$renderer.push(`<!----></section>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/(dashboard)/books/read/[id]/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.push(`<div class="flex"><div class="flex-1"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></div> <div class="flex-none"><div class="w-[21rem]">`);
	BSReaderSidebar($$renderer, {});
	$$renderer.push(`<!----></div></div></div>`);
}
//#endregion
export { _layout as default };
