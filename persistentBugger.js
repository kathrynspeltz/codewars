/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit. */



function persistence(num) {
    let numArr = []
    let rounds = 0
    while (num > 9) {
        numArr = num.toString().split('')
        let newNum = 1
        for (let i = 0; i < numArr.length; i++) {
            newNum = numArr[i] * newNum
        }
        num = newNum
        rounds++
    }
    return rounds
}

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))