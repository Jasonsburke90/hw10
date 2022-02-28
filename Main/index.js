// require inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");

// require lib functions
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const employees = [];

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
        addEmployee();
      } else if (answer.role === "intern") {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );
        employees.push(intern);

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

// Generate Cards Function
function generateCards() {
  let card = "";
  employees.forEach((employee) => {
    card += `<div class="card">
    <h2>${employee.getRole()}</h2>
    <p>Name: ${employee.name}</p>
    <p>ID Number: ${employee.id}</p>
    <p>Email: <a href="mailto: ${employee.email}"> ${employee.email}</a></p>`;
    if (employee.getRole() === "Manager") {
      card += `<p>Office Number: ${employee.officeNumber}</p></div>`;
    }
    if (employee.getRole() === "Engineer") {
      card += `<p>Github: <a href="${employee.github}"> ${employee.github}</a></p></div>`;
    }
    if (employee.getRole() === "Intern") {
      card += `<p>School: ${employee.school}</p></div>`;
    }
  });
  return card;
}
// Generate HTML function
function generateHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
</head>
<body>
<main>
        <h1 class="header">Our team</h1>
        <section class="team-box">
        ${generateCards()}
        </section>
    </main>
</body>
</html>`;
}

// init function
function init() {
  createManager();
}

//   call init function
init();
