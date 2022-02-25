// require inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");

// require lib functions
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

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
  inquirer
    .prompt([
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
    ])
    .then((answer) => {
      if (answer.role === "engineer") {
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.github
        );
        employees.push(engineer);
        console.log(employees);
      } else if (answer.role === "intern") {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.github
        );
        employees.push(intern);
        console.log(employees);
      }
    });
}
// do you want to add more employees? if yes, createemployee()

function init() {
  createManager();
}

//   call init function
init();
