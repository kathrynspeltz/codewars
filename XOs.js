/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */
function XO(str) {
    let StrArray = str.toLowerCase().split("")
    let StrOs = StrArray.filter(item => item == "o")
    let StrXs = StrArray.filter(item => item == "x")
    return StrOs.length == StrXs.length
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))