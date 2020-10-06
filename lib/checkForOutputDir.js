const fs = require("fs");

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

const makeOutputDir = (OUTPUT_DIR) => {
    fs.mkdir(OUTPUT_DIR, err => {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfully created new directory.");
        };
    });
};

module.exports= { checkForOutputDir: checkForOutputDir} 