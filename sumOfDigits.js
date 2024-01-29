/* Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */

function digitalRoot(n) {
    let newNum = n.toString()
    while (newNum.length > 1) {
        let numTotal = 0
        for (let i = 0; i < newNum.length; i++) {
            numTotal += Number(newNum[i])
        }
        newNum = numTotal.toString()
    }
    return Number(newNum)
}

console.log(digitalRoot(16))

console.log(digitalRoot(942))

console.log(digitalRoot(132189))