
function fib(n) {
    let fibSeries = [0, 1]

    for (let i = 2; i <= n; i++) {
        fibSeries.push(fibSeries[i - 2] + fibSeries[i - 1])
    }
    return (fibSeries[n])
}

console.log(fib(4))
console.log(fib(7))
console.log(fib(10))