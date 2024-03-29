/* Write a function that accepts a positive number N.

The function should console log a pyramid shape with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides. */


function pyramids(n) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat((n - (i + 1))) + "#".repeat((i * 2) + 1) + " ".repeat((n - (i + 1))))
    }
}

pyramids(3)
pyramids(5)