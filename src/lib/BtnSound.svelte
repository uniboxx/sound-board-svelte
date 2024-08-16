<script>
  // @ts-nocheck

  const { soundName, onclick } = $props();
  const base = '/sound-board-svelte';

  let button;
</script>

<button class="btn" bind:this={button}>{soundName}</button>

<style lang="scss">
  .btn {
    background-color: rebeccapurple;
    border-radius: 5px;
    border: none;
    color: white;
    margin: 1rem;
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
    font-family: inherit;
  }
  .btn:hover {
    opacity: 0.9;
  }
  .btn:focus {
    outline: none;
  }
</style>
