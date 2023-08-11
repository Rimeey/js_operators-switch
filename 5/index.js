'use strict'

let num1 = +prompt('Enter the first number');
let num2 = +prompt('Enter the second number');

num1 > num2 ? console.log(num1) : num1 < num2 ? console.log(num2) : console.log('NaN')