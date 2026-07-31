"use strict";
let arr = [10, 45, 20, 90, 70];
let first = -Infinity;
let second = -Infinity;
for (let num of arr) {
    if (num > first) {
        second = first;
        first = num;
    }
    else if (num > second && num !== first) {
        second = num;
    }
}
console.log("Second Largest:", second);
