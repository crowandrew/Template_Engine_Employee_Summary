// This class builds an Employee object
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() { return this.name };
    getId() { return this.id };
    getEmail() { return this.email };
    getRole() { return "Employee" };
};

// Exports the employee class
module.exports = Employee;