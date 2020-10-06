// // Required Packages
const path = require("path");
const fs = require("fs");

// Required paths
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Required file imports
const render = require("./lib/htmlRenderer");
const employeeList = require("./lib/generateEmployeeList");
const { checkForOutputDir } = require("./utils/checkForOutputDir");
const { buildHtmlFile } = require("./utils/buildHtmlFile");

// Function to initialize program
async function init() {
    await employeeList.generateEmployeeList();
    const html = await render(employeeList.employees);
    await checkForOutputDir(OUTPUT_DIR);
    buildHtmlFile(html, outputPath);
}

// function call to initialize program
init()

