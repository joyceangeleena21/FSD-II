"use strict";
function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
let num = 29;
if (isPrime(num)) {
    console.log(num + " is Prime");
}
else {
    console.log(num + " is not Prime");
}
