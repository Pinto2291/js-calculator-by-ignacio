const operation = {
    '+': function(n) {return n[0] + n[2]},
    '-': function(n) {return n[0] - n[2]},
    'x': function(n) {return n[0] * n[2]},
    '/': function(n) {return n[0] / n[2]},
}

const symbol = ['+', '-', 'x', '/'];

function calculateTotal(n) {

    let result = 0;
    let array = [];

    n.map((e) => {
        if((typeof e == 'number' || symbol.includes(e))){
            array.push(e)
            if(array.length == 3){
                console.log(array)
                result = operation[array[1]](array)
                array = [];
                array.push(result);
            }
        }
    })
    return result
};

let total1 = [10, '+', 50, '+', -200, '+', 1350, 'x', 2, '/', 10];
let total2 = [50, 'x', 2, '+', 105.55, '+', -889.33, '-', 15.90, '/', 2, '+', 45 ];

console.log(calculateTotal(total1));
console.log(calculateTotal(total2));