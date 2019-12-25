// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {}

module.exports = steps;

// 1.
// for (let i = 0; i < n; i++) {
//     let steps = '';
//     for (let j = 0; j < n; j++) {
//         i >= j ? (steps += '#') : (steps += ' ');
//     }
//     console.log(steps);
// }

// 2. Recursive solution
// if (n === row) {
// 	return;
// }
// if (n === stair.length) {
// 	console.log(stair);
// 	return steps(n, row + 1);
// }
// if (stair.length <= row) {
// 	stair += '#';
// } else {
// 	stair += ' ';
// }
