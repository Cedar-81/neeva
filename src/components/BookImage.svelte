<script lang="ts">
    type Book = {
        id: number;
        name: string;
        genre: string;
        summary: string;
        rating: number;
        image: string;
    };
    export let className: string | undefined;
    export let book: Book | undefined;

</script>

<div class={"relative rounded-lg overflow-hidden perspective book-cover " + className}>
    <div class="absolute inset-0 transform rotate-y-12 bg-white shadow-2xl">
        <div class="h-full w-1/3 absolute top-0 left-0 bg-gradient-to-r from-gray-100 to-transparent"></div>
        <img class="absolute inset-0 object-cover w-full h-full" src={book?.image} alt={book?.name} />
    </div>
</div>


<style>
    .book-cover {
        box-shadow: -19px 20px 7px -11px rgba(0,0,0,0.75);
        -webkit-box-shadow: -19px 20px 7px -11px rgba(0,0,0,0.75);
        -moz-box-shadow: -19px 20px 7px -11px rgba(0,0,0,0.75);
    }
</style>