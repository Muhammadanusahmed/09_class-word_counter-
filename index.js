#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { name: "sentence",
        type: "input",
        message: "enter your sentence to count your word"
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`your sentence words count is ${word.length}`);
