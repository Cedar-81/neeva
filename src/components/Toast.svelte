<script>
  import { Loader2 } from 'lucide-svelte'
	import { loading, showToast, toastMessage } from "$lib/appStore";

</script>


{#if $loading}
  <div class="toast toast-top toast-center z-50 max-w-full">
    <div class="alert alert-info">
      <p class="flex gap-4"><Loader2 class=" animate-spin"/> Loading...</p>
    </div>
  </div>
{/if}


{#if $showToast}
  <div class="toast toast-top toast-center z-50">
    <div class="alert alert-info">
      <span>{$toastMessage}</span>
    </div>
  </div>
{/if}
