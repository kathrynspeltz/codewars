/* There is an array with some numbers. All numbers are equal except for one. Try to find it! */

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([4, 4, 4, 3, 4, 4, 4, 4]))