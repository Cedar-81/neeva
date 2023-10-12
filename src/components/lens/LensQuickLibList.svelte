<script>
	import { lens } from "$lib/store";
	import LensQuickLibCard from "./LensQuickLibCard.svelte";
    const lensStories = $lens.slice(0,4)

</script>
<div class="space-y-5 lg:mt-8">
    <h3 class="text-lg text-black/80 dark:text-white">Quick Library</h3> 
    <div class="space-y-4 pb-[4rem]">
        {#each lensStories as lens} 
            <LensQuickLibCard lens={lens} />   
        {/each}
    </div>
</div>