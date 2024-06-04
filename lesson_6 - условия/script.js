'use strict';

if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49){
    console.log('Error!');
} else if (num > 100){
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error!');

const Num = 50;
switch (num){
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Правда');
        break;
    default:
        console.log('Не в этот раз');
        break;       
}


//пример часть 2

let userName = '';
if (userName == null || userName == undefined || userName == false || userName == 0 || userName == '' || userName == NaN){
    userName = 'Lera'
};
console.log(userName);