/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized. */

function toCamelCase(str) {
    let strArr = str.split(/\_|\-/)
    if (strArr.length == 0 || strArr.length == 1) {
        return str
    } else {
        for (let i = 1; i < strArr.length; i++) {
            strArr[i] = (strArr[i][0].toUpperCase() + strArr[i].slice(1))
        }

        return strArr.join("")
    }

}

console.log(toCamelCase(""))
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))

