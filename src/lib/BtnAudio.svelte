<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { audioState } from '../state/globalState.svelte';

  let { soundName } = $props();

  const base = '/sound-board-svelte';
  onMount(() => {
    if (!audioState.audios.some(el => el.id === audio.id))
      audioState.audios.push(audio);
  });

  function handleClick() {
    audioState.audios.forEach(audio => {
      audio.pause();
      audio.timeupdate = 0;
      audio.classList.add('ciao');
      console.log(audioState.audios);
    });
    audio.play();
  }

  let audio;
</script>

<audio bind:this={audio} id={soundName} src={`${base}/sounds/${soundName}.mp3`}
></audio>

<button class="btn" onclick={handleClick}>{soundName}</button>
