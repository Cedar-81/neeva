<script>
	import { communities } from "../../lib/store";
	import ComCategory from "./ComCategory.svelte";

</script>

<section class="pb-10">
    {#each $communities as category }
        <div class={category.categoryName == "Your Network" ? 'bg-base-200 space-y-6 px-8 pt-16 pb-24': "space-y-6 px-8 pt-16"}>
            <div class="flex items-center space-x-2">
                <h2 class="text-xl text-white">{category.categoryName}</h2>
                <p class="">{category.categoryNumber}</p>
            </div>
            <ComCategory />
        </div>
    {/each}
</section>