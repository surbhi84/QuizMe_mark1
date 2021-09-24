var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

function name() {
  var userName = readlineSync.question(chalk.blue("Please enter your name.."));
  return userName;
}

console.log(chalk.yellow.bold("Welcome to a MINI QUIZ about ME!"));

var a = name();

while (a === "") {
  console.log(chalk.red("you must enter your name !"));
  var a = name();
  if (a === "") {
    continue;
  } else {
    break;
  }
}

console.log(
  chalk.yellow.bold("\nHello " + a + "! here are the rules of the quiz.") +
    chalk.magenta.italic(
      "\n1. You get 3 points for each right answer.\n2. You lose 2 points for each wrong answer.\n3. You can only play until your score is above negative 10.\n4. Only enter a b or c in mcq's."
    )
);
