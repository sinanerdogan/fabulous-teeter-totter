<template>
  <div class="control-panel w-10/12 flex mx-auto py-2">
    <div class="flex flex-col">
      <div class="flex font-normal">
        Total Weight:
        <strong class="ml-2"> {{ droppedElementWeightTotal }} kg</strong>
      </div>
      <div class="flex font-normal">
        Momentum:
        <strong class="ml-2">
          {{ movableElements[0] && movableElements[0].weight }} kg
        </strong>
      </div>
    </div>
    <span class="ml-auto">
      Please enter <strong> SPACE </strong> button to start and pause the
      game..</span
    >
    <div class="flex font-normal ml-auto">
      Total weight:
      <strong class="ml-2"> {{ randomPlacedElementWieghtTotal }} kg </strong>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { keys } from "../constants";
export default {
  name: "ControlPanel",
  computed: {
    ...mapGetters([
      "droppedElements",
      "randomPlacedElements",
      "movableElements",
    ]),
    droppedElementWeightTotal() {
      return this.getTotalWeight(this.droppedElements);
    },
    randomPlacedElementWieghtTotal() {
      return this.getTotalWeight(this.randomPlacedElements);
    },
  },
  created() {
    window.addEventListener("keydown", this.handleSpaceClick);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleSpaceClick);
  },
  methods: {
    getTotalWeight(elements = []) {
      return elements.reduce((total, current) => (total += current.weight), 0);
    },
    handleSpaceClick(event) {
      // Prevents double click if any button focused
      event.preventDefault();

      if (event.keyCode === keys.SPACE) {
        this.$store.commit("toggleSimulation");
      }
    },
  },
};
</script>
