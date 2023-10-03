<script>
  import { Loader2 } from 'lucide-svelte'
	import { loading, showToast, toastMessage } from "$lib/appStore";
	import { onDestroy } from 'svelte';


  onDestroy(() => toastMessage.set(''))

</script>


{#if $loading}
  <div class="toast toast-top toast-center z-50 max-w-full">
    <div class="alert alert-info">
      <p class="flex gap-4"><Loader2 class=" animate-spin"/> Loading...</p>
    </div>
  </div>
{/if}


{#if $showToast}
<div class=" animate-bounce transition-all w-full flex justify-center fixed top-3 z-50">
    <div class="alert alert-info relative text-left w-max max-w-[90vw] h-max">
      <p class="">{$toastMessage}</p>
    </div>
</div>

{/if}
