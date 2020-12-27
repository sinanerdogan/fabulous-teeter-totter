<template>
  <div class="w-full flex items-center flex-col">
    <teeter-totter-board :style="boardStyle">
      <teeter-object
        v-for="element in droppedElements"
        :key="element.id"
        :element="element"
      ></teeter-object>
      <teeter-object
        v-for="element in randomPlacedElements"
        :key="element.id"
        :element="element"
      ></teeter-object>
    </teeter-totter-board>
    <teeter-totter-stand></teeter-totter-stand>
    <div
      class="h-2 w-full relative transition duration-300 ease-in-out bg-yellow-700 rounded-full"
    ></div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { board } from "../constants";
import TeeterTotterBoard from "./TeeterTotterBoard";
export default {
  name: "TeeterTotter",
  components: {
    "teeter-totter-board": TeeterTotterBoard,
    "teeter-totter-stand": () => import("./TeeterTotterStand"),
    "teeter-object": () => import("./Object"),
  },
  computed: {
    ...mapState({
      elements: (state) => state.objectModule.elements,
    }),
    ...mapGetters([
      "droppedElements",
      "randomPlacedElements",
      "isBoardAngleWithinLimits",
      "boardBendingAngle",
    ]),
    sideDiff() {
      return this.droppedElements.length - this.randomPlacedElements.length;
    },
    boardStyle() {
      return {
        transform: `rotate(${this.boardBendingAngle / 2}deg)`,
        height: `${board.BOARD_HEIGHT}px`,
      };
    },
  },
  watch: {
    sideDiff(val) {
      if (val && this.isBoardAngleWithinLimits) {
        this.$store.commit("generateObject", true);
      }
    },
  },
  created() {
    console.log(this.$store.state);
  },
};
</script>
