<script>
  import Snow from '$lib/components/Snow.svelte';
  import StatCard from '$lib/components/StatCard.svelte';
  import ItemChart from '$lib/components/ItemChart.svelte';
  import ItemList from '$lib/components/ItemList.svelte';
  import { items } from '$lib/data.js';
  import { Package, AlertTriangle, CheckCircle, MapPin } from 'lucide-svelte';

  // Calculate Stats
  const totalItems = items.length;
  const urgentItems = items.filter(i => i.urgency === 'High' || i.urgency === 'Critical').length;
  const resolvedItems = items.filter(i => i.status === 'Matched').length;
  const activeItems = totalItems - resolvedItems;

  // Chart Data: Items by Location
  const locationCounts = items.reduce((acc, item) => {
    acc[item.location] = (acc[item.location] || 0) + 1;
    return acc;
  }, {});

  const locationChartData = {
    labels: Object.keys(locationCounts),
    datasets: [{
      label: 'Items Found',
      data: Object.values(locationCounts),
      backgroundColor: [
        'rgba(5, 46, 22, 0.7)', // Evergreen
        'rgba(153, 27, 27, 0.7)', // Burgundy
        'rgba(217, 119, 6, 0.7)', // Amber
        'rgba(30, 64, 175, 0.7)', // Blue
      ],
      borderColor: [
        '#052E16', '#991B1B', '#D97706', '#1E40AF'
      ],
      borderWidth: 1
    }]
  };

  // Chart Data: Urgency Distribution
  const urgencyCounts = items.reduce((acc, item) => {
    acc[item.urgency] = (acc[item.urgency] || 0) + 1;
    return acc;
  }, {});

  const urgencyChartData = {
    labels: Object.keys(urgencyCounts),
    datasets: [{
      data: Object.values(urgencyCounts),
      backgroundColor: [
        'rgba(153, 27, 27, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(16, 185, 129, 0.8)'
      ],
      hoverOffset: 10
    }]
  };
</script>

<div class="min-h-screen bg-[#FDFCF0] text-amber-950 pb-12 relative overflow-hidden">
  <Snow />
  
  <!-- Header Section -->
  <header class="relative pt-12 pb-20 px-6 text-center">
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10"></div>
    <h1 class="text-5xl md:text-6xl font-serif font-bold text-evergreen-950 mb-4 tracking-tight">
      Winter Holiday Lost & Found
    </h1>
    <p class="text-xl font-serif italic text-amber-800/80 max-w-2xl mx-auto">
      Peak Crowd Day: Monitoring {totalItems} reports with cozy efficiency and warm hearts.
    </p>
    <div class="mt-8 flex justify-center space-x-2">
      <div class="h-1 w-12 bg-burgundy-800 rounded-full"></div>
      <div class="h-1 w-24 bg-evergreen-900 rounded-full"></div>
      <div class="h-1 w-12 bg-burgundy-800 rounded-full"></div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-6 space-y-8 relative z-10">
    
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Items" value={totalItems} icon={Package} />
      <StatCard title="Urgent Action" value={urgentItems} icon={AlertTriangle} color="text-burgundy-800" />
      <StatCard title="Resolved" value={resolvedItems} icon={CheckCircle} color="text-emerald-800" />
      <StatCard title="Active Logs" value={activeItems} icon={MapPin} color="text-blue-800" />
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ItemChart title="Items by Venue" data={locationChartData} type="bar" />
      <ItemChart title="Urgency Distribution" data={urgencyChartData} type="doughnut" />
    </div>

    <!-- List Section -->
    <div class="pt-4">
      <ItemList {items} />
    </div>

  </main>

  <!-- Footer -->
  <footer class="mt-20 text-center text-amber-900/40 text-sm font-serif italic">
    <p>May every lost treasure find its way home this holiday season.</p>
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
</style>
