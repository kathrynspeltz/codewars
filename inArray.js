/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2 */

function inArray(array1, array2) {
    let array2String = array2.join(" ")
    let rArr = []

    for (let i = 0; i < array1.length; i++) {
        if (array2String.includes(array1[i]))
            rArr.push(array1[i])
    }
    return rArr.sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))