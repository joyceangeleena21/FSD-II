"use strict";
function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
let start = 10;
let end = 30;
console.log("Prime Numbers:");
for (let i = start; i <= end; i++) {
    if (isPrime(i))
        console.log(i);
}
