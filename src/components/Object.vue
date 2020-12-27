<template>
	<div
		class="w-8 h-8 absolute flex leading-none justify-center text-center  origin-top-left"
		:class="[element.type]"
		:style="{ ...elementStyle, ...elementBgColor }"
	>
		<span class="flex absolute" :style="textStyle">{{ element.weight }} KG</span>
	</div>
</template>
<script>
import { helpers } from "../utils";
export default {
	name: "TeeterObject",
	props: {
		element: {
			type: Object,
			required: true
		}
	},
	computed: {
		elementStyle() {
			const lightenColor = helpers.LightenDarkenColor(this.element.color, 100);
			return {
				color: lightenColor,
				transform: !this.element.isDropped
					? `scale(${this.element.size})`
					: `scale(${this.element.size}) translateY(-100%)`,
				fontSize: `${
					this.element.size <= 1 ? this.element.size / 1.5 : this.element.size / 4
				}vw`
			};
		},
		elementBgColor() {
			const lightenColor = helpers.LightenDarkenColor(this.element.color, 100);
			return this.element.type === "triangle"
				? { borderBottomColor: this.element.color, alignItems: "flex-start" }
				: {
						backgroundColor: this.element.color,
						alignItems: "center",
						border: `1px solid ${lightenColor}`
				  };
		},
		textStyle() {
			const size = this.element.size <= 1.5 ? this.element.size * 15 : this.element.size * 5;
			return this.element.type === "triangle"
				? { top: `calc(100% + ${size}px)` }
				: { top: `50%`, transform: `translateY(-50%)` };
		}
	}
};
</script>
<style>
.rectangle {
	width: 3rem;
	height: 2rem;
}

.circle {
	border-radius: 100%;
	width: 2rem;
	height: 2rem;
}

.triangle {
	width: 0;
	height: 0;
	border-left: 1.5rem solid transparent;
	border-right: 1.5rem solid transparent;
	border-bottom: 2.5rem solid;
}
</style>
