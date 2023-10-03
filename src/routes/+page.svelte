<script>
	import { goto } from "$app/navigation";
	import { showToastMessage, toastMessage } from "$lib/appStore";
	import { onMount } from "svelte";

    onMount(() => {
        toastMessage.set('Welcome')
        showToastMessage()
        
        location.href = '/lens'
    })

</script>