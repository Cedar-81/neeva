<script lang="ts">
  import "../app.css";
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
	import { appSession, supabaseClient } from "$lib/appStore";
  import { Toaster } from 'svelte-french-toast';
  export let data

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  // Update the global session store whenever session changes
  $: appSession.set(session)

  supabaseClient.set(supabase)

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      console.log('Auth state changed:', event, _session?.user?.email);
      
      // Always invalidate to trigger layout reload with new session
      invalidate('supabase:auth');
      
      if (_session) {
        appSession.set(_session);
      }
    })

    return () => subscription.unsubscribe()
  });

  let theme = 'dark';
</script>

<div class="dark" data-theme="dark">
  <slot />
</div>

<Toaster />