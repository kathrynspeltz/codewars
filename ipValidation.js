/* Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive. */


function isValidIP(str) {
    let ipArr = str.split(".")
    let isIP = true

    if (ipArr.length != 4) {
        isIP = false;
    } else {
        for (let i = 0; i < 4; i++) {
            if (ipArr[i] > 255 || ipArr[i] < 0 || ipArr[i][0] == 0) {
                isIP = false
            }
        }
    }
    return isIP
}

console.log(isValidIP("1.2.3.4"))
console.log(isValidIP("123.45.67.89"))
console.log(isValidIP("1.2.3"))
console.log(isValidIP("1.2.3.4.5"))
console.log(isValidIP("123.456.78.90"))
console.log(isValidIP("123.045.067.089"))