// function call to initialize program
const validate = require("./validate")

// Constructor to build questions
function Question(type, name, message, choices,inputDefault,when) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
    this.default = inputDefault;
    // this.validate = validate;
    this.when = when;
};

// New array of employee roles
const employeeChoices = ["Manager","Engineer","Intern"]

// Individual questions that can be asked
const nameQ = new Question("input", "name", "Employee name","","Employee Name");
const roleQ = new Question("list", "role", "Please choose your employee role.",employeeChoices);
const idQ = new Question("input", "id", "Employee Id","","Employee ID");
const emailQ = new Question("input", "email", "Employee email","","Email ID");
const officeQ = new Question("input", "office", "Please enter manager's office number","","", (userInput) => userInput.role === 'Manager');
const qitHubQ = new Question("input", "gitHub", "Please enter engineer's GitHub username.", "","",(userInput) => userInput.role === 'Engineer');
const schoolQ = new Question("input", "school", "Please enter intern's school", "","", (userInput) => userInput.role === 'Intern');
const newEmpQ = new Question("confirm", "newEmployee", "Would you like to add another employee?");

// New array of questions
const questions = [nameQ, roleQ, idQ, emailQ, officeQ, qitHubQ, schoolQ, newEmpQ ];

// Exporting questions array
module.exports = { questions: questions };
