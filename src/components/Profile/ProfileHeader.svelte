<script lang="ts">
	import { author, type Author } from "$lib/store";
    import { Pencil } from 'lucide-svelte'
	import Avatar from "../Avatar.svelte"
	import { loading, personalBio } from "$lib/appStore";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
    import Compressor from 'compressorjs';
	import toast from "svelte-french-toast";
    
    export let owner: Boolean;

    let charCount = 0;
    const maxChars = 200;
  

    onMount(() => {
        toast(
            "Click banner or profile to change its image :)",
                {
                    duration: 4000,
                }
            );
    })

    const profile: Author = {
        ...$author
    }

    function openModal() {
        // @ts-ignore
        document.getElementById("my_modal_1")?.showModal()
    }

    function updateCharCount() {
        charCount = profile.bio ? profile.bio.length : 0;
        if (profile.bio && charCount > maxChars) {
            profile.bio = profile.bio.substring(0, maxChars);
            charCount = maxChars;
        }
    }

    

    $: updateCharCount();

    const handleFollow = () => {
        const formData = new FormData();
        const info = {
            'user_to_follow': $author,
            'user_following': $personalBio
        }
        formData.append('info', JSON.stringify(info))
        let submit = fetch('?/follow', {
            method: 'POST', 
            body: formData 
        })
        .finally(() => {
            loading.set(false)
            toast.success('Followed Successfully')
        })
    }

    const updateProfile = () => {
        const formData = new FormData();

        formData.append('profile', JSON.stringify(profile))
        let submit = fetch('?/updateProfile', {
            method: 'POST', 
            body: formData 
        })
        .finally(() => {
            loading.set(false)
            toast.success('Updated Successfully')
        })
    }

    const handleUnfollow = () => {
        const formData = new FormData();
        const info = {
            'user_to_follow': $author,
            'user_following': $personalBio
        }
        formData.append('info', JSON.stringify(info))
        let submit = fetch('?/unfollow', {
            method: 'POST', 
            body: formData 
        })
        .finally(() => {
            loading.set(false)
            toast.success('Unfollowed Successfully')
        })
    }
    
    let selectedImage: string | null = null;

    function handleBannerInput(event: Event) {
        const fileInput = event.target as HTMLInputElement;
        const files = fileInput.files;

        if (files && files.length > 0) {
            loading.set(true)
            const file = files[0];
            const formData = new FormData();
            let new_banner_version_no = $personalBio.banner_version_no + 1

            let compressedImage;

            const options = {
                quality: 0.8, // Adjust quality as needed (0 to 1)
                maxWidth: 1500, // Adjust dimensions as needed
                maxHeight: 1000,
                success(result: File) {
                    compressedImage = result;
                    formData.append('info', compressedImage)
                    formData.append('banner_version', `${new_banner_version_no}`)

                    let submit = fetch('?/uploadBannerImage', {
                        method: 'POST', 
                        body: formData 
                    })
                    .finally(() => {
                        loading.set(false)
                        toast.success(`Banner image changed successfully.`)
                    })
                    selectedImage = URL.createObjectURL(file);
                },
                error(err: Error) {
                    console.error('Error compressing image:', err);
                },
            };
            
            new Compressor(file, options);
        }
    }

    function handleProfileInput(event: Event) {
        const fileInput = event.target as HTMLInputElement;
        const files = fileInput.files;

        if (files && files.length > 0) {
            loading.set(true)
            const file = files[0];
            const formData = new FormData();
            let new_profile_version_no = $personalBio.profile_version_no + 1

            let compressedImage;
            const options = {
                quality: 0.8, // Adjust quality as needed (0 to 1)
                maxWidth: 500, // Adjust dimensions as needed
                maxHeight: 500,
                success(result: File) {
                    compressedImage = result;
           
                    formData.append('info', compressedImage)
                    formData.append('profile_version', `${new_profile_version_no}`)

                    let submit = fetch('?/uploadProfileImage', {
                        method: 'POST', 
                        body: formData 
                    })
                    .finally(() => {
                        loading.set(false)
                        toast.success(`Profile image changed successfully. Reload to effect changes.`)
                    })
                    selectedImage = URL.createObjectURL(file);
                },
                error(err: Error) {
                    console.error('Error compressing image:', err);
                },
            };
            
            new Compressor(file, options);
        }
    }



</script>

