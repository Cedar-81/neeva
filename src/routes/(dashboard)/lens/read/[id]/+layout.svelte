<script>
	import LensReaderSidebar from "$components/lens/LensReaderSidebar.svelte";

</script>
<div class="lg:flex">
    <div class="flex-1">
        <slot />
    </div>
    <div class="flex-none">
        <div class="lg:w-[18rem] w-full px-8 mx-auto">
            <LensReaderSidebar />
        </div>
    </div>
</div>