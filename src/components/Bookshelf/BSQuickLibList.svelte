<script>
	import { lens } from "$lib/store";
    import BsQuickLibCard from "./BSQuickLibCard.svelte";

    const lensStories = $lens.slice(0,2)

</script>
<div class="space-y-5 mt-8">
    <h3 class="text-lg text-white">Quick Library</h3>
    <div class="space-y-4">
        {#each lensStories as lens} 
            <BsQuickLibCard />
        {/each}
    </div>
</div> 