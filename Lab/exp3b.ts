class StudentAccount {

    public name: string;

    private marks: number;
    private password: number;

    protected bonusMarks: number = 0;

    constructor(name: string, marks: number, password: number) {
        this.name = name;
        this.marks = marks;
        this.password = password;
    }

    public updateMarks(newMarks: number, enteredPassword: number): void {
        if (this.checkPassword(enteredPassword)) {
            this.marks = newMarks;
            console.log(`Marks Updated: ${this.marks}`);
        } else {
            console.log("Wrong Password");
        }
    }

    private checkPassword(pass: number): boolean {
        return this.password === pass;
    }
}

class TopStudent extends StudentAccount {

    public addBonus(): void {
        this.bonusMarks += 10;
        console.log(`Bonus Marks: ${this.bonusMarks}`);
    }
}

const student = new StudentAccount("Joyce", 80, 1234);

console.log(`Student Name: ${student.name}`);

student.updateMarks(90, 1234);

const topper = new TopStudent("Mahi", 95, 5678);
topper.addBonus();