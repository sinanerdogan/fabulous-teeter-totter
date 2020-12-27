<template>
	<div class="w-full flex items-center flex-col">
		<teeter-totter-board></teeter-totter-board>
		<teeter-totter-stand></teeter-totter-stand>
		<div
			class="h-2 w-full relative transition duration-300 ease-in-out bg-yellow-700 rounded-full"
		></div>
	</div>
</template>
<script>
export default {
	name: "TeeterTotter",
	components: {
		"teeter-totter-board": () => import("./TeeterTotterBoard"),
		"teeter-totter-stand": () => import("./TeeterTotterStand")
	}
};
</script>
