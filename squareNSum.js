/* Complete the square sum function so that it squares each number passed into it and then sums the results together. */

function squareSum(numbers) {
    let totalVal = 0
    for (let i = 0; i < numbers.length; i++) {
        totalVal += (numbers[i] ** 2)
    }
    return totalVal
}

console.log(squareSum([1, 2]))
console.log(squareSum([0, 3, 4, 5]))