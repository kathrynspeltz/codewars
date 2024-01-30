/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

function descendingOrder(number) {
    let numArr = number.toString().split("")
    numArr.sort().reverse()
    let finalNum = ""
    for (let i = 0; i < numArr.length; i++) {
        finalNum = finalNum + numArr[i]
    }
    return Number(finalNum)
}

console.log(descendingOrder(42145))
console.log(descendingOrder(145263))
console.log(descendingOrder(123456789))