"use strict";
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++)
        fact *= i;
    return fact;
}
let num = 145;
let original = num;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += factorial(digit);
    num = Math.floor(num / 10);
}
if (sum === original)
    console.log(num + " is Strong Number");
else
    console.log(num + " is Not Strong");
