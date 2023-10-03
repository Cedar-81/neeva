<script>
	import BookCard from "../BookCard.svelte";
    import { page } from '$app/stores';
	import { books } from "../../lib/store";

    let { params } = $page
    let id = +params.id

    let book = $books.find(book => book.id === id)

</script>

<div class="relative -top-8 flex px-20 pb-20 rounded-lg bg-base-200 justify-between z-10 max-w-4xl pt-20 mx-auto">
        <div class="space-y-14">
            <div class="space-y-4 w-[80%]">
                <h2 class="font-semibold text-white">Description</h2>    
                <p class="">{book?.summary}</p>
            </div>
    
            <div class="space-y-4">
                <h2 class="font-semibold text-white">Reviews</h2>
                <!-- Review card goes here -->
            </div>
        </div>
    
        <div class="space-y-14">
            <div class="space-y-4">
                <h2 class="font-semibold text-white">Language</h2>
                <p class="">English</p>
            </div>
            
            <div class="space-y-4">
                <h2 class="font-semibold text-white">Genres</h2>
                <div class="">
                    <p class=""><span class="font-semibold">Main:</span> {book?.genre}</p> 
                    <p class=""><span class="font-semibold">Other:</span> Young Adult, Coming of Age</p> 
                </div>
            </div>
    
        </div>
</div>