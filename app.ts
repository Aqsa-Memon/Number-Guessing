#! /usr/bin/env node

import inquirer from "inquirer";

const ramdom_Number: number = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt({
  name: "guessedNumber",
  type: "number",
  message: "guess a number between 1-5: ",
});

if (answer.guessedNumber === ramdom_Number) {
  console.log("\ncongratulation! you guessed correctly!\n");
} else {
  console.log("\nYou guessed wrong number\n ");
}
