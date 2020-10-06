// // Required Packages
const path = require("path");
const fs = require("fs");

// Required paths
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Required file imports
const render = require("./lib/htmlRenderer");
const employeeList = require("./lib/generateEmployeeList");
const { checkForOutputDir } = require("./lib/checkForOutputDir");
const { buildHtmlFile} = require("./lib/buildHtmlFile");

// Function to initialize program
async function init() {
    await employeeList.generateEmployeeList();
    const html = await render(employeeList.employees);
    await checkForOutputDir(OUTPUT_DIR);
    buildHtmlFile(html,outputPath);
}

// function call to initialize program
init()

// const buildHtmlFile = (html) => {
//     fs.writeFile(outputPath,html, err => {
//         if (err) {
//             console.log(err);
//         } else{
//             console.log("Created team.html, success!");
//         }
//     })
// }


// const checkForOutputDir = () => {
//     fs.access(OUTPUT_DIR, err => {
//         if (err){
//             console.log("Directory does not exist. Making a new directory.");
//             makeOutputDir();
//             return;
//         } else {
//             console.log("Directory found.");
//             return;
//         }
//     })
// }

// const makeOutputDir = () => {
//     fs.mkdir(OUTPUT_DIR, err => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Successfully created new directory.");
//         }
//     })
// }