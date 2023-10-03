<script lang="ts">
	import { books } from "../../lib/store";

  interface Category {
    continue: boolean;
    name: string;
  }

    import BookCard from "../BookCard.svelte";

  export let category: Category;

</script>

<section class="grid grid-cols-6 category">
    {#if category.continue}
        {#each $books.slice(0, 5) as book }
            <BookCard {book} className="mt-8" />
        {/each}
        {:else}
        {#each $books as book }
            <BookCard {book} className="mt-8" />
        {/each}
    {/if}
</section>


<style>
  .category {
    scroll-snap-type: x mandatory;
  }
</style>