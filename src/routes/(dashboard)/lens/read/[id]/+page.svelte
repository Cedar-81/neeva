<script lang='ts'>
	import { personalBio, supabaseClient } from "$lib/appStore";
	import { lensComments, singleLens, user_id, type LensComments, lens } from "$lib/store";
	import LensContent from "$components/lens/LensContent.svelte";
	export let data;

	singleLens.set(data.singleLens)
	user_id.set(data.userId)
	lensComments.set(data.comments)
	const lensList = data.lens.body.prioritizedLens
	lens.set(lensList ? lensList : [])
	console.log('comments', data.comments)

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
<LensContent /> 
