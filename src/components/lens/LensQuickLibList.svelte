<script>
	import { lens } from "$lib/store";
	import LensQuickLibCard from "./LensQuickLibCard.svelte";
    const lensStories = $lens.slice(0,4)

</script>
<div class="space-y-5 lg:mt-8">
    <h3 class="text-lg text-white">Quick Library</h3>
    <div class="space-y-4">
        {#each lensStories as lens} 
            <LensQuickLibCard />   
        {/each}
    </div>
</div>