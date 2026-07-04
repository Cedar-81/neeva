import "../../chunks/index-server.js";
import { c as head } from "../../chunks/server.js";
import "../../chunks/navigation.js";
import "../../chunks/dist.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.push(`<meta property="og:site_name" content="Neeva"/> <meta property="“og:title”" content="Neeva - Crafting worlds with words"/> <meta property="og:description" content="Neeva is a platform for young writers/writers to create and share their short stories, poems, flash fictions, poetry and more."/> <meta property="og:url" content="https://neeva.vercel.app"/> <meta property="og:type" content="website"/> <meta property="og:image" content="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1634&amp;q=80"/> <meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1634&amp;q=80"/> <meta property="og:image:width" content="1280"/> <meta property="og:image:height" content="640"/> <meta property="twitter:card" content="summary_large_image"/> <meta property="twitter:image" content="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1634&amp;q=80"/> <meta property="twitter:site" content="@neevaverse"/>`);
		});
	});
}
//#endregion
export { _page as default };
