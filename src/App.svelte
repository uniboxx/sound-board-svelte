<script>
  // @ts-nocheck

  import BtnAudio from './lib/BtnAudio.svelte';
  import { audioState } from './state/globalState.svelte';

  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

  let isPlaying = $state('');
</script>

<div id="buttons">
  {#each sounds as sound (sound)}
    <BtnAudio bind:isPlaying soundName={sound} />
  {/each}
</div>
