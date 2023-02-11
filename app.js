let numberArray = [10, 50, 23, 50];

const calculateAll = function (arr) {
    let result = arr.reduce((n, total) => n + total);
    return `the total is: ${result}`;
};

const operation = {
    '+': (n) => n[0] + n[2],
    '-': (n) => n[0] - n[2],
    'x': (n) => n[0] * n[2],
    '/': (n) => n[0] / n[2],
}

let sum = [150, '+', 200];
let subtract = [1000, '-', 300];

console.log(operation[sum[1]](sum));
console.log(operation[subtract[1]](subtract));


