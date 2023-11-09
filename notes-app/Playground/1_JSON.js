const fs = require("fs");

const dataBuffer = fs.readFileSync("./1_JSON.json");
const dataString = dataBuffer.toString();

const dataJSON = JSON.parse(dataString);
dataJSON.name = "Anindita";
dataJSON.age = 24;

fs.writeFileSync("1_JSON.json", JSON.stringify(dataJSON));

console.log(dataJSON);
