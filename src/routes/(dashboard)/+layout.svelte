<script>
	import Sidebar from '$components/Sidebar.svelte';
    import { personalBio } from '$lib/appStore';

	export let data
	data.userDetails && personalBio.set(data.userDetails)
</script>

<Sidebar>
	<slot />
</Sidebar>