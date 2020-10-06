const validate = require("./validate")

function Question(type, name, message, choices,inputDefault,when) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
    this.default = inputDefault;
    // this.validate = validate;
    this.when = when;
};

const employeeChoices = ["Manager","Engineer","Intern"]


const nameQ = new Question("input", "name", "Employee name","","Employee Name","");
const roleQ = new Question("list", "role", "Please choose your employee role.",employeeChoices,"","");
const idQ = new Question("input", "id", "Employee Id","","Employee ID","");
const emailQ = new Question("input", "email", "Employee email","","Email ID","");
const officeQ = new Question("input", "office", "Please enter manager's office number", (userInput) => userInput.role === 'Manager');
const qitHubQ = new Question("input", "gitHub", "Please enter engineer's GitHub username.", "",(userInput) => userInput.role === 'Engineer');
const schoolQ = new Question("input", "school", "Please enter intern's school", "", (userInput) => userInput.role === 'Intern');
const newEmpQ = new Question("input", "newEmployee", "Would you like to add another employee?", "", "");

const questions = [nameQ, roleQ, idQ, emailQ, officeQ, qitHubQ, schoolQ, newEmpQ ];

module.exports = { questions: questions };
