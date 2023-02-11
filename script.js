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
    '+': (n) => n[0] + n[2],
    '-': (n) => n[0] - n[2],
    'x': (n) => n[0] * n[2],
    '/': (n) => n[0] / n[2],
}

function roundNum(n) {

    function count(numb) {
        if (Number.isInteger(numb)) {
            return 0;
        } else {
            return numb.toString().split('.')[1].length;
        }
    }

    if(count(n) >= 3){
        return parseFloat((n).toFixed(3)); 
    } else if(count(n) < 3) {
        return n;
    }
};

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

    } 
};


function calculate() {

    if(total_final.length > 0 && parseFloat(down_display.textContent) !== 0 && down_display.textContent != ''){
        total_final.push(parseFloat(down_display.textContent));
        let result = calculateTotal(total_final);
        up_display.textContent = `${total_final.join(' ')} = ${roundNum(result)}`
        total_final = [];
        total = [];
        down_display.textContent = parseFloat(roundNum(result));
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