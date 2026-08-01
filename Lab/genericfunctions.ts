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