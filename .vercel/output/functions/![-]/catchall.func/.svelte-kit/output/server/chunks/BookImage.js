import { A as attr, i as bind_props, t as attr_class } from "./server.js";
//#region src/components/BookImage.svelte
function BookImage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let className = $$props["className"];
		let book = $$props["book"];
		$$renderer.push(`<div${attr_class("relative rounded-lg overflow-hidden perspective book-cover " + className, "svelte-1yzinxe")}><div class="absolute inset-0 transform rotate-y-12 bg-white shadow-2xl"><div class="h-full w-1/3 absolute top-0 left-0 bg-gradient-to-r from-gray-100 to-transparent"></div> <img class="absolute inset-0 object-cover w-full h-full"${attr("src", book?.image)}${attr("alt", book?.name)}/></div></div>`);
		bind_props($$props, {
			className,
			book
		});
	});
}
//#endregion
export { BookImage as t };
