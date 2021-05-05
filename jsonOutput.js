const fs = require('fs');
const {data,fileName} = require("./studentData");

function jsonOutput(data, fileName) {
    fs.writeFile(fileName,JSON.stringify(data,null,"\t"), e => e ? console.log(`error writing to file ${fileName}`) : console.log(`successfully wrote to file ${fileName}`));
}

jsonOutput(data,fileName);