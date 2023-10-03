<script>
	import { lensCreateForm } from "$lib/appStore";
	import CreateLensStory from "$components/Create/CreateLensStory.svelte";
	export let data;

	const formData = data.getLensForm

	lensCreateForm.set({
		title: formData.title,
		summary: formData.summary,
		genre: formData.genre,
		content: formData.content,
	})
</script>
<CreateLensStory />