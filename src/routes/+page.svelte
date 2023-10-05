<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import toast from "svelte-french-toast";

    onMount(() => {
        toast('Welcome', {
            icon: '🧏‍♂️',
        });
        
        location.href = '/lens'
    })

</script>