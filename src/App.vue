<template>
  <div id="app" class="text-purple-600 font-bold">
    <control-panel></control-panel>
    <play-area></play-area>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    "control-panel": () => import("./components/ControlPanel"),
    "play-area": () => import("./components/PlayArea"),
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
html * {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
