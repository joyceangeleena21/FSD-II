"use strict";
//Parameter & Return Types
function greet(name) {
    return `Namaste, ${name}!`;
}
console.log(greet("Madam"));
//Default Parameters
function getPlace(city = "Vijayawada") {
    return `Place : ${city}`;
}
console.log(getPlace());
console.log(getPlace("Kaikaluru"));
//Optional Parameters
function student(name, roll) {
    console.log("Name : ", name);
    if (roll !== undefined) {
        console.log("Roll : ", roll);
    }
}
student("Pallavi");
student("Joyce", 21);
//REST Parameters
function totalScores(...marks) {
    return marks.reduce((total, current) => total + current, 0);
}
const total = totalScores(98, 99, 100, 97);
console.log(`Total Score : ${total}/400`);
