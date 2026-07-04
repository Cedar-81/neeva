import "../../../../../chunks/index-server.js";
import "../../../../../chunks/server.js";
import "../../../../../chunks/navigation.js";
import "../../../../../chunks/appStore.js";
import { t as CreateLensDetails } from "../../../../../chunks/CreateLensDetails.js";
//#region src/routes/(dashboard)/create/lens/+page.svelte
function _page($$renderer) {
	CreateLensDetails($$renderer, {});
}
//#endregion
export { _page as default };
