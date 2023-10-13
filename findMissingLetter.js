// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.function findMissingLetter(array)

function findMissingLetter(array) {
    let alphArray = "abcdefghijklmnopqrstuvwxyz".split("");
    let alphStart = alphArray.indexOf(array[0].toLowerCase())
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() != alphArray[alphStart]) {
            if (array[i].toLowerCase() === array[i]) {
                return alphArray[alphStart]
            } else {
                return alphArray[alphStart].toUpperCase()
            }

        }
        else {
            alphStart += 1
        }
    }
}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']))