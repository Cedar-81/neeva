<script lang='ts'>
    import SignupImage from "$lib/assets/signup.jpg";
    import { enhance } from '$app/forms'
	
</script>

<div class="w-full min-h-[100vh] py-10 flex justify-evenly pt-[4%]">
    <form method="POST" action="?/register"  class="modal-box ml-0 border-2 border-white/20 flex flex-col lg:flex-row p-0 h-max lg:min-h-[26rem] !max-w-[50rem]">
        <div class="w-full lg:w-[20rem]">
            <img class="w-full h-full object-cover" src={SignupImage} alt='signup' />
        </div>
        <div class="space-y-8 p-8 flex-1 flex flex-col">
            <div class="mt-4">
                <h1 class="text-2xl font-semibold text-white/90 ">Welcome to Neeva</h1>
                <p class="text-white text-sm">Let's get you started</p>
            </div>
            <!-- <div class="form-control w-full">
                <label for="firstname" class="label">
                    <span class="label-text font-bold text-white">Firstname</span>
                </label>
                <input id="firtname" disabled name="firstname" type="text" placeholder="Firstname" class="input input-bordered w-full" />
            </div>

            <div class="form-control w-full">
                <label for="lastname" class="label">
                    <span class="label-text font-bold text-white">Lastname</span>
                </label>
                <input id="lastname" disabled name="lastname" type="text" placeholder="Lastname" class="input input-bordered w-full" />
            </div>

            <div class="form-control w-full">
                <label for="username" class="label">
                    <span class="label-text font-bold text-white">Username</span>
                </label>
                <input id="username" disabled name="username" type="text" placeholder="@username" class="input input-bordered w-full" />
            </div>

            <div class="form-control w-full">
                <label for="email" class="label">
                    <span class="label-text font-bold text-white">Email</span>
                </label>
                <input id="email" disabled name="email" type="email" placeholder="email" class="input input-bordered w-full" />
            </div>

            <div class="form-control w-full">
                <label for="password" class="label">
                    <span class="label-text font-bold text-white">Password</span>
                </label>
                <input id="password" disabled name="password" type="password" placeholder="password" class="input input-bordered w-full" />
            </div> -->

            <div class="flex items-center h-full">
                <div class="w-full text-lg font-bold space-y-2">
                    <!-- <button disabled type="submit" class="btn normal-case w-full text-white">Continue to Signup</button> -->
                    <button formaction="?/register&provider=google" class="btn normal-case w-full text-white">Continue with Google</button>
                    <div class="w-full"><p class="mx-auto text-center">---OR---</p></div>
                    <a href="/auth/signin"><button class="btn normal-case w-full text-white">Already have an account? Login</button></a>
                </div>                
            </div>

        </div>

  </form>
</div>