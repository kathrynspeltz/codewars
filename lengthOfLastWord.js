/* Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only. */

function lengthOfLastWord(s) {
    let newArr = s.split(" ")
    console.log(newArr)
    newArr = newArr.filter(word => word != "")
    console.log(newArr)
    let word = newArr[newArr.length - 1]
    return word.length
};

lengthOfLastWord("   fly me   to   the moon  ")
