import * as server from '../entries/pages/(dashboard)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(dashboard)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(dashboard)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.CrmOSZbd.js","_app/immutable/chunks/CkYAGlBY.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CQOHYKEQ.js","_app/immutable/chunks/DocwIdN4.js","_app/immutable/chunks/B37pZua7.js","_app/immutable/chunks/DFsCD_dF.js","_app/immutable/chunks/CscJ3Dm_.js","_app/immutable/chunks/BteGihKW.js","_app/immutable/chunks/DIHj1txI.js"];
export const stylesheets = ["_app/immutable/assets/2.7tCCH3hW.css"];
export const fonts = [];
