<script>
  import '../app.css';
  import Snow from '$lib/components/Snow.svelte';
  let { children } = $props();
</script>

<Snow />
<main class="relative z-10 min-h-screen">
  {@render children()}
</main>
