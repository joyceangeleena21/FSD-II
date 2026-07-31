class Student {
    readonly studentId: number;
    name: string;

    constructor(id: number, name: string) {
        this.studentId = id;
        this.name = name;
    }

    display() {
        console.log(this.studentId, this.name);
    }
}

let student = new Student(101, "Joyce");

student.display();