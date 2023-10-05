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

<svelte:head>
    <meta property="og:site_name" content="Neeva" />
    <meta property=“og:title” content='Neeva - Crafting worlds with words'/>
    <meta property="og:description" content="Neeva is a platform for young writers/writers to create and share their short stories, poems, flash fictions, poetry and more." />
    <meta property="og:url" content="https://neeva.vercel.app" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80" />
    <meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80" />
    <meta property="twitter:site" content="@neevaverse" />
</svelte:head>
