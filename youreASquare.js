/* Given an integral number, determine if it's a square number */

var isSquare = function (n) {

    return (Number.isInteger(Math.sqrt(n)))

}

console.log(isSquare(4))
console.log(isSquare(25))
console.log(isSquare(26))