import { objects } from "../../../constants";
import { helpers } from "../../../utils";

const mutations = {
	generateObject({ elements }, isRandom = false, isFalling = false) {
		console.log(elements, isRandom);
		const typeNumber = helpers.randomNumberGenerator(1, 3);
		const id = helpers.randomIdGenerator();
		const weight = helpers.randomNumberGenerator(objects.MIN_WEIGHT, objects.MAX_WEIGHT);
		const type = objects.TYPES[typeNumber];
		const color = helpers.randomColorGenerator();
		const size = 1 + objects.SIZE_SCALE_RATIO * (weight - 1);
		const position = 0;
		const isDropped = false;
		elements.push({ id, type, weight, color, size, position, isRandom, isDropped, isFalling });
		console.log({ id, type, weight, color, size, position, isRandom, isDropped });
	}
};

export default mutations;
