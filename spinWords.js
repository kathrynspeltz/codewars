/* Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. */

function spinWords(string) {
    let stringSplit = string.split(" ")
    let finalString = ""
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length < 5) {
            finalString = finalString + stringSplit[i]
        } else {
            finalString = finalString + " " + stringSplit[i].split("").reverse().join("")
        }
    }
    return finalString.trimStart()
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
