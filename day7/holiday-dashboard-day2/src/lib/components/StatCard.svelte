<script>
  let { title, value, icon: Icon, color = "text-amber-900" } = $props();
</script>

<div class="bg-cream-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100 flex items-center space-x-4 transition-transform hover:scale-105 duration-300">
  <div class="p-3 rounded-full bg-amber-100/50">
    {#if Icon}
      <Icon class="w-8 h-8 {color}" />
    {/if}
  </div>
  <div>
    <p class="text-sm font-medium text-amber-800/60 uppercase tracking-wider">{title}</p>
    <p class="text-3xl font-serif font-bold text-amber-900">{value}</p>
  </div>
</div>
