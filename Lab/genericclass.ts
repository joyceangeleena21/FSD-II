class storage<T> {
    private item: T;

    constructor(value: T) {
        this.item = value;
    }

    getItem(): T {
        console.log("Retrieving item...");
        return this.item;
    }

    updateItem(newValue: T): void {
        this.item = newValue;
        console.log("Item updated successfully.");
    }
}

const marks = new storage<number>(95);
console.log(`Student Marks: ${marks.getItem()}`);

const course = new storage<string>("TypeScript");
console.log(`Course Name: ${course.getItem()}`);

interface Laptop {
    brand: string;
    ram: number;
}

const laptop = new storage<Laptop>({
    brand: "Dell",
    ram: 16
});

const myLaptop = laptop.getItem();
console.log(`Laptop Brand: ${myLaptop.brand}`);
console.log(`RAM: ${myLaptop.ram} GB`);