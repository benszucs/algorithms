// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//Common String Questions
// the technique used in this exercise can be used for many string related questions
// - What is the most common character in the string?
// - Does string A have the same characters as string B? (is it an anagram)
// - Does the given string have any repeated characters in it?

//Method:
// 1. take the string and convert it into an object (map)
// 'Hello There!' = {
//     H: 1,
//     e: 3,
//     l: 2,
//     etc..
// }
//
// 2. convert to array of values & keys > find the largest key

// My solution
function maxChar(str) {
	const chars = {};
	for (let char of str) {
		!chars[char] ? (chars[char] = 1) : chars[char]++;
	}
	let keys = Object.keys(chars);
	let values = Object.values(chars);
	return keys[values.indexOf(Math.max(...values))];
}

// Stephen's solution
function maxChar(str) {
	const charMap = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;
