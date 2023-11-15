/* Given a string, return the character that is most commonly used in the string.

Examples:

 maxChar("abcccccccd") === "c"
 maxChar("apple 1231111") === "1" */


function maxChar(str) {
    let newDict = {};
    let max = 0
    let maxChar = ""

    for (let character of str) {
        if (newDict[character]) {
            newDict[character]++;
        } else {
            newDict[character] = 1;
        }
    }

    for (let character in newDict) {
        if (newDict[character] > max) {
            max = newDict[character];
            maxChar = character;
        }
    }
    return maxChar
}

module.exports = maxChar;

console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))