/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
    let wordArr = s.split(" ")
    let shortestWord = wordArr[0]

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length < shortestWord.length) {
            shortestWord = wordArr[i]
        }
    }
    return shortestWord.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("Let's travel abroad shall we"))