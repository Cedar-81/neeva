<script lang="ts">
  import Icon from '@iconify/svelte';
	import Topbar from './Topbar.svelte';
  import { Info, Instagram, Twitter, User2 } from 'lucide-svelte';
	import { appSession, openModal, personalBio, scrollPosition } from '$lib/appStore';
	import { goto } from '$app/navigation';
  import { AlignCenter } from 'lucide-svelte';
  import { ArrowUpRight } from 'lucide-svelte';

  function handleScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    const percentage = ((scrollTop / scrollHeight) * 100) + 20;
    scrollPosition.set(percentage);
  }

  const changePage = () => {
    location.href = `/profile/${$personalBio.username}`
  }

  function truncateWord(word: string, maxLength: number) {
    if (word.length > maxLength) {
      return word.slice(0, maxLength) + '...';
    }
    return word;
}

</script>

<div class="drawer text-gray-700 dark:text-gray-400 bg-base-300 lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

  <div class="drawer-content overflow-y-auto z-30 h-[100vh]" on:scroll={handleScroll}>
    <slot />
    <label for="my-drawer-2" class="fixed z-30 bottom-24 right-8 btn btn-primary rounded-full drawer-button lg:hidden"><AlignCenter /></label>
  </div> 

  <div class="drawer-side bg-base-300 z-40 bg-transparent">
    <label for="my-drawer-2" class="drawer-overlay"></label> 

    <div class="h-full flex flex-col justify-between pr-4 bg-base-300">
      
      <div>
        <div class="flex items-center mt-8 pb-2 pl-4 space-x-4
        ">
          {#if $appSession }
            <a href={`/profile/${$personalBio.username}`}><div class="w-20 h-20 avatar mask mask-hexagon">
                <img alt="profile" src={$personalBio.profile_image} />
            </div></a>
            
            <div class="flex items-start">
              <p class="text-xl capitalize">Hello, {truncateWord($personalBio.username, 6)} </p>  
              <button on:click={changePage} class=""><ArrowUpRight class='h-5' /></button>
            </div> 
          {/if}   
          
          {#if !$appSession}
          <div class="space-y-3 py-4">
            <h2 class="text-xl font-bold"><span class="text-sm font-normal">Do more with</span> Neeva</h2>
            <a href="/auth/signin"><button  class="btn btn-outline btn-sm rounded-full btn-accent">Sign in</button></a>            
          </div>

          {/if}
        </div>

        
    
        <div class="divider my-0" />
    
        <ul class="menu overflow-y-auto space-y-4 w-56 h-full text-base-content">
          <li ><a class="text-base" href="/create/lens"><Icon class='h-5 w-5' icon="ion:create-outline" />Create</a></li>
          <!-- <li><a class="text-base" href="/browse"><Icon class='h-5 w-5' icon="material-symbols:explore-outline" /> Browse</a></li> -->
          <li><a class="text-base" href="/lens"><Icon class='h-5 w-5' icon="akar-icons:glasses" />Lens</a></li>
          <!-- <li><a class="text-base" href="/bookshelf"><Icon class='h-5 w-5' icon="streamline:interface-content-book-2-library-content-books-book-shelf-stack" />Bookshelf</a></li>
          <li><a class="text-base" href="/community"><Icon class='h-5 w-5' icon="fluent:people-community-28-regular" />Community</a></li> -->
          {#if $appSession }
            <li><a class="text-base" href={`/profile/${$personalBio.username}`}><User2 class='h-5 w-5'  />Profile</a></li>
          {/if}
        </ul>
      </div>
    
      <div class="flex justify-between items-center">
        <p class="text-xl relative font-bold p-8">Neeva</p>

        <div class="flex space-x-2 items-center">
          <a class="text-[#35c5ec]" href="https://twitter.com/neevaverse" target="_blank"><Twitter class='h-5 w-5' /></a>
          <a class="text-[#35c5ec]" href="https://instagram.com/neevaverse?igshid=YTQwZjQ0NmI0OA==" target="_blank"><Instagram class='h-5 w-5' /></a>
          <a class="text-[#35c5ec]" href="https://discord.gg/Mk7KmGe8" target="_blank"><Icon class='h-6 w-6' icon="ri:discord-line" /></a>
          <a class="text-[#35c5ec]" href="https://www.tiktok.com/@neevaverse?_t=8gR6eO8lBFm&_r=1" target="_blank"><Icon class='h-6 w-6' icon="ri:tiktok-line" /></a>
        </div>

      </div>

    </div>

  </div>
</div>

<style>
    .drawer {
        height: 100vh !important;
        overflow: hidden;
    }
    
    .drawer-side {
        height: 100%;
        overflow: hidden;
    }
</style>
