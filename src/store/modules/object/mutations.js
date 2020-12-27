import { objects } from "../../../constants";
import { helpers } from "../../../utils";

const mutations = {
  clearState(state, payload = []) {
    state.elements = payload;
  },
  generateObject({ elements }, isRandom = false) {
    const typeNumber = helpers.randomNumberGenerator(1, 3);
    const id = helpers.randomIdGenerator();
    const weight = helpers.randomNumberGenerator(
      objects.MIN_WEIGHT,
      objects.MAX_WEIGHT
    );
    const type = objects.TYPES[typeNumber];
    const color = helpers.randomColorGenerator();
    const size = 1 + objects.SIZE_SCALE_RATIO * (weight - 1);
    const top = 0;
    const left = helpers.randomNumberGenerator(0, 40);
    const isDropped = false;
    elements.push({
      id,
      type,
      weight,
      color,
      size,
      top,
      left,
      isRandom,
      isDropped,
    });
  },
  updateObjectStatusAsDropped({ elements }, payload) {
    function getIndex(element) {
      return payload.id === element.id;
    }

    const index = elements.findIndex(getIndex);
    if (index !== -1) elements[index].isDropped = true;
  },
  moveObject(state, { movableElements, moveLeft, width }) {
    const object = movableElements[0];

    const canMoveLeft = object.left - 1 >= 0;
    const canMoveRight = object.left + width + 1 <= 45;

    if (moveLeft) canMoveLeft && object.left--;
    else canMoveRight && object.left++;
  },
  updateMovingIntervalGap(state, reset = false) {
    if (reset) {
      state.fallingIntervalGap = objects.MAX_MOVE_SPEED;
    } else if (state.fallingIntervalGap > objects.MIN_MOVE_SPEED) {
      state.fallingIntervalGap--;
    }
  },
};

export default mutations;
