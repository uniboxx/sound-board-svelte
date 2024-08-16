<script>
  import { onMount } from 'svelte';
  import { audioState } from '../state/globalState.svelte';

  let audio;
  let { soundName, isPlaying = $bindable() } = $props();

  $effect(() => {
    if (soundName !== isPlaying) {
      audio.pause();
      audio.timeupdate = 0;
    }
  });

  const base = '/sound-board-svelte';

  function handleClick() {
    isPlaying = soundName;
    audio.play();
  }
</script>

<audio bind:this={audio} id={soundName} src={`${base}/sounds/${soundName}.mp3`}
></audio>

<button class="btn" onclick={handleClick}>{soundName}</button>

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
