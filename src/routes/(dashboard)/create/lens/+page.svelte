<script>
	import { goto } from "$app/navigation";
	import CreateLensDetails from "$components/Create/CreateLensDetails.svelte";
	import { appSession } from "$lib/appStore";
	import { onMount } from "svelte";
</script>
<CreateLensDetails /> 