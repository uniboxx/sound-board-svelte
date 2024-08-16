<script>
  import Audio from './lib/Audio.svelte';
  import BtnSound from './lib/BtnSound.svelte';

  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const base = '/sound-board-svelte';

  let audio = $state();
</script>

<audio bind:this={audio} src={`${base}/sounds/applause.mp3`}> </audio>

<button onclick={() => audio.play()}>Click Me!! 🔊</button>

{#each sounds as sound (sound)}
  <Audio {sound} />
{/each}
<div id="buttons">
  {#each sounds as sound (sound)}
    <BtnSound soundName={sound} onclick={() => null} />
  {/each}
</div>
