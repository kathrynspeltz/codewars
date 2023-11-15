/* Coding Exercise - Array Chunk
Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size. */

function chunk(array, size) {
    let newArr = []

    while (array.length >= 1) {
        newArr.push(array.splice(0, size))
    }
    return newArr
}

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(chunk([1, 2, 3, 4, 5], 4))