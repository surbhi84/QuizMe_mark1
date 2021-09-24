var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

function name() {
  var userName = readlineSync.question(chalk.blue("Please enter your name.."));
  return userName;
}

console.log(chalk.yellow.bold("Welcome to a MINI QUIZ about ME!"));
