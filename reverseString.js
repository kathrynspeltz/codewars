/* Given a string, return a new string with the reversed order of characters.

Examples:

reverse('apple') === 'elppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG' */

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

function reverse(str) {
    let newStr = ""
    for (letter in str) {
        newStr = str[letter] + newStr
    }
    return newStr
}

console.log(reverse('apple'))
console.log(reverse('hello'))
console.log(reverse('Greetings!'))