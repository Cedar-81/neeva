<script lang="ts">
  import "../app.postcss";
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
	import { appSession, supabaseClient } from "$lib/appStore";
  import { Toaster } from 'svelte-french-toast';
  export let data

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  appSession.set(session)

  supabaseClient.set(supabase)

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => subscription.unsubscribe()
  });

  let theme = 'dark';
</script>

<div data-theme={theme}>
  <slot />
</div>

<Toaster />