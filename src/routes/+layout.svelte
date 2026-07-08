<script lang="ts">
  import "../app.css";
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import { appSession, supabaseClient } from "$lib/appStore";
  import { Toaster } from 'svelte-french-toast';

  export let data;

  $: ({ supabase, session } = data);

  // Update stores reactively
  $: appSession.set(session);
  $: supabaseClient.set(supabase);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event: any, _session: { user: { email: any; }; access_token: any; }) => {
      
      // ONLY invalidate if the session access token actually changed!
      if (_session?.access_token !== session?.access_token) {
        invalidate('supabase:auth');
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<div class="dark" data-theme="dark">
  <slot />
</div>

<Toaster />