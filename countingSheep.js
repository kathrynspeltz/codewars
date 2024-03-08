/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */

function countSheeps(sheep) {
    let sheepCount = 0;
    for (each of sheep) {
        if (each == true) {
            sheepCount++
        }
    }
    return sheepCount
}