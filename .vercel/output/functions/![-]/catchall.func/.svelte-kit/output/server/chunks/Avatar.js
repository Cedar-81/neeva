import { A as attr, M as escape_html, i as bind_props, t as attr_class } from "./server.js";
//#region src/components/Avatar.svelte
function Avatar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let avatar = $$props["avatar"];
		let className = $$props["className"];
		$$renderer.push(`<div${attr_class("avatar " + className)}><div class="w-24 mask mask-hexagon"><img${attr("src", avatar.image)}${attr("alt", avatar.name)}/></div></div> `);
		if (avatar.image.length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div${attr_class("avatar placeholder " + className)}><div class="bg-neutral-focus mask mask-hexagon text-neutral-content rounded-full w-24"><span class="text-xs">${escape_html(avatar.name)}</span></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			avatar,
			className
		});
	});
}
//#endregion
export { Avatar as t };
