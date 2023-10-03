<script>
	import Icon from "@iconify/svelte";
	import { singleLens } from "$lib/store";
</script>

<div class="bg-base-200 p-3 space-y-1 rounded-lg hover:shadow-lg cursor-pointer">
    <h2 class="text-sm text-white">{$singleLens.title}</h2>
    <p class="text-xs">{$singleLens.UserDetails?.username}</p>
    <!-- <progress class="progress progress-accent w-full" value="50" max="100" /> -->
    <!-- remove pt-2 when implementing progress bar -->
    <div class="rounded-full text-sm pt-2"> 
        <div class="flex justify-between items-center">
            <p class="flex items-center"><Icon class="mr-1" icon="solar:eye-broken" /> {$singleLens.views} </p>
            <p class="flex items-center"><Icon class="mr-1" icon="basil:comment-outline" /> {'0'}</p>
            <p class="flex items-center"><Icon class="mr-1" icon="solar:heart-broken" /> {$singleLens.likes ? $singleLens.likes.length : '0'}</p>
        </div>
    </div>
</div>
