import { A as attr } from "../../../../chunks/server.js";
import "../../../../chunks/forms.js";
//#region src/lib/assets/signup.jpg
var signup_default = "/_app/immutable/assets/signup.gv3w7GFs.jpg";
//#endregion
//#region src/components/auth/Signup.svelte
function Signup($$renderer) {
	$$renderer.push(`<div class="w-full min-h-[100vh] py-10 flex justify-evenly pt-[4%]"><form method="POST" action="?/register" class="modal-box ml-0 border-2 border-white/20 flex flex-col lg:flex-row p-0 h-max lg:min-h-[26rem] !max-w-[50rem]"><div class="w-full lg:w-[20rem]"><img class="w-full h-full object-cover"${attr("src", signup_default)} alt="signup"/></div> <div class="space-y-8 p-8 flex-1 flex flex-col"><div class="mt-4"><h1 class="text-2xl font-semibold text-black/80 dark:text-white/90">Welcome to Neeva</h1> <p class="text-black/80 dark:text-white text-sm">Let's get you started</p></div> <div class="flex items-center h-full"><div class="w-full text-lg font-bold space-y-2"><button formaction="?/register&amp;provider=google" class="btn normal-case w-full text-black/80 dark:text-white">Continue with Google</button> <div class="w-full"><p class="mx-auto text-center">---OR---</p></div> <a href="/auth/signin"><button class="btn normal-case w-full text-black/80 dark:text-white">Already have an account? Login</button></a></div></div></div></form></div>`);
}
//#endregion
//#region src/routes/auth/signup/+page.svelte
function _page($$renderer) {
	Signup($$renderer, {});
}
//#endregion
export { _page as default };
