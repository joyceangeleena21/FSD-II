"use strict";
class Student {
    id;
    name;
    marks;
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}
let s1 = new Student(101, "John", 95);
s1.display();
