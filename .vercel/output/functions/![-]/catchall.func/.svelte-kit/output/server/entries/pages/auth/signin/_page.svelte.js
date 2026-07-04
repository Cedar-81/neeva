import { A as attr } from "../../../../chunks/server.js";
//#region src/lib/assets/signin.jpg
var signin_default = "/_app/immutable/assets/signin.DLNfJpdT.jpg";
//#endregion
//#region src/components/auth/Signin.svelte
function Signin($$renderer) {
	$$renderer.push(`<div class="w-full min-h-[100vh] py-10 flex justify-evenly pt-[4%]"><form method="POST" action="?/login" class="modal-box ml-0 border-2 border-white/20 flex flex-col lg:flex-row p-0 h-max lg:min-h-[26rem] !max-w-[50rem]"><div class="w-full lg:w-[20rem]"><img class="w-full h-full object-cover"${attr("src", signin_default)} alt="signin"/></div> <div class="flex flex-col justify-between p-8 flex-1"><div class="space-y-8"><div class="mt-4"><h1 class="text-2xl font-semibold text-black/80 dark:text-white/90">Welcome back, Neevite</h1> <p class="text-black/80 dark:text-white text-sm">Unfortunately email login is currently unavailable please sign in with Google to login</p></div> <div class="flex items-center h-full"><div class="w-full text-lg font-bold space-y-2"><button formaction="?/login&amp;provider=google" class="btn normal-case w-full text-black/80 dark:text-white">Continue with Google</button> <div class="w-full"><p class="mx-auto text-center">---OR---</p></div> <a href="/auth/signup"><button class="btn normal-case w-full text-black/80 dark:text-white">Create an account</button></a></div></div></div></div></form></div>`);
}
//#endregion
//#region src/routes/auth/signin/+page.svelte
function _page($$renderer) {
	Signin($$renderer, {});
}
//#endregion
export { _page as default };
