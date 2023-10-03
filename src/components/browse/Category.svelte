<script lang="ts">
  interface Category {
    important: boolean;
    name: string;
  }

  import { books } from "../../lib/store";
	import BookCard from "../BookCard.svelte";
	import BookCardImp from "../BookCardImp.svelte";

  export let category: Category;

</script>

<section class="grid grid-flow-col relative z-20 hover:overflow-x-auto space-x-6 category">
  {#each $books as book }
      {#if category.important}
        <BookCardImp {book} />
        {:else}
        <BookCard {book} />
      {/if}
  {/each}
</section>


<style>
  .category {
    scroll-snap-type: x mandatory;
  }
</style>