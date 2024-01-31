function mumble(s) {
    let finalString = s[0].toUpperCase()
    for (let i = 1; i < s.length; i++) {
        finalString = finalString + "-" + s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
    }
    return finalString
}

console.log(mumble("abcd"))
console.log(mumble("RqaEzty"))
console.log(mumble("cwAt"))