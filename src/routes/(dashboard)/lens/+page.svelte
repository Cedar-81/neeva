<script>
	import LensHeader from "$components/lens/LensHeader.svelte";
	import LensList from "$components/lens/LensList.svelte";
	import { personalBio, showToastMessage, toastMessage } from "$lib/appStore";
    import {lens} from "$lib/store"
	import { onMount } from "svelte";
	import toast from "svelte-french-toast";

    export let data;
    const lensList = data.lens.body.prioritizedLens

    lens.set(lensList ? lensList : [])

    onMount(() => {
        if($personalBio.banner_version_no == 0 && $personalBio.profile_version_no == 0) {
            toast(
                "Go to your profile and add some nice image of yourself for better identification :)",
                {
                    duration: 4000,
                }
            );
        }
    })

</script>

<div class="px-8 pb-10">
    <LensHeader />
    <LensList />
</div>