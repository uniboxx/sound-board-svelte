<script>
  // @ts-nocheck

  import BtnAudio from './lib/BtnAudio.svelte';
  import { audioState } from './state/globalState.svelte';

  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const base = '/sound-board-svelte';

  let audio = $state();
  let isPaused = $state(true);
  let currentTime = $state(0);
  let btnaudio = $state();
</script>

<div id="buttons">
  {#each sounds as sound (sound)}
    <BtnAudio bind:this={btnaudio} soundName={sound} />
  {/each}
</div>
