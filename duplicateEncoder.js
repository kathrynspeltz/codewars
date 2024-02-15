/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(word) {
    let wordArr = word.toLowerCase().split("")
    let valueAmount
    let finalString = ""
    for (let i = 0; i < wordArr.length; i++) {
        valueAmount = (wordArr.filter(value => value == wordArr[i])).length
        if (valueAmount == 1) {
            finalString = finalString + "("
        } else {
            finalString = finalString + ")"

        }
    }
    return finalString

}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))