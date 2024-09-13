// Generate random integer within a specified range
export const random = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

// Calculate the average of an array of values
export const average = (array) => {
	const totalSum = array.reduce((sum, currentValue) => sum + currentValue, 0);
	return totalSum / array.length;
}
