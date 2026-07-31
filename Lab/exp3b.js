"use strict";
class StudentAccount {
    name;
    marks;
    password;
    bonusMarks = 0;
    constructor(name, marks, password) {
        this.name = name;
        this.marks = marks;
        this.password = password;
    }
    updateMarks(newMarks, enteredPassword) {
        if (this.checkPassword(enteredPassword)) {
            this.marks = newMarks;
            console.log(`Marks Updated: ${this.marks}`);
        }
        else {
            console.log("Wrong Password");
        }
    }
    checkPassword(pass) {
        return this.password === pass;
    }
}
class TopStudent extends StudentAccount {
    addBonus() {
        this.bonusMarks += 10;
        console.log(`Bonus Marks: ${this.bonusMarks}`);
    }
}
const student = new StudentAccount("Rahul", 80, 1234);
console.log(`Student Name: ${student.name}`);
student.updateMarks(90, 1234);
const topper = new TopStudent("Priya", 95, 5678);
topper.addBonus();
