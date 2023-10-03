<script lang="ts">
    import { page } from "$app/stores";
	import { books } from "$lib/store";
	import BookImage from "../BookImage.svelte";
	import BsQuickLibList from "./BSQuickLibList.svelte";

    let { params } = $page
    let id = +params.id

    let book = $books.find(book => book.id === id)


</script>
<section class="pr-6 py-6 fixed top-0 right-0 w-[21rem] h-[100vh] overflow-y-auto pb-10">
    <div class="space-y-7 mt-4">
        <BookImage {book} className="h-44 w-32 mx-auto" />
        <div class="space-y-4 flex flex-col items-center">
            <h2 class="text-lg text-white leading-6 text-center">{book?.name}</h2>
            <progress class="progress progress-accent w-[90%] mx-auto" value="50" max="100" />
        </div>
    </div>
    <BsQuickLibList />
</section>