/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */


function bitCounting(num) {
    let numArr = num.toString()
    let finalVal = 0
    let finalString = ""
    for (let i = 0; i < numArr.length; i++) {
        let numVersion = Number(numArr[i])
        finalString = finalString + numVersion.toString(2)
    }
    for (let j = 0; j < finalString.length; j++) {
        finalVal += Number(finalString[j])
    }
    return finalVal
};

console.log(bitCounting(1234))
console.log(bitCounting(10))
console.log(bitCounting(9))