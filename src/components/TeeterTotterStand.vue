<template>
	<div class="stand relative w-0 h-0 border "></div>
</template>

<script>
export default {
	name: "TeeterTotterStand"
};
</script>

<style scoped>
.stand {
	width: 0;
	height: 0;
	border-left: 3.5rem solid transparent;
	border-right: 3.5rem solid transparent;
	border-bottom: 8rem solid #3286d5;
}

.stand::after {
	content: "";
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: -0.5rem;
	left: -0.75rem;
	border-radius: 100%;
	display: block;
	background-color: orange;
}
</style>
