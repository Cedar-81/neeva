<script>
	import Sidebar from '$components/Sidebar.svelte';
    import { personalBio } from '$lib/appStore';

	export let data
	
	// Reactively update personalBio whenever data changes
	$: if (data?.userDetails) {
		personalBio.set(data.userDetails);
	}
</script>

<Sidebar>
	<slot />
</Sidebar>