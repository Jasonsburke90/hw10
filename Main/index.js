// require inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");

// require lib functions
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const employees = [];
var cardHTML = "";

// function to add a manager
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

// function to add as many engineers and employees as you need
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
        message: "Enter employee's ID #",
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
        message: "Enter intern's school name",
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
        addEmployee();
      } else if (answer.role === "intern") {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );
        employees.push(intern);
        console.log(employees);
        addEmployee();
      }
    });
}
// prompt user if they would like to add additional employees
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "finished",
        type: "list",
        choices: [
          "I would like to add an additional employee",
          "I am finished adding employees",
        ],
        message: "Would you like to add additional employees",
      },
    ])
    .then((answer) => {
      if (answer.finished === "I would like to add an additional employee") {
        createEmployee();
      } else {
        // push to HTML
        generateHTML();
        const generateHTMLDoc = generateHTML();
        fs.writeFile("index.html", generateHTMLDoc, process.argv[2], (err) =>
          err
            ? console.error(err)
            : console.log(
                "You have built your team!  Open index.html to see the results"
              )
        );
      }
    });
}

// TODO GENERATE HTML FUNCTION ADD CARDS FOR EACH EMPLOYEE IN ARRAY
function generateCards() {
  let card = "";
  employees.forEach((employee) => {
    card += `<div class="card">
    <h2>${employee.getRole()}</h2>
    <p>Name: ${employee.name}</p>
    <p>ID Number: ${employee.id}</p>
    <p>Email: ${employee.email}</p>
    </div>`;
    // add if statements for manager office, engineer github, intern school
  });
  return card;
}

function generateHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
<h1>Our team</h1> 
${generateCards()}
</body>
</html>`;
  // loop through employees array to generate divs for cards and write to the html file

  // fs function write to file
}
// TODO - add roles to the function so that role is defined and can show up on the card

function init() {
  createManager();
}

//   call init function
init();
