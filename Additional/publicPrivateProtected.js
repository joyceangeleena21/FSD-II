"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
let emp = new Employee("Alice", 50000, "HR");
emp.display();
