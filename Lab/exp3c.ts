class Student {

    public static readonly schoolName: string = "Vishnu School";
    public static totalStudents: number = 0;

    public readonly rollNo: string;
    public studentName: string;

    constructor(name: string, roll: string) {
        this.studentName = name;
        this.rollNo = roll;

        Student.totalStudents++;
    }

    public static showSchool(): void {
        console.log(`Welcome to ${this.schoolName}`);
    }

    public showStudent(): void {
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