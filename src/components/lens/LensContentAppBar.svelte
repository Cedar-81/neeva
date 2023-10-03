<script>

	import { scrollPosition } from "$lib/appStore";

</script>
<div class="navbar px-4 sticky top-0 flex justify-between rounded-lg bg-base-200 min-h-[1rem] h-[4rem] ">
    <input type="range" min="20" max="100" value={`${$scrollPosition}`} class="range range-xs w-full" /> 
</div>