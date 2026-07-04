//#region src/routes/+layout.server.ts
var load = async ({ locals: { supabase, getSession } }) => {
	return { session: await getSession() };
};
//#endregion
export { load };
