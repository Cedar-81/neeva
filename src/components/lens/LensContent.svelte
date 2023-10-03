<script lang="ts">
    import { marked } from "marked";
    import { Pencil } from "lucide-svelte"
    import Avatar from "../Avatar.svelte";
    import CommentList from "../comment/CommentList.svelte";
    import { Send, MessageCircle, Heart } from 'lucide-svelte';
    import LensContentAppBar from "./LensContentAppBar.svelte";
    import { singleLens, user_id } from "$lib/store";
	import { loading, personalBio, showToastMessage, toastMessage } from "$lib/appStore";

    let htmlText = marked.parse($singleLens.content);
    let showComment = false
    let liked = $singleLens.likes ? $singleLens.likes.includes($personalBio.username) : false
    let handleShowComment = () => showComment = !showComment
    let comment = ''
    let owner: Boolean = $singleLens.UserDetails?.user_id == $user_id
    console.log('owner ', $singleLens.UserDetails?.user_id, $user_id)

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
        toastMessage.set(message);
        showToastMessage();
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
          toastMessage.set(message);
          showToastMessage();
      })
    }

    const handleFollow = () => {
        const formData = new FormData();
        formData.append('user_to_follow', JSON.stringify($singleLens.UserDetails))
        formData.append('user_following', JSON.stringify($personalBio))
        let submit = fetch('?/follow', {
            method: 'POST', 
            body: formData 
        })
        .finally(() => {
            loading.set(false)
            toastMessage.set('Followed Successfully');
            showToastMessage();
        })
    }

    const handleUnfollow = () => {
        const formData = new FormData();
        formData.append('user_to_follow', JSON.stringify($singleLens.UserDetails))
        formData.append('user_following', JSON.stringify($personalBio))
        let submit = fetch('?/unfollow', {
            method: 'POST', 
            body: formData 
        })
        .finally(() => {
            loading.set(false)
            toastMessage.set('Unfollowed Successfully');
            showToastMessage();
        })
    }
</script>


<div class="lg:p-8">
  {#if owner}
    <a href={`/create/lens/write/${$singleLens.id}`} class="mb-6"><button class="btn btn-outline flex gap-3 items-center relative float-right"><Pencil class="h-5 w-5"/> Edit Story</button></a>
  {/if}

  <div id="one" class="bg-base-200  mx-auto max-w-4xl rounded-lg min-h-min">
    <div class="p-8 prose">
        <h1 class="text-2xl">{$singleLens.title}</h1>
        {@html htmlText}
      </div>
      <div class="sticky bottom-0">
        {#if $singleLens.published }
          <div class="flex relative z-50 flex-col items-end space-y-4 pr-4 mb-20 pb-8 lg:mb-8">
            <button class="btn relative z-5 p-3 h-max rounded-full bg-base-300/60 cursor-pointer" on:click={handleShowComment}><MessageCircle class='h-8 w-8 stroke-[1.2px]' /></button>
            <button class="btn relative z-5 p-3 h-max rounded-full bg-base-300/60 cursor-pointer" on:click={handleLike}><Heart class={`h-8 w-8 stroke-[1.2px] ${liked ? 'stroke-red-600' : 'stroke-slate-400'}`} /></button>
          </div>
        {/if}
        {#if showComment }
        <div class="p-2">
          <div class="w-full rounded-t-2xl px-4 py-5 bg-base-300 relative z-10 flex items-center">
            <input type="text" bind:value={comment} placeholder="Enter comment" class="input rounded-full w-full" />
            <button class="btn outline-none border-0 bg-transparent" on:click={handleComment}><Send /></button>
          </div>
          <CommentList />
        </div>
        {/if}
        <!-- <LensContentAppBar />   -->
      </div>
    </div>

    <div class="p-14">
      <h2 class="text-xl text-gray-400">Author: </h2>
      <div class="flex mx-auto items-center">
        <Avatar 
            avatar={{
                image: $singleLens?.UserDetails?.profile_image ? $singleLens?.UserDetails?.profile_image : '',
                name: "SO",
            }} 
            className="h-[150px] w-[150px]" 
        /> 
    
        <div class="space-y-4">
            <div class="-space-y-2">
                <h1 class="text:xl lg:text-2xl items-center text-gray-300 flex">{$singleLens?.UserDetails?.firstname + ' ' + $singleLens?.UserDetails?.lastname}
                    <span>
                        {#if !owner && $singleLens?.UserDetails?.following?.includes($personalBio.username)}
                            <button on:click={handleUnfollow}  class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Unfollow</button>
                        {/if}
                        {#if !owner && !$singleLens?.UserDetails?.following?.includes($personalBio.username)}
                            <button on:click={handleFollow} class="btn btn-sm bg-transparent text-sm lowercase py-1 rounded-full px-4">Follow</button>
                        {/if}
                    </span>
                </h1>
                <h2 class="pt-2">@{$singleLens?.UserDetails?.username}</h2>
            </div>
        </div>
    </div>
    </div>
</div>