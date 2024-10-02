// Task 1: Create an employee class with employee information like name, salary, position, and department.
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
    }
}

