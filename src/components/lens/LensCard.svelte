<script lang="ts">
    import type { Lens } from "$lib/store";
	import Icon from "@iconify/svelte";
	import Avatar from "../Avatar.svelte";
    export let story: Lens;

  function trimStringToWordCount(inputString, maxWords) {
	  // Split the input string into an array of words
	  const words = inputString.split(/\s+/);
	
	  // Ensure the word count does not exceed the maximum
	  if (words.length > maxWords) {
	    // Slice the array to keep only the first 'maxWords' words, and join them back into a string
	    return words.slice(0, maxWords).join(" ") + " ...";
	  }
	
	  // If the word count is within the limit, return the original string
	  return inputString;
  }
</script>

<div class="hover:shadow-xl mx-auto cursor-pointer w-[16rem] lg:w-[15rem] bg-base-200 rounded-lg mt-8 p-4"> 
    {#if story}
        <a href={"/lens/read/" + story.id } class="text-sm flex flex-col justify-between h-full space-y-3 ">
            <div class="space-y-3">
                <h2 class="text-lg text-white">{story.title}</h2>
                <p class=" leading-5">
                    {trimStringToWordCount(story.summary, 300)} 
                </p>
                <p class=""><span class="font-bold">Genre:</span> {story.genre}</p>
            
                <!-- <div class="">
                    <p class="">Progress</p>
                    <progress class="progress progress-accent w-full" value={story.progress} max="100" />
                </div> -->

            </div>
        
            <div class="space-y-3">
                <div class="flex justify-between items-center">
                    <p class="flex items-center"><Icon class="mr-1" icon="solar:eye-broken" /> {story.views} </p>
                    <p class="flex items-center"><Icon class="mr-1" icon="basil:comment-outline" /> {story.comment_count}</p>
                    <p class="flex items-center"><Icon class="mr-1" icon="solar:heart-broken" /> {story.likes ? story.likes?.length : 0}</p>
                </div>
            
                <div class="divider my-2" />
            
                <div class="flex items-center px-1 pt-0">
                    <Avatar 
                        className= "h-8 w-8"
                        avatar={{
                        image: story.UserDetails.profile_image,
                        name: "CO",
                        }} />
            
                </div>
            </div>
            
        
        </a>   
    {/if}
</div>
