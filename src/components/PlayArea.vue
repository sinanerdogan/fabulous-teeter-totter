<template>
  <div class="flex flex-col mb-24 w-10/12 mx-auto flex-auto min-w-3/4">
    <drop-space></drop-space>
    <teeter-totter></teeter-totter>
  </div>
</template>

<script>
import TeeterTotter from "./TeeterTotter";
export default {
  name: "PlayArea",
  components: {
    "drop-space": () => import("./Space"),
    "teeter-totter": TeeterTotter,
  },
  created() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.$store.commit("updateMovingIntervalGap", true);
      this.$store.commit("generateObject");
      this.$store.commit("generateObject");
      this.$store.commit("generateObject", true);
    },
  },
};
</script>
