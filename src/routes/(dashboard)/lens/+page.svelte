<script>
	import LensHeader from "$components/lens/LensHeader.svelte";
	import LensList from "$components/lens/LensList.svelte";
	import { appSession, personalBio, showToastMessage, toastMessage } from "$lib/appStore";
    import {lens} from "$lib/store"
	import { onMount } from "svelte";
	import toast from "svelte-french-toast";

    export let data;
    const lensList = data.lens.body.prioritizedLens

    lens.set(lensList ? lensList : [])

    onMount(() => {
        if($personalBio && $personalBio.banner_version_no == 0 && $personalBio.profile_version_no == 0) {
            toast(
                "Go to your profile and add some nice image of yourself for better identification :)",
                {
                    duration: 4000,
                }
            );
        }
    })

</script>

<svelte:head>
    <meta property="og:site_name" content="Neeva" />
    <meta property=“og:title” content='Lens - Explore a world of unique captivating short stories'/>
    <meta property="og:description" content="Step into the Lens, where brevity is an art form that ignites boundless creativity. In these small yet mighty stories, brevity is the canvas for boundless creativity. Dive into captivating narratives, where every word holds a universe of meaning. Join us on a journey through microfiction wonders, where every word carries the weight of a universe. Whether you're reading or crafting your own stories, Lens invites you to embrace the power of concise storytelling." />
    <meta property="og:url" content="https://neeva.vercel.app/lens" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
    <meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
    <meta property="twitter:site" content="@neevaverse" />
</svelte:head>

<div class="px-8 pb-10">
    <LensHeader />
    <LensList />
</div>
