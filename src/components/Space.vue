<template>
  <div class="play-space relative flex-auto">
    <teeter-object
      v-for="element in movableElements"
      :key="element.id"
      :element="element"
      :id="element.id"
    ></teeter-object>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { board, keys } from "../constants";

export default {
  name: "TeeterTotterSky",
  components: {
    "teeter-object": () => import("./Object"),
  },
  data() {
    return {
      intevalId: null,
      objectBottomLimit: null,
    };
  },
  computed: {
    ...mapGetters([
      "movableElements",
      "boardBendingAngle",
      "isBoardAngleWithinLimits",
    ]),
    ...mapState({
      fallingIntervalGap: (state) => state.objectModule.fallingIntervalGap,
      isGamePaused: (state) => state.boardModule.isGamePaused,
    }),
    movableElementProperty() {
      const { id } = this.movableElements[0];
      return document.getElementById(id);
    },
  },
  watch: {
    isGamePaused: {
      handler(current) {
        if (current) {
          clearInterval(this.intervalId);
        } else {
          this.getElementBottomLimit();
          this.animateElement();
        }
      },
    },
  },
  mounted() {
    const board = document.querySelector(".teeter-totter-board");

    board.addEventListener("transitionend", this.handleBoardTransitionEnd);
    window.addEventListener("keydown", this.moveElement);

    this.$once("hook:beforeDestroy", () => {
      board.removeEventListener("transitionend", this.handleBoardTransitionEnd);
      window.removeEventListener("keydown", this.moveElement);
    });
  },
  methods: {
    getElementBottomLimit() {
      const boardBoundries = document
        .querySelector(".teeter-totter-board")
        .getBoundingClientRect();
      const panelBoundries = document
        .querySelector(".control-panel")
        .getBoundingClientRect();
      const objectBoundries = this.movableElementProperty.getBoundingClientRect();

      const totterCathet =
        boardBoundries.bottom - panelBoundries.top - board.BOARD_HEIGHT;
      const similarCathet =
        (this.movableElements[0].left * totterCathet) / board.BOARD_WIDTH;

      this.objectBottomLimit =
        this.boardBendingAngle >= 0
          ? boardBoundries.top +
            similarCathet -
            objectBoundries.height -
            panelBoundries.height
          : boardBoundries.bottom -
            similarCathet -
            objectBoundries.height -
            panelBoundries.height;
    },
    moveElement({ keyCode }) {
      const isArrowKeyPressed = Object.keys(keys).some(
        (key) => keys[key] === keyCode
      );

      if (this.isGamePaused || !isArrowKeyPressed) return;

      const elementWidth = this.movableElementProperty.getBoundingClientRect()
        .width;
      const areaWidth = document
        .querySelector(".play-space")
        .getBoundingClientRect().width;

      this.$store.commit("moveObject", {
        movableElements: this.movableElements,
        moveLeft: keyCode === keys.LEFT_ARROW,
        width: (elementWidth / areaWidth) * 100,
      });

      this.$nextTick(this.getElementBottomLimit);
    },
    handleBoardTransitionEnd() {
      if (this.isGamePaused) return;
      if (this.isBoardAngleWithinLimits) {
        this.getElementBottomLimit();
      } else {
        if (window.confirm("Do you want to play again?")) {
          this.$store.commit("updateMovingIntervalGap", true);
          this.$store.commit("clearState");
          this.$store.commit("generateObject");
          this.$store.commit("generateObject");
          this.$store.commit("generateObject", true);
        }
      }
    },
    animateElement() {
      this.intervalId = setInterval(() => {
        if (this.movableElements[0].top >= this.objectBottomLimit) {
          const droppedShape = this.movableElements.shift();
          clearInterval(this.intervalId);

          this.$store.commit("updateObjectStatusAsDropped", droppedShape);
          this.$store.commit("updateMovingIntervalGap");
          this.$store.commit("generateObject");
          this.animateElement();
        } else {
          this.movableElements[0].top += 1;
          this.movableElementProperty.style.top = `${this.movableElements[0].top}px`;
        }
      }, this.fallingIntervalGap);
    },
  },
};
</script>
