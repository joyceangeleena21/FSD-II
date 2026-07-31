class Student {
    static collegeName = "SVECW";

    constructor(public name: string) {}

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