<script lang="ts">
	import Avatar from "../Avatar.svelte";
	import convertTimestamp from "$lib/timeconv";
	import type { LensComments } from "$lib/store";

    export let comment: LensComments;

</script>
<section class="flex border-2 border-gray-100/10 p-4 rounded-lg mx-auto bg-base-200">
    <Avatar 
        avatar={{
            image: comment.UserDetails?.profile_image ? comment.UserDetails.profile_image : "",
            name: "SO",
        }} 
        className="h-8 w-8" 
    />
    <div class="ml-2">
        <h3 class="mt-1">{comment.author_username} <span class="text-xs">{convertTimestamp(comment.created_at)}</span></h3>
        <p class="text-sm mt-2">
            {comment.content}
        </p>

    </div>
</section>