<script>
	import { lens } from "$lib/store";
	import LensCard from "./LensCard.svelte";
</script>

{#if $lens.length == 0}
    <h2 class="w-full text-center text-xl text-black/60 dark:text-white/30 mt-[20%]">Well... I guess we are fresh out, why don't you write something {':)'}</h2>
{/if}

<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

    {#if $lens.length > 0 }
        {#each $lens as story}
            <LensCard {story} />
        {/each}
    {/if}
</section>