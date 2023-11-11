/* Given a string, return the character that is most commonly used in the string.

Examples:

 maxChar("abcccccccd") === "c"
 maxChar("apple 1231111") === "1" */


function maxChar(str) {
    let newDict = {}

    for (let character in str) {
        if (newDict[character]) {
            newDict[character]++;
        } else {
            newDict[character] = 1;
        }
    }
}

module.exports = maxChar;

console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))