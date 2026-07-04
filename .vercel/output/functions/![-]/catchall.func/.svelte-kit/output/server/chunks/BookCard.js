import { A as attr, M as escape_html, i as bind_props, t as attr_class } from "./server.js";
import { t as BookImage } from "./BookImage.js";
//#region src/components/BookCard.svelte
function BookCard($$renderer, $$props) {
	let book = $$props["book"];
	let className = $$props["className"];
	let { id, name, summary, genre, rating, image } = book;
	function limitWords(sentence, characterLimit) {
		if (sentence.length > characterLimit) return `${sentence.substring(0, characterLimit)}...`;
		return sentence;
	}
	$$renderer.push(`<a${attr("href", "/" + id)}><div${attr_class("space-y-2 " + className)}>`);
	BookImage($$renderer, {
		book,
		className: "h-44 w-32"
	});
	$$renderer.push(`<!----> <div class="space-y-1"><h2 class="text-white text-sm leading-5">${escape_html(limitWords(name, 18))}</h2> <div class="flex space-x-2 items-center"><p class="text-xs">${escape_html(genre)}</p> <div class="h-2 w-2 rounded-full bg-gray-400"></div> <p class="font-semibold text-xs">${escape_html(rating * 2)}</p></div></div></div></a>`);
	bind_props($$props, {
		book,
		className
	});
}
//#endregion
export { BookCard as t };
