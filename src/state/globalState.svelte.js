function createGlobalState() {
  let audios = $state([]);

  return {
    get audios() {
      return audios;
    },
    set audios(value) {
      audios = value;
    },
  };
}

export const audioState = createGlobalState();
