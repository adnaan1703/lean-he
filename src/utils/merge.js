const merge = function (options, defaults) {
	if (!options) {
		return defaults;
	}
	let result = {};
	let key;
	for (key in defaults) {
		// A `hasOwnProperty` check is not needed here, since only recognized
		// option names are used anyway. Any others are ignored.
		result[key] = options.hasOwnProperty(key) ? options[key] : defaults[key];
	}
	return result;
};
export default merge;