<div>
    <label for='bannerImageInput'>
        <div class="w-full h-[40vh] relative group bg-accent/30">
            <img class="w-full h-full object-cover" src={$author.banner_image} alt="banner_image" />
            {#if owner}
                <div class="absolute text-[#35c5ec] transition-all hidden group-hover:flex cursor-pointer items-center justify-center h-full w-full bg-black/40 top-0 right-0" ><Pencil class='h-8 w-8 text-[#35c5ec]-focus' /></div>
            {/if}
            
        </div>
    </label>
    <input
        type="file"
        class="hidden"
        accept="image/*"
        name="bannerImageInput"
        id="bannerImageInput"
        on:change={handleBannerInput}
        
    />
</div>

<dialog id="my_modal_1" class="modal">
    <form method='dialog'   class="modal-box space-y-4">
        <h3 class="text-xl">Update Profile</h3>
        <div class="form-control w-full">
            <label for="firstname" class="label">
                <span class="label-text font-bold text-black/80 dark:text-white">Firstname</span>
            </label>
            <input id="firtname" name="firstname" bind:value={profile.firstname} type="text" placeholder="Firstname" class="input input-bordered w-full" />
        </div>

        <div class="form-control w-full">
            <label for="lastname" class="label">
                <span class="label-text font-bold text-black/70 dark:text-white">Lastname</span>
            </label>
            <input id="lastname" name="lastname" bind:value={profile.lastname} type="text" placeholder="Lastname" class="input input-bordered w-full" />
        </div>

        <div class="form-control w-full">
            <label for="username" class="label">
                <span class="label-text font-bold text-black/70 dark:text-white">Username</span>
            </label>
            <input id="username" name="username" bind:value={profile.username} type="text" placeholder="@username" class="input input-bordered w-full" />
        </div>

        <div  class="form-control">
            <label for="bio" class="label">
                <span class="label-text text-black/70 dark:text-white">Bio</span>
            </label>
            <textarea bind:value={profile.bio}  rows="4" cols="50" on:input={updateCharCount} name="bio"  id="bio" class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            <div class="w-full flex justify-end pt-2"><p class="text-xs"><span>{charCount}</span> / {maxChars} characters</p></div>
        </div>

        <button on:click={updateProfile}  class="btn normal-case w-full text-black/70 dark:text-white">Update Profile</button>

        
    </form>
</dialog> 
    

<div class="w-full max-w-[96vw] px-20 flex flex-col items-center lg:mt-14">
    <div class="flex w-full justify-center mt-8">
        <div class="flex flex-col lg:space-x-14 lg:flex-row mx-auto items-center">
            <form>
            <label for="imageInput">
                <div class="relative group transition-all">
                    <div class="w-[130px] h-[130px] border-2 mask mask-hexagon bg-accent/30">
                        <img class="w-full h-full object-cover" src={$author.profile_image} alt={`${$author.username}'s profile'`} />
                    </div>
                    {#if owner}
                        <div class="absolute text-[#35c5ec] transition-all hidden group-hover:flex cursor-pointer items-center justify-center h-full w-full bg-black/40 top-0 right-0 mask mask-hexagon" ><Pencil class='h-8 w-8 text-[#35c5ec]-focus' /></div>
                    {/if}
                </div>
            </label>

            <input
                type="file"
                class="hidden"
                accept="image/*"
                name="imageInput"
                id="imageInput"
                on:change={handleProfileInput}
            /></form>
        
            <div class="lg:mt-8 mt-4 space-y-4">
                <div class="-space-y-2">
                    <h1 class="text-xl md:text-2xl items-center dark:text-gray-300 flex">{$author.firstname + " " + $author.lastname}
                        <span class="flex items-center gap-3">
                            {#if !owner && $author.user_is_following}
                                <button on:click={handleUnfollow}  class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Unfollow</button>
                            {/if}
                            {#if !owner && !$author.user_is_following}
                                <button on:click={handleFollow} class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Follow</button>
                            {/if}
                            {#if owner}
                                <button on:click={openModal} class="pl-5 text-[#35c5ec] text-sm flex gap-2 ">Edit Profile <Pencil class='h-5 w-5' /></button>
                            {/if}
                        </span>
                    </h1>
                    <h2 class="">@{$author.username}</h2>
                </div>
                 
                
                <div class="flex space-x-20">
                    <div class="flex items-center justify-center flex-col font-bold">
                        <h3 class="dark:text-gray-300 md:text-lg">{ $author.followers ? $author.followers?.length : 0}</h3>
                        <p class="uppercase text-xs font-bold">followers</p>
                    </div>
                    <div class="flex items-center justify-center flex-col font-bold">
                        <h3 class="dark:text-gray-300 md:text-lg">{$author.following ? $author.following?.length : 0}</h3>
                        <p class="uppercase text-xs font-bold">following</p>
                    </div>
                </div>                    

            </div>
            
            
        </div>         
    </div>


    <div class="w-[100vw] px-10 text-center lg:max-w-[60vw] mt-16">
        <p class="whitespace-break-all">{$author.bio}</p>
    </div>
    
</div>
