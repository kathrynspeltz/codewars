/* Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity.
Only consider characters, not spaces or punctuation
Consider capital letters to be the same as lower case

Examples:
anagrams('rail safety', 'fairy tales') === true
anagrams('RAIL! SAFETY!', 'fairy tales') === true
anagrams('Hi there', 'Bye there') === false */

function anagrams(stringA, stringB) {
    let newStringA = stringA.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(" ", "").split("").sort()
    let newStringB = stringB.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(" ", "").split("").sort()
    console.log(newStringA.toString() == newStringB.toString())
}

anagrams('rail safety', 'fairy tales')
anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')
anagrams('hello', 'llohe')
anagrams('Whoa! Hi!', 'Whoa! Hi!')