<script>
  export let title = "";
  export let value = "";
  export let icon = null;
</script>

<div class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer group">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-hygge-gold font-medium uppercase tracking-wider text-xs">{title}</p>
      <h3 class="text-3xl font-bold mt-1 group-hover:text-hygge-gold transition-colors">{value}</h3>
    </div>
    {#if icon}
      <div class="text-hygge-gold">
        <svelte:component this={icon} size={32} />
      </div>
    {/if}
  </div>
</div>
