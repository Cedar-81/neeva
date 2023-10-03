<script>
    import SignupImage from "$lib/assets/signin.jpg";
</script>

<div class="w-full min-h-[100vh] py-10 flex justify-evenly pt-[4%]">
    <form method="POST" action="?/login" class="modal-box ml-0 border-2 border-white/20 flex flex-col lg:flex-row p-0 min-h-[26rem] !max-w-[50rem]">
        <div class="w-full lg:w-[20rem]">
            <img class="w-full h-full object-cover" src={SignupImage} alt='signin' />
        </div>
        <div class="flex flex-col justify-between p-8 flex-1">
            <div class="space-y-8">
                <div class="mt-4">
                    <h1 class="text-2xl font-semibold text-white/90 ">Welcome back, Neevite</h1>
                    <p class="text-white text-sm">Unfortunately email login is currently unavailable please sign in with Google to login</p>
                </div>
    
                <!-- <div class="form-control w-full">
                    <label for="email" class="label">
                        <span class="label-text font-bold text-white">Email</span>
                    </label>
                    <input disabled id="email" name="email" type="email" placeholder="email" class="input input-bordered w-full" />
                </div>
    
                <div class="form-control w-full">
                    <label for="password" class="label">
                        <span class="label-text font-bold text-white">Password</span>
                    </label>
                    <input id="password" disabled name="password" type="password" placeholder="password" class="input input-bordered w-full" />
                </div>
            </div> -->

            <div class="flex items-center h-full">
                <div class="w-full text-lg font-bold space-y-2">
                    <!-- <button disabled type="submit" class="btn normal-case w-full text-white">Continue to Login</button> -->
                    <button formaction="?/login&provider=google" class="btn normal-case w-full text-white">Continue with Google</button>
                    <div class="w-full"><p class="mx-auto text-center">---OR---</p></div>
                    <a href="/auth/signup"><button class="btn normal-case w-full text-white">Create an account</button></a>
                </div>
            </div>
        </div>

  </form>
</div>