<script lang='ts'>
	import ProfileHeader from "$components/Profile/ProfileHeader.svelte";
	import { author, usersLens, type Author } from "$lib/store"
	import ProfileLens from "$components/Profile/ProfileLens.svelte";
	import { personalBio, supabaseClient } from "$lib/appStore";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	export let data;
	let owner =  data.usersLens ? data.usersLens.profileOwner : false
	data.usersLens && usersLens.set(data.usersLens.lens)
	

	// page.subscribe(({ params }) => { 
    //     username = params.username;
    // });

	author.set(data.profile)
     onMount(() => {
    });
 
	const channel = $supabaseClient.channel('author_profile_channel')
	.on(
		'postgres_changes',
		{
			event: "*",
			schema: 'public',
			table: 'UserDetails'
		},
		(event) => {
			let author_profile: Author;
			author_profile = event.new as Author;
			const is_following = author_profile.followers == null ? false : !(author_profile.followers?.indexOf($personalBio.username) == -1)
			console.log('inside here ', is_following, author_profile, event)
			if(author_profile.user_id !== $author.user_id) {
				personalBio.set(author_profile)
				return
			}
			author.set({  
				...author_profile,
				user_is_following: is_following,
				lens_progress: $author.lens_progress
			})
			console.log('set successfully', $author)
		}
	)
	.subscribe()
	console.log('outside subscription', $author, $author.followers == null)

</script>

<section class="lg:pl-8">
	<ProfileHeader {owner} />
	<ProfileLens {owner} />
</section> 