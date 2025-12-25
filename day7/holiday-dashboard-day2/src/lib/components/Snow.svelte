<script>
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let width;
  let height;
  let snowflakes = [];

  const snowflakeCount = 100;

  function createSnowflakes() {
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        wind: Math.random() * 0.5 - 0.25
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    for (let flake of snowflakes) {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      
      flake.y += flake.speed;
      flake.x += flake.wind;

      if (flake.y > height) {
        flake.y = -5;
        flake.x = Math.random() * width;
      }
    }
    ctx.fill();
    requestAnimationFrame(animate);
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();
    createSnowflakes();
    animate();

    return () => window.removeEventListener('resize', resize);
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 pointer-events-none z-50"
></canvas>
