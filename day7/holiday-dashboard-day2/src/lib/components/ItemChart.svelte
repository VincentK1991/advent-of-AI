<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let { data, title, type = 'bar' } = $props();

  let canvas;
  let chart;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    chart = new Chart(ctx, {
      type: type,
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: type === 'doughnut' || type === 'pie',
            position: 'bottom',
            labels: {
              font: {
                family: 'serif'
              }
            }
          }
        },
        scales: type === 'bar' ? {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(120, 53, 15, 0.1)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        } : {}
      }
    });

    return () => chart.destroy();
  });
</script>

<div class="bg-cream-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100 h-80">
  <h3 class="text-xl font-serif font-bold text-amber-900 mb-4">{title}</h3>
  <div class="relative h-60">
    <canvas bind:this={canvas}></canvas>
  </div>
</div>
