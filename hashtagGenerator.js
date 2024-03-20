/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */

function generateHashtag(str) {
    if (str.trim() == "") {
        return false
    } else {
        const hashed = "#" + str.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1)).join("");
        if (hashed.length > 140) {
            return false
        } else {
            return hashed
        }
    }
}

console.log(generateHashtag(""))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))