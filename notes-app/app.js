const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const addNewNote = require("./notes.js");

console.log(addNewNote());
console.log(validator.isEmail("andrew@gmail.com"));
console.log(chalk.green.inverse.bold("Success!"));

const command = process.argv[2];
if (command === "add") console.log("New note added");
else if (command === "remove") console.log(" Note removed");

//Adding commands
yargs.command({
  command: "add",
  description: "Add a new note",
  handler: function () {
    console.log("Adding a new note by handler");
  },
});

yargs.command({
  command: "remove",
  description: "Remove a new note",
  handler: function () {
    console.log("Removing a new note by handler");
  },
});

yargs.command({
  command: "List",
  description: "Listing note",
  handler: function () {
    console.log("Listing a new note by handler");
  },
});

console.log(yargs.argv);
