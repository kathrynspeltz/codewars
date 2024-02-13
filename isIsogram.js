/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str) {

    let NewStr = new Set(str.toLowerCase())
    console.log(NewStr)
    return (NewStr.size == str.length)

}

console.log(isIsogram("Moo"))
console.log(isIsogram("books"))
console.log(isIsogram("Dermatoglyphics"))