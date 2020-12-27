const getters = {
  movableElements({ elements }) {
    return elements.filter(
      (element) => !element.isDropped && !element.isRandom
    );
  },
  droppedElements({ elements }) {
    return elements.filter((element) => element.isDropped);
  },
  randomPlacedElements({ elements }) {
    return elements.filter((element) => element.isRandom);
  },
};

export default getters;
