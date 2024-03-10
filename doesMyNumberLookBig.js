/* A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic: */

function narcissistic(value) {
    let valueArr = value.toString().split("")
    return (value == valueArr.map((x) => (x * 1) ** valueArr.length).reduce((a, b) => a + b, 0))
}

console.log(narcissistic(153))
console.log(narcissistic(1652))