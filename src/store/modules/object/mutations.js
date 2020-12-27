import { objects } from "../../../constants";
import { helpers } from "../../../utils";

const mutations = {
	generateObject({ elements }, isRandom = false) {
		console.log(elements, isRandom);
		const id = helpers.randomIdGenerator();
		const weight = helpers.randomNumberGenerator(objects.MIN_WEIGHT, objects.MAX_WEIGHT);
		const color = helpers.randomColorGenerator();
		const size = 1 + objects.SIZE_SCALE_RATIO * (weight - 1);
		const position = 0;
		const isDropped = false;
		elements.push({ id, weight, color, size, position, isRandom, isDropped });
	}
};

export default mutations;
