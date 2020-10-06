// Required Packages
const inquirer = require("inquirer");

// Required file imports
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { questions } = require("./questions");

// New employee array
const employees = [];

//Function to create employees array
async function generateEmployeeList() {
    while (true) {
        const answers = await inquirer.prompt(questions);
        await processList(answers);
        if (answers.newEmployee === false) {
            console.log("Great! You have finished entering all your employees");
            break;
        };
    };
};

// Function to add user input into employees array
const processList = (answers) => {
    switch (answers.role) {
        case "Manager": {
            employees.push(
                new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.office
                )
            );
            break;
        }
        case "Engineer": {
            employees.push(
                new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                )
            );
            break;
        }
        case "Intern": {
            employees.push(
                new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school
                )
            );
            break;
        }
    };
};

// Exporting employees array and function to generate array
module.exports = { employees:employees, generateEmployeeList: generateEmployeeList};