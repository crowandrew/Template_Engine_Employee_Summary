// Required Packages
const fs = require("fs");

// Function to check to see if we have an output dir if not call function to create it
const checkForOutputDir = (OUTPUT_DIR) => {
    fs.access(OUTPUT_DIR, err => {
        if (err){
            console.log("Directory does not exist. Making a new directory.");
            makeOutputDir(OUTPUT_DIR);
        } else {
            console.log("Directory found.");
            return;
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