/* Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character. */

function towerBuilder(nFloors) {
    let towerArr = [];

    for (let i = 0; i < nFloors; i++) {
        towerArr.push(" ".repeat(nFloors - (i + 1)) + "*".repeat(i) + "*" + "*".repeat(i) + " ".repeat(nFloors - (i + 1)))
    }
    return towerArr
}

console.log(towerBuilder(3))