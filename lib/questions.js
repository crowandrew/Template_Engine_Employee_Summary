// Class to build general object questions
class Question {
    constructor(type, name, message, validate) {
        this.type = type;
        this.name = name;
        this.message = message;
        this.validate = validate;
    };
};

// Extended class from questions to build list questions
class ListQuestion extends Question {
    constructor(type, name, message, choices) {
        super(type, name, message);
        this.choices = choices;
    };
};

// Extended class from questions to build conditional questions
class ConditionalQuestion extends Question {
    constructor(type, name, message, when, validate) {
        super(type, name, message, validate);
        this.when = when;
    };
};

// New array of employee roles
const employeeChoices = ["Manager", "Engineer", "Intern"];

// Individual questions that can be asked
const nameQ = new Question("input", "name", "Employee name",
    userInput => {
        if (userInput === "" || !/^[a-zA-Z]+ [a-zA-Z]+$/.test(userInput)) {
            return 'Please enter a valid first and last name'
        };
        return true;
    });
const roleQ = new ListQuestion("list", "role", "Please choose your employee role.", employeeChoices);
const idQ = new Question("input", "id", "Employee Id",
    userInput => {
        if (userInput === "" || isNaN(userInput) || userInput.length < 5) {
            return 'Please enter a valid 5 digit Employee Id'
        };
        return true;
    });
const emailQ = new Question("input", "email", "Employee email",
    userInput => {
        if (userInput === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput)) {
            return 'Please enter a valid email address'
        };
        return true;
    });
const officeQ = new ConditionalQuestion("input", "office", "Please enter manager's office number",
    userInput => userInput.role === 'Manager',
    userInput => {
        if (userInput === "" || isNaN(userInput) || userInput.length < 3) {
            return 'Please enter valid 3 digit office number'
        };
        return true;
    });
const qitHubQ = new ConditionalQuestion("input", "github", "Please enter engineer's GitHub username.",
    userInput => userInput.role === 'Engineer',
    userInput => {
        if (userInput === "") {
            return 'Please enter a GitHub username'
        };
        return true;
    });
const schoolQ = new ConditionalQuestion("input", "school", "Please enter intern's school",
    userInput => userInput.role === 'Intern',
    userInput => {
        if (userInput === "" || !/^[a-zA-Z]/.test(userInput)) {
            return 'Please enter a university'
        };
        return true;
    });
const newEmpQ = new Question("confirm", "newEmployee", "Would you like to add another employee?");

// New array of questions
const questions = [nameQ, roleQ, idQ, emailQ, officeQ, qitHubQ, schoolQ, newEmpQ];

// Exporting questions array
module.exports = { questions: questions };
