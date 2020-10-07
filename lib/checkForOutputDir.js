// Required Packages
const fs = require("fs");
const { buildHtmlFile } = require("./buildHtmlFile");

// Function to check to see if we have an output dir if not call function to create it and build html file
const checkForOutputDir = (OUTPUT_DIR,html,outputPath) => {
    fs.access(OUTPUT_DIR, err => {
        if (err){
            console.log("Directory does not exist. Making a new directory.");
            makeOutputDir(OUTPUT_DIR);
            buildHtmlFile(html, outputPath);
        } else {
            console.log("Directory found.");
            buildHtmlFile(html, outputPath);
        };
    });
    
};

// Function to create output directory
const makeOutputDir = (OUTPUT_DIR) => {
    fs.mkdir(OUTPUT_DIR, err => {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfully created new directory.");
        };
    });
};

// Exporting check output dir
module.exports= { checkForOutputDir: checkForOutputDir} 