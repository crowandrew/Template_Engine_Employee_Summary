const validate = require("./validate")

function Question(type, name, message, choices,inputDefault,when) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
    this.default = inputDefault;
    this.validate = validate;
    this.when = when;
};


const titleQ = new Question("input", "name", "Employee name", "");

const questions = [];

module.exports = { questions: questions };
