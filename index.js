var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

var qarray = [
  (q1 = {
    ques: "What is my full name?",
    ans: "surbhi kukreti",
  }),
  (q2 = {
    ques: "What do i like most?\n a) cooking\n b) food\n c) yoga",
    ans: "b",
  }),
  (q3 = {
    ques: "Which is my birth year?\n a) 1998\n b) 1999\n c) 2000",
    ans: "b",
  }),
  (q4 = {
    ques: "What was my class 10 cgpa?\n a) 8.5-9\n b) 7-7.5\n c) 8-8.5",
    ans: "c",
  }),
  (q5 = {
    ques: "what is my favourite color?\n a) pink\n b) black\n c) blue",
    ans: "b",
  }),
];

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

function play(q, a) {
  var userAnswer = readlineSync.question(chalk.cyan.bold("\n" + q));

  if (userAnswer.toLowerCase() === a.toLowerCase()) {
    console.log(chalk.blue("Right answer! You get 3 points."));
    score = score + 3;
  } else {
    console.log(chalk.red("Wrong answer! You lose 2 points."));
    score = score - 2;
  }
  console.log(chalk.yellow.italic.bold("your score:" + score));
}
