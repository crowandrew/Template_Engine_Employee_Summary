function Question(type, name, message, choices,inputDefault,when) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
    this.default = inputDefault;
    this.when = when;
};




const questions = [];

module.exports = { questions: questions };
