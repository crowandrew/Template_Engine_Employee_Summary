// Required Packages
const fs = require("fs");

// Function that writes html file saves it to output path
const buildHtmlFile = (html, outputPath) => {
    fs.writeFile(outputPath, html, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Created team.html, success!");
        }
    })
}

module.exports = { buildHtmlFile: buildHtmlFile }