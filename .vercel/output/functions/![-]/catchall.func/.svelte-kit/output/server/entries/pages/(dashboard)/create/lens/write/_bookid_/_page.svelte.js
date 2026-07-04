import "../../../../../../../chunks/index-server.js";
import { A as attr, M as escape_html, g as unsubscribe_stores, i as bind_props, m as store_get, s as ensure_array_like } from "../../../../../../../chunks/server.js";
import "../../../../../../../chunks/navigation.js";
import { n as genres, r as lensCreateForm } from "../../../../../../../chunks/appStore.js";
import "../../../../../../../chunks/dist.js";
import { t as Pencil } from "../../../../../../../chunks/pencil.js";
import "../../../../../../../chunks/CreateLensDetails.js";
import { t as page } from "../../../../../../../chunks/stores.js";
import "@tiptap/starter-kit";
//#region src/components/Create/CreateLensEditor.svelte
function CreateLensEditor($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let text = store_get($$store_subs ??= {}, "$lensCreateForm", lensCreateForm).summary;
		let charCount = 0;
		let { params } = store_get($$store_subs ??= {}, "$page", page);
		params.bookid;
		const maxChars = 500;
		function updateCharCount() {
			charCount = text.length;
			if (charCount > maxChars) {
				text = text.substring(0, maxChars);
				charCount = maxChars;
			}
		}
		$: updateCharCount();
		$$renderer.push(`<div class="h-full max-h-full w-full overflow-y-auto"><div class="flex space-x-3 lg:hidden fixed right-4 top-4"><button class="btn btn-outline btn-sm">`);
		Pencil($$renderer, {});
		$$renderer.push(`<!----></button> <button class="btn btn-sm btn-outline">Draft</button> <button class="btn btn-sm btn-accent">Publish</button></div> <dialog id="my_modal_1" class="modal"><form method="POST" action="?/update_details" class="modal-box space-y-4"><h3 class="text-xl">Create Lens</h3> <div class="form-control w-full"><label for="title" class="label"><span class="label-text">Title</span></label> <input id="title"${attr("value", store_get($$store_subs ??= {}, "$lensCreateForm", lensCreateForm).title)} name="title" type="text" placeholder="Enter lens title" class="input input-bordered w-full"/></div> <div class="form-control w-full"><label for="genre" class="label"><span class="label-text">Genre</span></label> `);
		$$renderer.select({
			name: "genre",
			value: store_get($$store_subs ??= {}, "$lensCreateForm", lensCreateForm).genre,
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
		$$renderer.push(`</div> <div class="form-control"><label for="summary" class="label"><span class="label-text">Plot</span></label> <textarea maxlength="500" rows="4" cols="50" name="summary" id="summary" class="textarea textarea-bordered h-24" placeholder="Lens summary">`);
		const $$body = escape_html(text);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea> <div class="w-full flex justify-end pt-2"><p class="text-xs"><span>${escape_html(charCount)}</span> / 500 characters</p></div></div> <div class="modal-action"><button type="submit" class="btn">Update</button></div></form></dialog> <div class="w-full h-max min-h-full px-8 pt-16 lg:px-20 lg:pt-8"></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/components/Create/CreateLensStory.svelte
function CreateLensStory($$renderer) {
	CreateLensEditor($$renderer, {});
}
//#endregion
//#region src/routes/(dashboard)/create/lens/write/[bookid]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let data = $$props["data"];
		const formData = data.getLensForm;
		lensCreateForm.set({
			title: formData.title,
			summary: formData.summary,
			genre: formData.genre,
			content: formData.content
		});
		CreateLensStory($$renderer, {});
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
