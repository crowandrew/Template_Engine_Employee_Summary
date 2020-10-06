const fs = require("fs");

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