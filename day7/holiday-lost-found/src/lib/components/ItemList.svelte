<script>
  import { AlertCircle, MapPin, Package } from 'lucide-svelte';
  export let items = [];
  let filter = "all";

  $: filteredItems = filter === "all" 
    ? items 
    : items.filter(i => i.urgency.includes("URGENT") || i.urgency === "VERY URGENT");
</script>

<div class="space-y-4">
  <div class="flex gap-4 mb-6">
    <button 
      on:click={() => filter = "all"}
      class="px-4 py-2 rounded-full transition-all {filter === 'all' ? 'bg-hygge-gold text-hygge-green' : 'bg-white/10 hover:bg-white/20'}"
    >
      All Items
    </button>
    <button 
      on:click={() => filter = "urgent"}
      class="px-4 py-2 rounded-full transition-all {filter === 'urgent' ? 'bg-hygge-burgundy text-white' : 'bg-white/10 hover:bg-white/20'}"
    >
      Urgent Only
    </button>
  </div>

  <div class="grid gap-3">
    {#each filteredItems as item}
      <div class="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-all group cursor-default">
        <div class="flex items-center gap-4">
          <div class="p-3 rounded-lg {item.urgency.includes('URGENT') ? 'bg-hygge-burgundy/20 text-hygge-burgundy' : 'bg-hygge-gold/20 text-hygge-gold'}">
            <Package size={20} />
          </div>
          <div>
            <h4 class="font-bold text-lg">{item.name}</h4>
            <div class="flex items-center gap-2 text-sm text-hygge-cream/60">
              <MapPin size={14} />
              <span>{item.location}</span>
            </div>
          </div>
        </div>
        
        <div class="text-right">
          {#if item.urgency.includes('URGENT')}
            <span class="flex items-center gap-1 text-xs font-bold text-hygge-burgundy uppercase tracking-widest bg-hygge-burgundy/10 px-2 py-1 rounded">
              <AlertCircle size={12} />
              {item.urgency}
            </span>
          {:else}
             <span class="text-xs font-bold text-hygge-gold uppercase tracking-widest bg-hygge-gold/10 px-2 py-1 rounded">
              {item.type}
            </span>
          {/if}
          <p class="text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity italic max-w-[200px] truncate">
            "{item.raw}"
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
