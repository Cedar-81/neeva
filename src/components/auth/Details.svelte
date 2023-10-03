<script lang='ts'>
    import SignupImage from "$lib/assets/signup.jpg";
    import { enhance } from '$app/forms'
	import { submitForm } from "$lib/appStore";
	
    let formVal = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
    }

   
   $: if(formVal.firstname.trim().length !== 0 || formVal.lastname.trim().length !== 0 || formVal.username.length !== 0) {
        submitForm.set(true)
    } else {
        submitForm.set(false)
    }
</script>

<div class="w-full min-h-[100vh] py-10 flex justify-evenly pt-[4%]">
    <form method="POST" action="?/update_bio"  class="modal-box ml-0 border-2 border-white/20 flex flex-col lg:flex-row p-0 !max-w-[50rem] min-h-[38rem] max-h-max">
        <div class="w-full lg:w-[20rem]">
            <img class="w-full h-full object-cover" src={SignupImage} alt='signup' />
        </div>
        <div class="space-y-8 p-8 flex-1">
            <div class="mt-4">
                <h1 class="text-2xl font-semibold text-white/90 ">Welcome to Neeva</h1>
                <p class="text-red-500 text-bold text-sm">All fields must be filled in order to submit form.</p>
            </div>
            <div class="form-control w-full">
                <label for="firstname" class="label">
                    <span class="label-text font-bold text-white">Firstname</span>
                </label>
                <input bind:value={formVal.firstname}  id="firstname" name="firstname" type="text" placeholder="Firstname" class="input input-bordered w-full" />
            </div>

            <div class="form-control w-full">
                <label for="lastname" class="label">
                    <span class="label-text font-bold text-white">Lastname</span>
                </label>
                <input bind:value={formVal.lastname} id="lastname" name="lastname" type="text" placeholder="Lastname" class="input input-bordered w-full" />
            </div>

            <div class="form-control w-full">
                <label for="username" class="label">
                    <span class="label-text font-bold text-white">Username</span>
                </label>
                <input bind:value={formVal.username} id="username" name="username" type="text" placeholder="@username" class="input input-bordered w-full" />
            </div>

            <div class="w-full text-lg font-bold pt-10 space-y-2">
                <button type="submit" class="btn normal-case w-full text-white">Save</button>
            </div>
        </div>

  </form>
</div>