/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
    let newStr = []
    let strSlice = ""
    if (str.length % 2 == 0) {
        for (let i = 0; i < str.length; i += 2) {
            strSlice = str.slice(i, i + 2)
            newStr.push(strSlice)
        }
    } else {
        for (let i = 0; i < str.length - 1; i += 2) {
            strSlice = str.slice(i, i + 2)
            newStr.push(strSlice)
        } newStr.push(str[str.length - 1] + "_")
    }
    return newStr
}

console.log(solution('abcdefg'))