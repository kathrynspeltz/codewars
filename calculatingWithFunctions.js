/* This time we want to write calculations using functions and get the results. Let's have a look at some examples: 
Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...: */

function zero(a) {
    return a ? a(0) : 0;
}

function one(a) {
    return a ? a(1) : 1;
}

function two(a) {
    return a ? a(2) : 2;
}

function three(a) {
    return a ? a(3) : 3;
}

function four(a) {
    return a ? a(4) : 4;
}

function five(a) {
    return a ? a(5) : 5;
}

function six(a) {
    return a ? a(6) : 6;
}

function seven(a) {
    return a ? a(7) : 7;
}

function eight(a) {
    return a ? a(8) : 8;
}

function nine(a) {
    return a ? a(9) : 9;
}

function plus(a) {
    return function (b) {
        return a + b;
    };
}

function minus(a) {
    return function (b) {
        return b - a;
    };
}

function times(a) {
    return function (b) {
        return a * b;
    };
}

function dividedBy(a) {
    return function (b) {
        return Math.floor(b / a);
    };
}

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))