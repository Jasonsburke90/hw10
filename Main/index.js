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
      createEmployee();
    });
}

// add function createEmployee, with new inquirer request
function createEmployee() {
  inquirer.prompt([
    {
      name: "role",
      type: "list",
      choices: ["engineer", "intern"],
      message: "select employee's role",
    },

    {
      name: "name",
      type: "input",
      message: "Enter employee's name",
    },

    {
      name: "id",
      type: "input",
      message: "Enter manager's ID #",
    },

    {
      name: "email",
      type: "input",
      message: "Enter employee's email address",
    },

    {
      name: "github",
      type: "input",
      when: (answers) => answers.role === "engineer",
      message: "Enter engineers's github profile name",
    },

    {
      name: "school",
      type: "input",
      when: (answers) => answers.role === "intern",
      message: "Enter intern's school's name",
    },
  ]);
  // set up this based on whether eng or intern is selected
  // .then((answer) => {
  //   const manager = new Manager(
  //     answer.name,
  //     answer.id,
  //     answer.email,
  //     answer.officeNumber
  //   );
  //   //  set up employees push to engineer OR intern based on response above
  //   console.log(employees);
  // });
}
// do you want to add more employees?
// do you want to add an engineer or an intern
// add inquirer prompts for engineers and interns

function init() {
  createManager();
}

//   call init function
init();
