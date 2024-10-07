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

// Task 2: Create a Department Class
class Department {
    constructor(name) {
        this.name = name ;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees = [];
    }

    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
}