
const {sum, div, mult} = require('./Fun/Math');
const {upper, trim, lower} = require('./Fun/string')
const {deepCopy, list} = require('./Fun/array')

console.log(sum(3,4));
console.log(div(16,8));
console.log(mult(3, 4))

console.log(upper('asd'));
console.log(lower('AFDSF'));
console.log(trim('  cdsf    '))

console.log(deepCopy([1, 2, 3, 5, 21]));
console.log(list(['apple', 'banana', 'orange'], 'apple'));

