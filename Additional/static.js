"use strict";
class Student {
    name;
    static collegeName = "SVECW";
    constructor(name) {
        this.name = name;
    }
    static displayCollege() {
        console.log(Student.collegeName);
    }
    display() {
        console.log(this.name);
    }
}
let s = new Student("Joyce");
s.display();
Student.displayCollege();
