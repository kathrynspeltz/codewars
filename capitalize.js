/* Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result. */


function capitalize(str) {
    let strArr = str.split(" ")
    let newStr = ""

    for (let i = 0; i < strArr.length; i++) {
        newStr = newStr + strArr[i][0].toUpperCase() + strArr[i].slice(1)
        if (i < strArr.length - 1) {
            newStr = newStr + " "
        }
    }
    return newStr
}


console.log(capitalize('a short sentence'))
console.log(capitalize("look, it is working!"))