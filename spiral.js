/* Write a function that accepts an integer N and returns a NxN spiral matrix. */

function matrix(n) {
    let spiralMatrix = []

    for (let i = 0; i < n; i++) {
        spiralMatrix.push([])
    }
    return spiralMatrix
}


console.log(matrix(3))