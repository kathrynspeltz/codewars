/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? */

function makeNegative(num) {

    if (num <= 0) {
        return num
    } else {
        return -num
    }
}

console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(.12))