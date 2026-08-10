interface HasName {
    name: string;
}

function printName<T extends HasName>(item: T): void {
    console.log(`Name: ${item.name}`);
}

printName({
    name: "Joyce",
    age: 19
});

printName({
    name: "Pallavi",
    department: "CSE"
});