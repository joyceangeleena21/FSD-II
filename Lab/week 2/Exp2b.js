"use strict";
//Traditional Function
function total(price, tax) {
    return price + (price * tax);
}
const price = 123;
const tax = 0.15;
const t1 = total(price, tax);
console.log(`Total(Traditional) : ${t1}`);
//Arrow Functions
const arrowTotal = (price, tax) => {
    return price + (price * tax);
};
const t2 = arrowTotal(price, tax);
console.log(`Total(Arrow) : ${t2}`);
//Shorthand Arrow Functions
const message = (Place) => `Welcome to ${Place}`;
console.log(message("Hyderabad"));
