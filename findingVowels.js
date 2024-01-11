/* Write a function that returns the number of vowels used in a string.
Vowels are the characters a, e, i, o, and u */

function vowels(str) {
    let vowelCount = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            vowelCount += 1
        }
    }
    return vowelCount
}

console.log(vowels('Hi There!'))
console.log(vowels('Why do you ask?'))