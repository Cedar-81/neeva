<script lang="ts">
	import Icon from "@iconify/svelte";
	import { page } from "$app/stores";
	import { books } from "$lib/store";
	import BookImage from "../BookImage.svelte";

    let { params } = $page
    let id = +params.id

    let book = $books.find(book => book.id === id)

    let bookname = book ? book?.name : ''

    function limitWords(sentence: string, characterLimit:number) {
        if (sentence.length > characterLimit) {
            return `${sentence.substring(0, characterLimit)}...`;
        }
        return sentence;

    }
</script>

<div class="bg-base-200 p-4 space-x-4 flex rounded-lg hover:shadow-lg cursor-pointer">
    <BookImage {book} className="!h-24 !w-20" />
    <div class=" space-y-2 mt-1">
        <div class="flex space-x-1 bg-yellow-200/20 rounded-full px-2 w-max items-center">
            <Icon class="h-4 w-4 text-yellow-500 " icon="material-symbols:star" />
            <p class="text-xs mt-1">{book?.rating}</p>
        </div>
        <div class="space-y-1">
            <h2 class="text-sm text-white">{limitWords(bookname, 25)}</h2>
            <p class="text-xs">Don Norman</p>
            <progress class="progress progress-accent w-full" value="50" max="100" />
        </div>
    </div>
</div>
