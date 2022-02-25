// require inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");

// require lib functions
const Manager = require("./lib/Manager");

const employees = [];

// ask inquirer questions for manager
function createManager() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter manager's name",
      },

      {
        name: "id",
        type: "input",
        message: "Enter manager's ID #",
      },

      {
        name: "email",
        type: "input",
        message: "Enter manager's email address",
      },

      {
        name: "officeNumber",
        type: "input",
        message: "Enter manager's office number",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      employees.push(manager);
      console.log(employees);
    });
  // call function createEmployee
}

// add function createEmployee, with new inquirer request

// do you want to add more employees?
// do you want to add an engineer or an intern
// add inquirer prompts for engineers and interns

function init() {
  createManager();
}

//   call init function
init();
