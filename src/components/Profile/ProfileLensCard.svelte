<script lang="ts">
    import { Pencil, Globe2 } from 'lucide-svelte'
    import type { UsersLens } from "$lib/store";
	import Icon from "@iconify/svelte";
	import Avatar from "../Avatar.svelte";
    export let story: UsersLens;
    export let owner: Boolean
    console.log(owner)
</script>

<div class="hover:shadow-xl mx-auto cursor-pointer w-[16rem] lg:w-[15rem] bg-base-200 rounded-lg mt-8 p-4">
    {#if story}
        <a href={"/lens/read/" + story.id } class="text-sm flex flex-col justify-between h-full space-y-3 ">
            <div class="space-y-3">
                <h2 class="text-lg text-white">{story.title}</h2>
                <p class=" leading-5">
                    {story.summary}
                </p>
                <p class=""><span class="font-bold">Genre:</span> {story.genre}</p>
            </div>

            {#if owner && !story.published || owner && story.published == null}
                <p class="text-sm gap-2 items-center font-semibold text-red-600/40 flex"><Pencil class="h-3 w-3" /> Draft</p>
            {/if}

            {#if owner && story.published }
                <p class="text-sm gap-2 items-center font-semibold text-green-600/40 flex"><Globe2 class="h-3 w-3" /> Published</p>
            {/if}
        
        </a>   
    {/if}
</div>
