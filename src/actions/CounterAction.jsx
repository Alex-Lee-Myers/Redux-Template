const increment = () => {
	return {
		type: "INCREMENT",
	};
};
const decrement = () => {
	return {
		type: "DECREMENT",
	};
};

export { increment, decrement }; // export these functions so they can be used in other files
