/* Given an array of integers your solution should find the smallest integer. */

function findSmallestInt(args) {
    return Math.min(...args)
}


console.log(findSmallestInt([34, 15, 88, 2]))
console.log(findSmallestInt([34, -345, -1, 100]))