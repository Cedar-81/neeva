<script lang="ts">
    interface Avatar {
        image: string;
        name: string;
    }

    
    export let avatar: Avatar;
    export let className: string;

</script>

<div class={"avatar " + className}>
  <div class="w-24 mask mask-hexagon">
    <img src={avatar.image} alt={avatar.name} />
  </div>
</div>

{#if avatar.image.length === 0}
    <div class={"avatar placeholder " + className}>
    <div class="bg-neutral-focus mask mask-hexagon text-neutral-content rounded-full w-24">
        <span class="text-xs">{avatar.name}</span>
    </div>
    </div> 
{/if}