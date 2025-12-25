<script>
  import { MapPin, AlertCircle, CheckCircle2, Clock } from 'lucide-svelte';
  let { items } = $props();

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };
</script>

<div class="bg-cream-50/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
  <div class="p-6 border-b border-amber-100 bg-amber-50/50">
    <h3 class="text-xl font-serif font-bold text-amber-900">Live Item Registry - Day 2 (Peak Crowd)</h3>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-amber-50/30 text-amber-900/70 text-sm uppercase tracking-wider font-semibold">
          <th class="px-6 py-4">Item</th>
          <th class="px-6 py-4">Location</th>
          <th class="px-6 py-4">Urgency</th>
          <th class="px-6 py-4">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-amber-100">
        {#each items as item}
          <tr class="hover:bg-amber-50/50 transition-colors duration-200 group">
            <td class="px-6 py-4">
              <div class="font-medium text-amber-950 group-hover:text-amber-700 transition-colors">
                {item.item}
              </div>
              <div class="text-xs text-amber-800/60 mt-0.5 line-clamp-1 italic">
                {item.description}
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center text-amber-800/80 text-sm">
                <MapPin class="w-3.5 h-3.5 mr-1.5 opacity-60" />
                {item.location}
              </div>
            </td>
            <td class="px-6 py-4">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold border {getUrgencyColor(item.urgency)}">
                {item.urgency}
              </span>
            </td>
            <td class="px-6 py-4">
              {#if item.status === 'Matched'}
                <div class="flex items-center text-emerald-700 text-sm font-medium">
                  <CheckCircle2 class="w-4 h-4 mr-1.5" />
                  Resolved
                </div>
              {:else}
                <div class="flex items-center text-orange-600 text-sm font-medium">
                  <Clock class="w-4 h-4 mr-1.5" />
                  Active
                </div>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
