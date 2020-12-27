function randomIdGenerator() {
	return (
		"_" +
		Math.random()
			.toString(36)
			.substr(2, 9)
	);
}

function randomColorGenerator() {
	const r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	const g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	const b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

	return `${r}, ${g}, ${b}`;
}

function randomNumberGenerator() {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
	randomIdGenerator,
	randomColorGenerator,
	randomNumberGenerator
};
