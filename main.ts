#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
//WELCOME MESSAGE
console.log(chalk.bgBlueBright.bold.italic("\n \t Welcome to Currency Converter\n"));
    
//define the list of currencies and thier exchange rates
let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "GBP": 0.8,
    "JPY": 110,
    "CAD": 1.3,
    "AUD": 1.2,
    "PKR": 278.32
}
//promt the user to select currenies to convert rate here
let user_answer = await inquirer.prompt([
    {
        type: "list",
        name: "from_currency",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        type: "list",
        name: "to_currency",
        message: "Select the currency to convert to:",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount to convert:"
    }
])
//perform currency conversion to using formula
let from_amount = exchange_rate[user_answer.from_currency]
let to_amount = exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

//formula of convertion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display the converted amount
console.log(`The converted amount is ${(chalk.bgGreen.bold.italic(converted_amount.toFixed(2)))}`);

   

