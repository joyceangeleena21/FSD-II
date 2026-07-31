"use strict";
let str = "fullstackdevelopment";
let frequency = {};
for (let ch of str) {
    frequency[ch] = (frequency[ch] || 0) + 1;
}
console.log(frequency);
