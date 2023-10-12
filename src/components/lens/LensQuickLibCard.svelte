<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { Lens } from "$lib/store";
    export let lens: Lens
</script>

<div class="bg-base-200 p-3 space-y-1 rounded-lg hover:shadow-lg cursor-pointer">
    <h2 class="text-sm text-black/70 dark:text-white">{lens.title}</h2>
    <p class="text-xs">{lens.UserDetails?.username}</p>
    <!-- <progress class="progress progress-accent w-full" value="50" max="100" /> -->
    <!-- remove pt-2 when implementing progress bar -->
    <div class="rounded-full text-sm pt-2"> 
        <div class="flex justify-between items-center">
            <p class="flex items-center"><Icon class="mr-1" icon="solar:eye-broken" /> {lens.views} </p>
            <p class="flex items-center"><Icon class="mr-1" icon="basil:comment-outline" /> {'0'}</p>
            <p class="flex items-center"><Icon class="mr-1" icon="solar:heart-broken" /> {lens.likes ? lens.likes.length : '0'}</p>
        </div>
    </div>
</div>
