#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";

const randomNumber=Math.floor(Math.random() * 10  + 1 );
const answers= await inquirer.prompt([{
    name: "userGuessNumber",
    type: "number",
    message: chalk.bgCyanBright("Please Guess a Number between 1 to 10: ")
}
]);
if (answers.userGuessNumber===randomNumber)
{
console.log('Congratulations you guess the right Number');
}
else
{
console.log(`You Guess the Wrong Number.The Rights Number is ${randomNumber}`);
}