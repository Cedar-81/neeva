import * as server from '../entries/pages/auth/signin/_page.server.ts.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/signin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/signin/+page.server.ts";
export const imports = ["_app/immutable/nodes/18.CqthPjmB.js","_app/immutable/chunks/CkYAGlBY.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CQOHYKEQ.js"];
export const stylesheets = [];
export const fonts = [];
