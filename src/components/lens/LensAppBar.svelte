<script>
	import Avatar from "../Avatar.svelte";

</script>
<div class="navbar rounded-lg bg-base-100 pr-5 min-h-[1rem] h-[4rem] ">
  <div class="flex-1">
    <ul class="menu menu-horizontal px-1 text-xs lg:text-base">
      <li><a href="/">All</a></li>
      <li><a href="/">Trending</a></li>
      <li><a href="/">History</a></li>
      <li>
        <details>
          <summary>
            Filter
          </summary>
          <ul class="p-2 bg-base-100">
            <li><a href="/">Horror</a></li>
            <li><a href="/">Fantasy</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

  <div class="md:block flex-none gap-1 hidden">
    <Avatar 
    className= "h-8 w-8"
    avatar={{
      image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "CO",
    }} />
    <Avatar
    className= "h-8 w-8"
    avatar={{
      image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "CO"
    }} />
    <Avatar
    className= "h-8 w-8"
    avatar={{
      image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "CO"
    }} />
  </div>
</div>