<template>
  <div
    class="teeter-totter-board w-full relative transition duration-300 ease-in-out bg-yellow-700 rounded-full"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TeeterTotterBoard",
};
</script>
