<script>
    export let book;
    let {name, summary, genre, rating, image} = book
</script>

<div class="card card-side w-[30rem] h-[15rem] bg-base-100 shadow-xl">
  <figure class="relative h-full !min-w-[10rem] !w-[10rem]">
    <img class="absolute inset-0 object-cover w-full h-full" src={image} alt={name}/>
  </figure>
  <div class="card-body pl-8">
    <h2 class="card-title text-lg leading-6">{name}</h2>
    <p class="text-sm">{summary}</p>
    <div class="card-actions justify-end">
      <button class="btn normal-case">Read</button>
      <button class="btn btn-outline normal-case">Add to shelf</button>
    </div>
  </div>
</div>