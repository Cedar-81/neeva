<script>
	import ShelfCategory from "./ShelfCategory.svelte";

    const categories = [
        { name: "Hop Back In", continue: true},
        { name: "Check These", continue: false},
    ]
</script>

<div class="relative z-20 top-10 space-y-10">
    {#each categories as category}
        <section class=" pt-10 pl-8">
            <h2 class="text-xl text-white">{category.name}</h2>
            <ShelfCategory {category} />
        </section>
    {/each}
</div>