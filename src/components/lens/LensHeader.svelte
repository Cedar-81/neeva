<script>
	import { PenLine } from 'lucide-svelte';
	import LensAppBar from "./LensAppBar.svelte";
</script>

<section class="space-y-8">
    <div class=" mt-20 space-y-2">
        <div class="flex justify-between items-baseline pb-3 lg:pb-0">
          <h1 class="text-3xl text-black/80 dark:text-white">Lens</h1>
          <a class="text-base" href="/create/lens"><button class="btn lg:hidden text-[#35c5ec] animate-pulse space-x-2 flex items-center text-base" ><PenLine class='h-5 w-5 stroke-[2px]'  /><p>Create</p></button></a>
        </div>
        <p class="text-sm lg:w-[70%]">
          Step into the Lens, where brevity is an art form that ignites 
          boundless creativity. In these small yet mighty stories, brevity 
          is the canvas for boundless creativity.  Dive into captivating 
          narratives, where every word holds a universe of meaning. Join us 
          on a journey through microfiction wonders, where every word 
          carries the weight of a universe. Whether you're reading or 
          crafting your own stories, Lens invites you to embrace the power 
          of concise storytelling.
        </p>
        <div class="hidden w-full lg:flex items-center justify-end px-4"><a class="text-base" href="/create/lens"><button class="btn text-[#35c5ec] animate-pulse space-x-2 flex items-center text-base" ><PenLine class='h-5 w-5 stroke-[2px]'  /><p>Create</p></button></a></div>
    </div>
    <!-- <LensAppBar /> -->
</section>