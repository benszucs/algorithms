// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let split = str.split(' ');
	for (let i = 0; i < split.length; i++) {
		split[i] = split[i][0].toUpperCase() + split[i].slice(1, split[i].length);
	}
	return split.join(' ');
}

module.exports = capitalize;
