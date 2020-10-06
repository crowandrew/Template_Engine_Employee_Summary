// Required file import
const Employee = require("./Employee");

// This class inherits from Employee and builds an Intern object
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() { return this.school };
    getRole() { return "Intern" };
};

// Exports manager class
module.exports = Intern;