<script>
  import { onMount } from 'svelte';
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);

  export let items = [];
  let chartCanvas;
  let chart;

  $: {
    if (chart && items) {
      updateChart();
    }
  }

  function updateChart() {
    const locations = [...new Set(items.map(i => i.location))];
    const data = locations.map(loc => items.filter(i => i.location === loc).length);

    chart.data.labels = locations;
    chart.data.datasets[0].data = data;
    chart.update();
  }

  onMount(() => {
    const locations = [...new Set(items.map(i => i.location))];
    const data = locations.map(loc => items.filter(i => i.location === loc).length);

    chart = new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: locations,
        datasets: [{
          label: 'Items by Location',
          data: data,
          backgroundColor: '#d4af37',
          borderColor: '#faf3e0',
          borderWidth: 1,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: '#fdf5e6', font: { family: 'Georgia' } }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#fdf5e6' },
            grid: { color: 'rgba(253, 245, 230, 0.1)' }
          },
          x: {
            ticks: { color: '#fdf5e6' },
            grid: { display: false }
          }
        }
      }
    });
  });
</script>

<div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 h-full">
  <canvas bind:this={chartCanvas}></canvas>
</div>
