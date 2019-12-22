// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {}

module.exports = reverse;

// 1. split, reverse join method
// return str.split('').reverse().join('')

// 2. Loop through each letter add to front of new variable
// let revStr = ''
// for (let ltr of str) {
//   revStr = ltr + revStr
// }
// return revStr

// 3. split the string and then use .reduce() to loop through
// and reduce to single val
// return str.split('').reduce((rev, char) => char + rev, '');
