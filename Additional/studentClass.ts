class Student {
    constructor(
        public id: number,
        public name: string,
        public marks: number
    ) {}

    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}

let s1 = new Student(118, "Joyce", 98);

s1.display();