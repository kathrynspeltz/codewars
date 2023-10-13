// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let newArrOdd = []
    let newVal
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            newArrOdd.push(array[i])
            array[i] = 7
        }
    }
    newArrOdd.sort(function (a, b) {
        return a - b;
    })
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 7) {
            newVal = newArrOdd.splice(0, 1)
            array[i] = newVal[0]
        }
    }


    return (array)
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
