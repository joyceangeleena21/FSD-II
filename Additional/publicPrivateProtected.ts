class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
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

let emp = new Employee("Joyce", 50000, "HR");

emp.display();