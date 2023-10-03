<script>
	import { categories } from "../../lib/store";
	import Category from "./Category.svelte";
</script>

<div class="relative z-20 top-10">
    {#each $categories as category}
        <section class="space-y-4 pt-10 pl-8">
            <h2 class="text-xl text-white">{category.name}</h2>
            <Category {category} />
        </section>
    {/each}
</div>
