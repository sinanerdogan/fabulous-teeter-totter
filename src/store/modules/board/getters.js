import { board } from "../../../constants";
import { helpers } from "../../../utils";

const getters = {
  boardBendingAngle(state, { randomElementsCount, droppedElementsCount }) {
    var angle = 0;

    if (!droppedElementsCount) {
      angle = board.MAX_BENDING_ANGLE;
    } else {
      const subtraction = Math.abs(droppedElementsCount - randomElementsCount);

      angle =
        droppedElementsCount > randomElementsCount
          ? (subtraction / droppedElementsCount) * -50
          : (subtraction / randomElementsCount) * 50;
    }

    return angle;
  },
  isBoardAngleWithinLimits(state, { boardBendingAngle }) {
    return (
      boardBendingAngle > board.MIN_BENDING_ANGLE &&
      boardBendingAngle < board.MAX_BENDING_ANGLE
    );
  },
  droppedElementsCount(state, { droppedElements }) {
    return helpers.objectProportion(droppedElements, true);
  },
  randomElementsCount(state, { randomPlacedElements }) {
    return helpers.objectProportion(randomPlacedElements);
  },
};

export default getters;
