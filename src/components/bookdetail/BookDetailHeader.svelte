<script>
	import BookCard from "../BookCard.svelte";
    import { page } from '$app/stores';
	import { books } from "../../lib/store";
	import BookDetImage from "./BookDetImage.svelte";

    let { params } = $page
    let id = +params.id

    let book = $books.find(book => book.id === id)

</script>

<div class="relative flex justify-center mt-20 z-20">
    <div class="flex max-w-[80%] space-x-10">
        <BookDetImage {book} />

        <div class="static space-y-4 mt-4 w-[28rem]">
            <h1 class="text-3xl text-white">{book?.name}</h1>
            <div class="flex items-center space-x-2">
                <p class="text-white">
                    JK Rowling
                </p>
                <span class="h-2 w-2 rounded-full bg-gray-400" />
                <p class="text-white">
                    {book?.rating}/10
                </p>

            </div>
            <!-- this should be a short excerpt of the book -->
            <p class="text-sm">
                {book?.summary}
                {book?.summary}
            </p> 

            <div>
                <a href={"/books/read/" + id} >
                    <button class="btn relative  normal-case">Start Reading</button>
                </a>                
            </div>

        </div>
    </div>
</div>