// Required file import
const Employee = require("./Employee");

// This class inherits from Employee and builds an Engineer object
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() { return this.github };
    getRole() { return "Engineer" };
};

// Exports engineer class
module.exports = Engineer;