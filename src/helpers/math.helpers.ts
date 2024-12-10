// Generate random integer within a specified range
export const random = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min)) + min;
};

// Calculate the average of an array of values
export const average = (array: number[]): number => {
	if (array.length === 0) {
		return 0;
	}
	const totalSum = array.reduce(
		(sum: number, currentValue: number) => sum + currentValue,
		0
	);
	return totalSum / array.length;
};
