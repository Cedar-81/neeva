<script lang="ts">
	import BookImage from "./BookImage.svelte";

    type Book = {
        id: number;
        name: string;
        genre: string;
        summary: string;
        rating: number;
        image: string;
    };

    export let book : Book;
    export let className: string | undefined;
    let {id, name, summary, genre, rating, image, } = book

    function limitWords(sentence: string, characterLimit:number) {
        if (sentence.length > characterLimit) {
            return `${sentence.substring(0, characterLimit)}...`;
        }
        return sentence;

    }
</script>

<a href={"/" + id}>
    <div class={"space-y-2 " + className}>
        <BookImage {book} className="h-44 w-32" />
        <div class="space-y-1">
            <h2 class="text-white text-sm leading-5">{limitWords(name, 18)}</h2>
            <div class="flex space-x-2 items-center">
                <p class="text-xs">{genre}</p>    
                <div class="h-2 w-2 rounded-full bg-gray-400" />
                <p class="font-semibold text-xs">{rating*2}</p>
            </div>
        </div>
    </div>
</a>
