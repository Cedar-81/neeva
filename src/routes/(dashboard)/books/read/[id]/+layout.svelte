<script>
	import BsReaderSidebar from "$components/Bookshelf/BSReaderSidebar.svelte";
</script>
<div class="flex">
    <div class="flex-1">
        <slot />
    </div>
    <div class="flex-none">
        <div class="w-[21rem]">
            <BsReaderSidebar />
        </div>
    </div>
</div>