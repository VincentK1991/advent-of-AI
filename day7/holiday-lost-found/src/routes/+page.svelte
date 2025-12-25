<script>
  import { items } from '$lib/data/items';
  import StatCard from '$lib/components/StatCard.svelte';
  import ItemChart from '$lib/components/ItemChart.svelte';
  import ItemList from '$lib/components/ItemList.svelte';
  import { Package, AlertTriangle, CheckCircle, Search } from 'lucide-svelte';

  const totalItems = items.length;
  const urgentItems = items.filter(i => i.urgency.includes("URGENT")).length;
  const uniqueItems = [...new Set(items.map(i => i.name))].length;
  const matchedPairs = items.filter(i => i.isMatch).length / 2;
</script>

<div class="max-w-7xl mx-auto px-6 py-12">
  <header class="mb-12 text-center">
    <h1 class="text-6xl font-bold text-hygge-cream mb-4 drop-shadow-lg">
      Winter Festival <span class="text-hygge-gold">Lost & Found</span>
    </h1>
    <p class="text-xl text-hygge-warm/80 italic font-serif">
      Cozying up the chaos of Day 2: Peak Crowd Day
    </p>
  </header>

  <!-- Stats Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <StatCard title="Total Found" value={totalItems} icon={Package} />
    <StatCard title="Urgent Cases" value={urgentItems} icon={AlertTriangle} />
    <StatCard title="Unique Clusters" value={uniqueItems} icon={Search} />
    <StatCard title="Matched Pairs" value={Math.floor(matchedPairs)} icon={CheckCircle} />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Chart Section -->
    <div class="lg:col-span-1 space-y-8">
      <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h3 class="text-xl font-bold mb-6 text-hygge-gold flex items-center gap-2">
           Location Distribution
        </h3>
        <ItemChart {items} />
      </div>
      
      <div class="bg-hygge-burgundy/10 p-8 rounded-2xl border border-hygge-burgundy/30 relative overflow-hidden group">
        <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
          <AlertTriangle size={120} />
        </div>
        <h4 class="text-hygge-burgundy font-bold text-lg mb-2 uppercase tracking-tighter">Urgency Note</h4>
        <p class="text-hygge-cream/80 text-sm leading-relaxed">
          Highest concentration of lost items reported near the <strong>Hot Cocoa Stand</strong> and <strong>Ice Rink</strong>. Priority dispatch for electronics and family heirlooms.
        </p>
      </div>
    </div>

    <!-- List Section -->
    <div class="lg:col-span-2">
      <div class="bg-white/5 p-8 rounded-2xl border border-white/10">
        <h3 class="text-2xl font-bold mb-8 text-hygge-gold flex items-center justify-between">
          <span>Recent Activity Logs</span>
          <span class="text-xs font-normal text-hygge-cream/40 uppercase tracking-widest">39 entries today</span>
        </h3>
        <ItemList {items} />
      </div>
    </div>
  </div>

  <footer class="mt-20 text-center text-hygge-cream/30 text-sm">
    <p>&copy; 2025 Winter Festival Safety Team &bull; Keep it Warm, Keep it Cozy</p>
  </footer>
</div>
