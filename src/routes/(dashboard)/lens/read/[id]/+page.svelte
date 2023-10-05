<script lang='ts'>
	import { personalBio, supabaseClient } from "$lib/appStore";
	import { lensComments, singleLens, user_id, type LensComments, lens } from "$lib/store";
	import LensContent from "$components/lens/LensContent.svelte";
	import { page } from "$app/stores";
	export let data;

	let { params } = $page
    	let id = +params.id


	singleLens.set(data.singleLens)
	user_id.set(data.userId)
	lensComments.set(data.comments)
	const lensList = data.lens.body.prioritizedLens
	lens.set(lensList ? lensList : [])

	$supabaseClient.channel('lens_comments_channel')
	.on(
		'postgres_changes',
		{
			event: "*",
			schema: 'public',
			table: 'LensComments'
		},
		(event) => {
			let lens_comments = [...$lensComments, 
			{
				...event.new as LensComments,
				UserDetails: {
					profile_image: $personalBio.profile_image,
					username: $personalBio.username,
				}
			}] 
			lensComments.set(lens_comments)
		}
	)
	.subscribe()

</script>

<svelte:head>
    <meta property="og:site_name" content="Neeva" />
    <meta property=“og:title” content={`Lens - ${data.singleLens.title}`}/>
    <meta property="og:description" content={`${data.singleLens.summary}`} />
    <meta property="og:url" content={`https://neeva.vercel.app/lens/read/${id}`} />
    <meta property="og:type" content="article" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="twitter:card" content="summary" />
</svelte:head>
<LensContent /> 
