<script>
	import CommentList from "$components/comment/CommentList.svelte";


	import { loading, personalBio, scrollPosition } from "$lib/appStore";
	import { singleLens } from "$lib/store";
	import { Heart, MessageCircle, Send } from "lucide-svelte";
	import toast from "svelte-french-toast";

    let liked = $singleLens.likes ? $singleLens.likes.includes($personalBio.username) : false
    let showComment = false
    let comment = ''

    let handleShowComment = () => showComment = !showComment

    const handleComment = () => {
      loading.set(true)
      const formData = new FormData()
      formData.append('comment', `${comment}`)
      formData.append('username', $personalBio.username)

      fetch('?/postComment', {
          method: 'POST', 
          body: formData
          
      })
      .finally(() => {
        comment = ''
        loading.set(false)
        let message = "Comment posted successfully"
        toast.success(message)
      })
    }

    const handleLike = () => {
      loading.set(true)
      liked = !liked
      const formData = new FormData()
      formData.append('liked', `${liked}`)
      formData.append('username', `${$personalBio.username}`)

      fetch('?/likeLens', {
          method: 'POST', 
          body: formData
          
      })
      .finally(() => {
          loading.set(false)
          let message = liked ? 'Lens liked successfully' : 'Lens unliked successfully'
          toast.success(message)
      })
    }

</script>

{#if showComment}
    <div class="">
        <div class="w-full rounded-t-2xl px-4 py-5 bg-base-300 relative z-10 flex items-center">
        <input type="text" bind:value={comment} placeholder="Enter comment" class="input rounded-full w-full" />
        <button class="btn outline-none border-0 bg-transparent" on:click={handleComment}><Send /></button>
        </div>
        <CommentList />
    </div>
{/if}
<div class="navbar px-4 sticky top-0 space-x-6 items-center flex justify-between rounded-lg bg-base-300 min-h-[1rem] h-[4rem] ">
    
    <input type="range" min="20" max="100" value={`${$scrollPosition}`} class="range range-xs w-full" /> 
     {#if $singleLens.published }
        <div class="flex relative items-center -space-x-3">
            <button on:click={handleShowComment} class="btn text-[#35c5ec] relative hover:z-10 cursor-pointer" ><MessageCircle class='h-5 w-5' /></button>
            <button class="btn text-[#35c5ec] relative hover:z-10 cursor-pointer" on:click={handleLike}><Heart class={`h-5 w-5 ${liked ? 'stroke-red-600' : 'stroke-slate-400'}`} /></button>
        </div>
    {/if}
</div>