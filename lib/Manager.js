// Required file import
const Employee = require("./Employee");

// This class inherits from Employee and builds an Manager object
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getOfficeNumber() { return this.officeNumber };
    getRole() { return "Manager" };
};

// Exports manager class
module.exports = Manager;