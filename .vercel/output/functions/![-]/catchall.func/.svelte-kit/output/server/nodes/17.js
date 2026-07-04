import * as server from '../entries/pages/auth/details/_page.server.ts.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/details/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/details/+page.server.ts";
export const imports = ["_app/immutable/nodes/17.DN1wsaiO.js","_app/immutable/chunks/CkYAGlBY.js","_app/immutable/chunks/Dcp4HJAg.js","_app/immutable/chunks/DFsCD_dF.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CQOHYKEQ.js","_app/immutable/chunks/CVJ_g31J.js","_app/immutable/chunks/Cv2aUiOi.js","_app/immutable/chunks/DcsKdx2U.js"];
export const stylesheets = ["_app/immutable/assets/dist.DZa4IRJe.css"];
export const fonts = [];
