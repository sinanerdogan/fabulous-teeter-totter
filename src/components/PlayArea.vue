<template>
	<div class="border border-blue-900 flex flex-col mb-24 w-10/12 mx-auto flex-auto min-w-3/4">
		<drop-space></drop-space>
		<teeter-totter></teeter-totter>
	</div>
</template>

<script>
export default {
	name: "PlayArea",
	components: {
		"drop-space": () => import("./Space"),
		"teeter-totter": () => import("./TeeterTotter")
	},
	created() {
		console.log(this.$store);
		this.$store.commit("generateObject");
	}
};
</script>
