<script lang="ts">
	import { usersLens, type UsersLens } from "$lib/store";
	import ProfileLensCard from "./ProfileLensCard.svelte";
    
    export let owner: Boolean
    let lensToShow: UsersLens[] = $usersLens;

    if(!owner) {
        console.log('not owner')
        lensToShow = lensToShow.filter(lens => lens.published == true)
    }
</script>

<section class="mt-20">
    <h4 class="text-xl">Lens</h4>
    
    {#if lensToShow.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-20">
            {#each lensToShow as lens}
                <ProfileLensCard {owner} story={lens} />
            {/each}
        </div>
    {/if}

    {#if lensToShow.length == 0}
        <div class="w-full h-full flex items-center justify-center p-8">
            <p class="text-xl text-gray-500">{`${!owner ? `This user doesn't` : "You don't" }`} have any Lens yet.</p>
        </div>
    {/if}
</section>
