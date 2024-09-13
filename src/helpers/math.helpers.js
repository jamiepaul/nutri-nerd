// Generate random integer within a specified range
export const random = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};
