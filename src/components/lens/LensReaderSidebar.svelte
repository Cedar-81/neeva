<script>
	import LensCard from "./LensCard.svelte";
	import { singleLens } from "$lib/store";
	import LensQuickLibList from "./LensQuickLibList.svelte";

</script>
<section class="lg:pr-8 lg:fixed top-0 right-0 lg:h-[100vh] lg:overflow-y-auto pb-10">
    <div class="hidden lg:block"><LensCard story={$singleLens} /></div>
    <LensQuickLibList />
</section>