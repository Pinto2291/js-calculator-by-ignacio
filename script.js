let numbers = document.querySelectorAll('.number');
let math_operators = document.querySelectorAll('.symbol');
let clear = document.querySelector('.clear');
let back = document.querySelector('.back');
let equal = document.querySelector('.equal');
let up_display = document.getElementById('displayResult');
let down_display = document.getElementById('display');


let total = [];
let total_final = [];

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

function inputNumbers(n) {

    let content = n.textContent;

    if(down_display.textContent != '0' && content !== '.' || content == '0' && total.includes('-') && parseFloat(total[total.length - 1]) > 0){
        total.push(content);
        down_display.textContent = total.join('');
        console.log(total)
    } else if(content == '.' && total[total.length - 1] != '.' && (!total.includes('.') && down_display.textContent != '') && total[total.length - 1] != '-'){
        total.push(content);
        down_display.textContent = total.join('');
        console.log(total)
    }
  
}

function inputSymbol(n) {

    let content = n.textContent;

    if(down_display.textContent !== '' && total[total.length - 1] != '.' && !symbol.includes(total[total.length - 1]) 
    && parseFloat(down_display.textContent) !== 0) {
        
        total_final.push(parseFloat(down_display.textContent), content);
        total = [];
        down_display.textContent = '';
        up_display.textContent = total_final.join(' ');
        console.log(total_final);

    } else if(down_display.textContent == '' && content == '-' && total[total.length - 1] != '.' && !symbol.includes(total[total.length - 1]) 
    && parseFloat(down_display.textContent) !== 0) {

        total.push(content);
        down_display.textContent = total.join('');
        console.log(total[total.length - 1])
    }
};



function calculate() {

    if(total_final.length > 0 && parseFloat(down_display.textContent) !== 0 && down_display.textContent != ''){
        total_final.push(parseFloat(down_display.textContent));
        let result = calculateTotal(total_final);
        up_display.textContent = `${total_final.join(' ')} = ${result}`
        total_final = [];
        total = [];
        down_display.textContent = '';
    } 
};


numbers.forEach((n) => n.addEventListener('click', () => inputNumbers(n)));

math_operators.forEach((n) => n.addEventListener('click', () => inputSymbol(n)));

equal.addEventListener('click', () => {calculate()});

clear.addEventListener('click', 
    function clearAll() {
        total = [];
        total_final = [];
        down_display.textContent = '';
        up_display.textContent = '';
    }
);

back.addEventListener('click', 
    function back() {
        total.pop();
        down_display.textContent = total.join('');
    }
);


/*
let total1 = [10, '+', 50, '+', -200, '+', 1350, 'x', 2, '/', 10];
let total2 = [50, 'x', 2, '+', 105.55, '+', -889.33, '-', 15.90, '/', 2, '+', 45 ];


console.log(calculateTotal(total1));
console.log(calculateTotal(total2));
*/



let number1 = 12;

console.log(number1 % 2)