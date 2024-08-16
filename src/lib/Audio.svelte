<script>
  // @ts-nocheck

  const { sound } = $props();

  const base = '/sound-board-svelte';

  let isPaused = $state(true);

  let audio = $state();
</script>

<audio bind:this={audio} id={sound} src={`${base}/sounds/${sound}.mp3`}></audio>
