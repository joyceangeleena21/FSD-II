"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let numberBox = new Box(100);
numberBox.display();
let stringBox = new Box("Hello");
stringBox.display();
let booleanBox = new Box(true);
booleanBox.display();
