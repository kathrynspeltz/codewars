/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N. */

function findOutlier(integers) {
    let arrEven = []
    let arrOdd = []

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 0) {
            arrEven.push(integers[i])
        } else {
            arrOdd.push(integers[i])
        }
    }

    if (arrEven.length == 1) {
        return arrEven[0]
    } else {
        return arrOdd[0]
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))