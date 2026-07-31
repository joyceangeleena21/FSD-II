"use strict";
class Student {
    studentId;
    name;
    constructor(id, name) {
        this.studentId = id;
        this.name = name;
    }
    display() {
        console.log(this.studentId, this.name);
    }
}
let student = new Student(101, "John");
student.display();
