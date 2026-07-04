import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.eD6pLRk4.js","_app/immutable/chunks/CkYAGlBY.js","_app/immutable/chunks/B37pZua7.js","_app/immutable/chunks/DFsCD_dF.js","_app/immutable/chunks/DYl5dUZ5.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CQOHYKEQ.js","_app/immutable/chunks/DocwIdN4.js","_app/immutable/chunks/CscJ3Dm_.js","_app/immutable/chunks/Cv2aUiOi.js"];
export const stylesheets = ["_app/immutable/assets/dist.DZa4IRJe.css","_app/immutable/assets/0.LXfpBse4.css"];
export const fonts = [];
