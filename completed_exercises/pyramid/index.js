// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;



// 1. iterative solution
//
// from 0 to n (iterate through rows)
//      create an empty string, 'level'
//      From 0 to ??? (columns)
//          If the column should have #
//              Add a # to 'level'
//          Else
//              Add a space to 'level'
//      console log 'stair
//
// Solution:
// const midpoint = Math.floor((2*n -1) / 2)
//
// for (let row = 0; row < n; row++) {
//       let level = '';
//
//       for (let column = 0; column < 2*n - 1; column++) {
//           if (midpoint - row <= column && midpoint + row >= column) {
//               level += '#'
//           } else {
//               level += ' '
//           }
//       }
//       console.log(level)
// }


// 2. Recursive solution
//
// function pyramid(n, row = 0, level = '') {
// 	let column = 2 * n - 1;
// 	let midpoint = Math.floor((2 * n - 1) / 2);
// 	if (n === row) {
// 		return;
// 	}
//
// 	if (level.length === 2 * n - 1) {
// 		console.log(level);
// 		return pyramid(n, row + 1);
// 	}
//
// 	if (midpoint - row <= level.length && midpoint + row >= level.length) {
// 		level += '#';
// 	} else {
// 		level += ' ';
// 	}
// 	return pyramid(n, row, level);
// }