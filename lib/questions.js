class Question {
    constructor(type, name, message,validate) {
        this.type = type;
        this.name = name;
        this.message = message;
        this.validate = validate;
    }
}

class ListQuestion extends Question {
    constructor(type, name, message, choices) {
        super(type, name, message);
        this.choices = choices;
    }
}

class ConditionalQuestion extends Question {
    constructor(type, name, message, when) {
        super(type, name, message);
        this.when = when;
    }
}

// New array of employee roles
const employeeChoices = ["Manager", "Engineer", "Intern"]

// Individual questions that can be asked
const nameQ = new Question("input", "name", "Employee name",userInput => {let reqName = /^[a-zA-Z]+ [a-zA-Z]+$/; if(userInput==="" || !reqName.test(userInput)){ return 'Please enter a valid first and last name'} return true});
const roleQ = new ListQuestion("list", "role", "Please choose your employee role.", employeeChoices);
const idQ = new Question("input", "id", "Employee Id");
const emailQ = new Question("input", "email", "Employee email");
const officeQ = new ConditionalQuestion("input", "office", "Please enter manager's office number", userInput => userInput.role === 'Manager');
const qitHubQ = new ConditionalQuestion("input", "github", "Please enter engineer's GitHub username.", userInput => userInput.role === 'Engineer');
const schoolQ = new ConditionalQuestion("input", "school", "Please enter intern's school", userInput => userInput.role === 'Intern');
const newEmpQ = new Question("confirm", "newEmployee", "Would you like to add another employee?");

// New array of questions
const questions = [nameQ, roleQ, idQ, emailQ, officeQ, qitHubQ, schoolQ, newEmpQ];

// Exporting questions array
module.exports = { questions: questions };


// (userInput) => {if(userInput===""){return 'This field cannot be blank'} return true}


// Constructor to build questions
// function Question(type, name, message, choices,inputDefault,when,questionValidate) {
//     this.type = type;
//     this.name = name;
//     this.message = message;
//     this.choices = choices;
//     this.default = inputDefault;
//     this.validate = questionValidate;
//     this.when = when;
// };