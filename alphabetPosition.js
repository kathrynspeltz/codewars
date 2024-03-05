/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it. */

function alphabetPosition(text) {
    let newText = "";
    let lowerString = text.toLowerCase()

    for (let i = 0; i < lowerString.length; i++) {
        if ((/[a-z]/).test(lowerString[i])) {
            newText = newText + (" " + (lowerString[i].charCodeAt(0) - 96).toString())
        }
    }

    return newText.trim();
}

console.log(alphabetPosition("a"))
console.log(alphabetPosition("b"))
console.log(alphabetPosition("The sunset sets at twelve o' clock."))