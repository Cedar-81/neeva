<script lang='ts'>
	import { page } from '$app/stores';
	import Sidebar from '$components/Sidebar.svelte';
	import Toast from '$components/Toast.svelte';
	import { personalBio } from '$lib/appStore';

	export let data
	personalBio.set(data.userDetails)

</script>
 
<Toast />


<Sidebar >
	<slot />
</Sidebar>



    


