/* Given an integer, return an integer that is the reverse ordering of numbers.

Examples:

reverseInt(15) === 51;
reverseInt(981) === 189;
reverseInt(500) === 5;
reverseInt(-15) === -51;
reverseInt(-90) === -9; 
*/

function reverseInt(n) {
    let absValue = Math.sign(n)
    let numString = Math.abs(n).toString().split("").reverse().join("")
    if (absValue == 1)
        return (Number(numString))
    else
        return (Number(numString) * -1)

}

console.log(reverseInt(981))
console.log(reverseInt(-15))
console.log(reverseInt(500))
console.log(reverseInt(-90))