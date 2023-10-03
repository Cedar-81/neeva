<script>
	import Icon from "@iconify/svelte";


</script>
<div class="navbar px-4 sticky top-0 flex justify-between rounded-lg bg-base-200 min-h-[1rem] h-[4rem] ">
    <ul class="menu menu-horizontal px-1">
      <li>
        <details class="dropdown dropdown-top p-0">
          <summary tabindex="0" class="p-2">Chapter 1</summary>
          <ul tabindex="0" class="dropdown-content z-[1] mb-4 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Chapter 1</a></li>
            <li><a>Chapter 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
    <input type="range" min="0" max="100" value="40" class="range range-xs w-40" /> 
</div>