"use strict";
class storage {
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
const marks = new storage(95);
console.log(`Student Marks: ${marks.getItem()}`);
const course = new storage("TypeScript");
console.log(`Course Name: ${course.getItem()}`);
const laptop = new storage({
    brand: "Dell",
    ram: 16
});
const myLaptop = laptop.getItem();
console.log(`Laptop Brand: ${myLaptop.brand}`);
console.log(`RAM: ${myLaptop.ram} GB`);
