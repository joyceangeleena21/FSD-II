"use strict";
class Student {
    static schoolName = "Vishnu School";
    static totalStudents = 0;
    rollNo;
    studentName;
    constructor(name, roll) {
        this.studentName = name;
        this.rollNo = roll;
        Student.totalStudents++;
    }
    static showSchool() {
        console.log(`Welcome to ${this.schoolName}`);
    }
    showStudent() {
        console.log(`Name: ${this.studentName}`);
        console.log(`Roll No: ${this.rollNo}`);
    }
}
console.log(Student.schoolName);
Student.showSchool();
const s1 = new Student("Angeleena", "A101");
const s2 = new Student("Swathi", "A102");
s1.showStudent();
s2.showStudent();
console.log(s1.rollNo);
console.log(`Total Students: ${Student.totalStudents}`);
