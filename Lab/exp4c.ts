class dataStorage<T> {
    private item: T;

    constructor(value: T) {
        this.item = value;
    }

    public getItem(): T {
        console.log("Retrieving item...");
        return this.item;
    }

    public updateItem(newValue: T): void {
        this.item = newValue;
        console.log("Item updated successfully.");
    }
}

const marks = new dataStorage<number>(95);
console.log(`Student Marks: ${marks.getItem()}`);

const course = new dataStorage<string>("TypeScript");
console.log(`Course Name: ${course.getItem()}`);

interface Laptop {
    brand: string;
    ram: number;
}

const laptop = new dataStorage<Laptop>({
    brand: "Dell",
    ram: 16
});

const myLaptop = laptop.getItem();
console.log(`Laptop Brand: ${myLaptop.brand}`);
console.log(`RAM: ${myLaptop.ram} GB`);

function firstElement<T>(items: T[]): T {
    return items[0];
}

function packItem<T>(item: T): { product: T; packedOn: Date } {
    return {
        product: item,
        packedOn: new Date()
    };
}

const subjects = ["Math", "Physics", "Chemistry"];
console.log(`First Subject: ${firstElement(subjects)}`);

const rollNumbers = [101, 102, 103];
console.log(`First Roll Number: ${firstElement(rollNumbers)}`);

interface Student {
    name: string;
    year: number;
}

const student: Student = {
    name: "Mahi",
    year: 3
};

const packedStudent = packItem(student);
console.log(`Packed Student: ${packedStudent.product.name}`);
console.log(`Packed On: ${packedStudent.packedOn}`);

interface HasName {
    name: string;
}

function printName<T extends HasName>(item: T): void {
    console.log(`Name: ${item.name}`);
}

printName({
    name: "Joyce",
    age: 20
});

printName({
    name: "Pallavi",
    department: "CSE"
});