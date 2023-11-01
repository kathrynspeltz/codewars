// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
    let finalValue
    let hours = "00"
    let minutes = "00"
    let secondsleft = "00"
    if (seconds < 60) {
        secondsleft = seconds
    } else if (seconds < 3600) {
        minutes = Math.floor(seconds / 60)
        secondsleft = seconds % 60
    } else if (seconds < 3600) {
        minutes = Math.floor(seconds / 60)
        secondsleft = seconds % 60
    } else {
        hours = Math.floor((seconds / 60) / 60)
        minutes = Math.floor(seconds / 60) % 60
        if (minutes == 0) {
            minutes = "00"
        }
        secondsleft = seconds % 3600
    }
    finalValue = hours.toString() + ":" + minutes.toString() + ":" + secondsleft.toString()
    return finalValue;
}

console.log(humanReadable(50))
console.log(humanReadable(90))
console.log(humanReadable(1990))
console.log(humanReadable(45296))
console.log(humanReadable(86399))
console.log(humanReadable(86400))