<script>
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let width;
  let height;
  let snowflakes = [];

  const snowflakeCount = 100;

  function createSnowflake() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      wind: Math.random() * 0.5 - 0.25
    };
  }

  function update() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    
    for (let i = 0; i < snowflakes.length; i++) {
      let f = snowflakes[i];
      f.y += f.speed;
      f.x += f.wind;

      if (f.y > height) {
        f.y = -5;
        f.x = Math.random() * width;
      }

      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
    }
    
    ctx.fill();
    requestAnimationFrame(update);
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push(createSnowflake());
    }

    update();
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-60"
></canvas>
