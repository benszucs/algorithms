// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {}

module.exports = palindrome;

// 1. reverse string and compare it to original
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }

// 2. split into array and use .every()
// to compare 1st to last -> last to first in loop
// return str.split('').every((char, i) => {
//   return char === str[str.length - i - 1];
// });
