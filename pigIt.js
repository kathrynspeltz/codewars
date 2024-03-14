/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. */


function pigIt(str) {
    let pigStr = []
    let strArr = str.split(" ")

    for (let i = 0; i < strArr.length; i++) {
        if (/^[a-zA-Z]+$/.test(strArr[i])) {
            pigStr.push(strArr[i].substring(1) + strArr[i].substring(0, 1) + "ay")
        } else {
            pigStr.push(strArr[i])
        }
    }

    return pigStr.join(" ")
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))