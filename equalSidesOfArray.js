/* You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1. */

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftHalf = arr.slice(0, i)
        let rightHalf = arr.slice(i + 1)
        if ((leftHalf.reduce((a, b) => a + b, 0)) == rightHalf.reduce((a, b) => a + b, 0)) {
            return i
        }
    }
    return -1
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]))