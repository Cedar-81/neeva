import { A as attr, M as escape_html, g as unsubscribe_stores, i as bind_props, m as store_get, s as ensure_array_like } from "../../../../chunks/server.js";
import { t as Icon } from "../../../../chunks/Icon.js";
import { n as books, r as categories } from "../../../../chunks/store.js";
import { t as BookCard } from "../../../../chunks/BookCard.js";
//#region src/components/BookCardImp.svelte
function BookCardImp($$renderer, $$props) {
	let book = $$props["book"];
	let { name, summary, genre, rating, image } = book;
	$$renderer.push(`<div class="card card-side w-[30rem] h-[15rem] bg-base-100 shadow-xl"><figure class="relative h-full !min-w-[10rem] !w-[10rem]"><img class="absolute inset-0 object-cover w-full h-full"${attr("src", image)}${attr("alt", name)}/></figure> <div class="card-body pl-8"><h2 class="card-title text-lg leading-6">${escape_html(name)}</h2> <p class="text-sm">${escape_html(summary)}</p> <div class="card-actions justify-end"><button class="btn normal-case">Read</button> <button class="btn btn-outline normal-case">Add to shelf</button></div></div></div>`);
	bind_props($$props, { book });
}
//#endregion
//#region src/components/browse/Category.svelte
function Category($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let category = $$props["category"];
		$$renderer.push(`<section class="grid grid-flow-col relative z-20 hover:overflow-x-auto space-x-6 category svelte-4q1w93"><!--[-->`);
		const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$books", books));
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let book = each_array[$$index];
			if (category.important) {
				$$renderer.push("<!--[0-->");
				BookCardImp($$renderer, { book });
			} else {
				$$renderer.push("<!--[-1-->");
				BookCard($$renderer, { book });
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></section>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { category });
	});
}
//#endregion
//#region src/components/browse/Categories.svelte
function Categories($$renderer) {
	var $$store_subs;
	$$renderer.push(`<div class="relative z-20 top-10"><!--[-->`);
	const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$categories", categories));
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let category = each_array[$$index];
		$$renderer.push(`<section class="space-y-4 pt-10 pl-8"><h2 class="text-xl text-white">${escape_html(category.name)}</h2> `);
		Category($$renderer, { category });
		$$renderer.push(`<!----></section>`);
	}
	$$renderer.push(`<!--]--></div>`);
	if ($$store_subs) unsubscribe_stores($$store_subs);
}
//#endregion
//#region src/components/browse/Search.svelte
function Search($$renderer) {
	$$renderer.push(`<section class="z-20 relative pt-8"><input type="text" placeholder="Search books" class="input input-bordered bg-black/10 input-md rounded-full w-60"/></section>`);
}
//#endregion
//#region src/components/browse/Backdrop.svelte
function Backdrop($$renderer) {
	$$renderer.push(`<div class="absolute backdrop-image inset-0 z-0 h-[100vh]"><img alt="featured" class="absolute inset-0 object-cover backdrop-blur-xl w-full h-full" src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"/> <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div></div>`);
}
//#endregion
//#region src/components/browse/Featured.svelte
function Featured($$renderer) {
	$$renderer.push(`<section class="px-10 right-0 relative m-0 z-20 bg-black text-gray-300">`);
	Backdrop($$renderer, {});
	$$renderer.push(`<!----> `);
	Search($$renderer, {});
	$$renderer.push(`<!----> <div class="relative w-[50%] space-y-4 pt-20 z-20"><div class="space-y-1"><h2 class="text-5xl text-white">WALL-E</h2> <p class="text-sm dark:text-gray-400">Sci-fi / Horror / Thriller</p></div> <div class="space-y-4"><div class="flex space-x-4 items-center"><div class="flex space-x-2">`);
	Icon($$renderer, {
		class: "h-5 w-5 text-yellow-300 ",
		icon: "material-symbols:star"
	});
	$$renderer.push(`<!----> `);
	Icon($$renderer, {
		class: "h-5 w-5 text-yellow-300 ",
		icon: "material-symbols:star"
	});
	$$renderer.push(`<!----> `);
	Icon($$renderer, {
		class: "h-5 w-5 text-yellow-300 ",
		icon: "material-symbols:star"
	});
	$$renderer.push(`<!----> `);
	Icon($$renderer, {
		class: "h-5 w-5 text-yellow-300 ",
		icon: "material-symbols:star"
	});
	$$renderer.push(`<!----> `);
	Icon($$renderer, {
		class: "h-5 w-5 text-yellow-300 ",
		icon: "material-symbols:star"
	});
	$$renderer.push(`<!----></div> <div class="h-2 w-2 rounded-full bg-gray-400"></div> <p class="text-blue-800 font-semibold">Score: 10</p></div> <p class="text-lg">Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit.
                Eveniet dicta quae, esse ad unde nemo provident, 
                vel labore tempore mollitia, minus magnam ut aperiam quis. 
                Nulla dolor aut dolore ratione.</p></div> <div class="flex space-x-4"><button class="btn px-10 normal-case text-lg">Read</button> <button class="btn btn-outline px-10 normal-case text-lg">Add to shelf</button></div></div></section>`);
}
//#endregion
//#region src/routes/(dashboard)/browse/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div class="relative overflow-hidden pb-20">`);
	Featured($$renderer, {});
	$$renderer.push(`<!----> `);
	Categories($$renderer, {});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _page as default };
