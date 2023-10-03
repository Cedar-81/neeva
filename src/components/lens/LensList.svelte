<script>
	import { lens } from "$lib/store";
	import LensCard from "./LensCard.svelte";
</script>

<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
    {#each $lens as story}
        <LensCard {story} />
    {/each}
</section>