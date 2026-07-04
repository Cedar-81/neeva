import "../../chunks/index-server.js";
import { A as attr, f as slot, i as bind_props } from "../../chunks/server.js";
import "../../chunks/client.js";
import "../../chunks/navigation.js";
import { c as supabaseClient, t as appSession } from "../../chunks/appStore.js";
import { n as Toaster } from "../../chunks/dist.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let data = $$props["data"];
		let tmp = data, supabase = tmp.supabase, session = tmp.session;
		appSession.set(session);
		supabaseClient.set(supabase);
		let theme = "dark";
		$: ({supabase, session} = data);
		$$renderer.push(`<div${attr("data-theme", theme)}><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></div> `);
		Toaster($$renderer, {});
		$$renderer.push(`<!---->`);
		bind_props($$props, { data });
	});
}
//#endregion
export { _layout as default };
