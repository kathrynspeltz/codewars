//Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
//Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
//Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
function romanNumeralsEncoder(number) {
    // convert the number to a roman numeral
    let romanString = ""
    while (number > 0) {
        if (number >= 1000) {
            number -= 1000
            romanString += "M"
        } else if (number >= 900) {
            number -= 900
            romanString += "CM"
        } else if (number >= 500) {
            number -= 500
            romanString += "D"
        } else if (number >= 400) {
            number -= 400
            romanString += "CD"
        } else if (number >= 100) {
            number -= 100
            romanString += "C"
        } else if (number >= 90) {
            number -= 90
            romanString += "XC"
        } else if (number >= 50) {
            number -= 50
            romanString += "L"
        } else if (number >= 40) {
            number -= 40
            romanString += "XL"
        } else if (number >= 10) {
            number -= 10
            romanString += "X"
        } else if (number >= 9) {
            number -= 9
            romanString += "IX"
        } else if (number >= 5) {
            number -= 5
            romanString += "V"
        } else if (number >= 4) {
            number -= 4
            romanString += "IV"
        } else if (number >= 1) {
            number -= 1
            romanString += "I"
        }
    }
    return romanString
}

console.log(romanNumeralsEncoder(3000))
console.log(romanNumeralsEncoder(3090))
console.log(romanNumeralsEncoder(185))