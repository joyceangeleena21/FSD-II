"use strict";
function firstElement(items) {
    return items[0];
}
function packItem(item) {
    return {
        product: item,
        packedOn: new Date()
    };
}
const subjects = ["Math", "Physics", "Chemistry"];
console.log(`First Subject: ${firstElement(subjects)}`);
const rollNumbers = [101, 102, 103];
console.log(`First Roll Number: ${firstElement(rollNumbers)}`);
const student = {
    name: "Rahul",
    year: 3
};
const packedStudent = packItem(student);
console.log(`Packed Student: ${packedStudent.product.name}`);
console.log(`Packed On: ${packedStudent.packedOn}`);
