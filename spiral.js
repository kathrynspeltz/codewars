/* Write a function that accepts an integer N and returns a NxN spiral matrix. */

function matrix(n) {
    let spiralMatrix = []

    for (let i = 0; i < n; i++) {
        spiralMatrix.push([])
    }
    let counter = 1
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1
    while (startColumn <= endColumn && startRow <= endRow) {

        for (let i = startColumn; i <= endColumn; i++) {
            spiralMatrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            spiralMatrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            spiralMatrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (i = endRow; i >= startRow; i--) {
            spiralMatrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++
    }

    return spiralMatrix
}

console.log(matrix(3))