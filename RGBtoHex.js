/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here. */

function rgb(r, g, b) {
    let hexStr = ""
    let hexDict = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    function convert(x) {
        if (x == 0) {
            return "00"
        } else if (x > 256) {
            return "FF"
        } else {
            let val1 = Math.floor(x / 16);
            let val2 = ((x / 16) - val1) * 16;
            return hexDict[val1 - 1] + hexDict[val2 - 1]
        }
    }
    return convert(r) + convert(g) + convert(b);
}

console.log(rgb(255, 255, 255))
console.log(rgb(148, 0, 211))