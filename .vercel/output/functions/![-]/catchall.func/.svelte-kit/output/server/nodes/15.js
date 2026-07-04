import * as server from '../entries/pages/(dashboard)/profile/_username_/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(dashboard)/profile/_username_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(dashboard)/profile/[username]/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.DSHALq7t.js","_app/immutable/chunks/CkYAGlBY.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CQOHYKEQ.js","_app/immutable/chunks/CscJ3Dm_.js","_app/immutable/chunks/DFsCD_dF.js","_app/immutable/chunks/Cv2aUiOi.js","_app/immutable/chunks/BteGihKW.js","_app/immutable/chunks/DIHj1txI.js","_app/immutable/chunks/84dc7OBh.js","_app/immutable/chunks/DZq7oON7.js","_app/immutable/chunks/Dcp4HJAg.js","_app/immutable/chunks/Cm_UDN-p.js","_app/immutable/chunks/Dx2SwW9d.js"];
export const stylesheets = ["_app/immutable/assets/dist.DZa4IRJe.css"];
export const fonts = [];
