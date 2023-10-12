<script lang="ts">
	import { lensComments } from "$lib/store";
	import CommentCard from "./CommentCard.svelte";

</script>

<div class="w-full h-[50vh] max-h-[56vh] overflow-auto p-2 space-y-4 sticky bg-base-300 top-0 ">
	{#if $lensComments.length > 0}
		{#each $lensComments as comment}
			<CommentCard {comment} /> 
		{/each}
	{/if}

	{#if $lensComments.length == 0}
		<div class="h-full w-full flex items-center justify-center">
			<p class="text-xl dark:text-gray-500">There are currently no comments on this Lens</p>
		</div>
	{/if}
</div>