<script>
	import Icon from "@iconify/svelte";
	import Search from "./Search.svelte";
	import Backdrop from "./Backdrop.svelte";

</script>
<section class="px-10 right-0 relative m-0 z-20 bg-black text-gray-300">  
    <Backdrop /> 
    <Search />
    

    <div class="relative w-[50%] space-y-4 pt-20 z-20">
        <div class="space-y-1">
            <h2 class="text-5xl text-white">WALL-E</h2>
            <p class="text-sm dark:text-gray-400">Sci-fi / Horror / Thriller</p>
        </div>
        
        <div class="space-y-4">
            <div class="flex space-x-4 items-center">
                <div class="flex space-x-2">
                    <Icon class="h-5 w-5 text-yellow-300 " icon="material-symbols:star" />
                    <Icon class="h-5 w-5 text-yellow-300 " icon="material-symbols:star" />
                    <Icon class="h-5 w-5 text-yellow-300 " icon="material-symbols:star" />
                    <Icon class="h-5 w-5 text-yellow-300 " icon="material-symbols:star" />
                    <Icon class="h-5 w-5 text-yellow-300 " icon="material-symbols:star" />
                </div>
                <div class="h-2 w-2 rounded-full bg-gray-400" />
                <p class="text-blue-800 font-semibold">Score: 10</p>
            </div>
            <p class="text-lg ">
                Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit.
                Eveniet dicta quae, esse ad unde nemo provident, 
                vel labore tempore mollitia, minus magnam ut aperiam quis. 
                Nulla dolor aut dolore ratione.
            </p>
        </div>
        
        <div class="flex space-x-4">
            <button class="btn px-10 normal-case text-lg">Read</button>
            <button class="btn btn-outline px-10 normal-case text-lg">Add to shelf</button>

        </div>
    </div>
</section>