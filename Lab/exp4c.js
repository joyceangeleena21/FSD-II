"use strict";
class dataStorage {
    item;
    constructor(value) {
        this.item = value;
    }
    getItem() {
        console.log("Retrieving item...");
        return this.item;
    }
    updateItem(newValue) {
        this.item = newValue;
        console.log("Item updated successfully.");
    }
}
const marks = new dataStorage(95);
console.log(`Student Marks: ${marks.getItem()}`);
const course = new dataStorage("TypeScript");
console.log(`Course Name: ${course.getItem()}`);
const laptop = new dataStorage({
    brand: "Dell",
    ram: 16
});
const myLaptop = laptop.getItem();
console.log(`Laptop Brand: ${myLaptop.brand}`);
console.log(`RAM: ${myLaptop.ram} GB`);
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
function printName(item) {
    console.log(`Name: ${item.name}`);
}
printName({
    name: "Priya",
    age: 20
});
printName({
    name: "Arjun",
    department: "CSE"
});
