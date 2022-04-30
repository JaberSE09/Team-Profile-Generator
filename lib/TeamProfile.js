const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const writeFile = require("../src/WriteFile");
const writeFileHTML = require("../src/WriteFileHTML");
class TeamProfile {
  team = [];

  getManager() {
    console.log("Add Manager");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Manager Name:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("\nName is Required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Manager Employee ID:",
          validate: (idInput) => {
            if (!isNaN(idInput) && idInput) {
              return true;
            } else {
              console.log("\nYou need put in a number!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Manager Email:",
          validate: (emailInput) => {
            if (emailInput) {
              const filter =
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              if (!filter.test(emailInput)) {
                console.log("\nPlease Do Email Format!");
                return false;
              }
              return true;
            } else {
              console.log("\nYou need put in a email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "office",
          message: "Manager Office Number:",
          validate: (idInput) => {
            if (!isNaN(idInput) && idInput) {
              return true;
            } else {
              console.log("\nYou need put in a number!");
              return false;
            }
          },
        },
      ])
      .then((managerI) => {
        const { name, id, email, office } = managerI;
        const manager = new Manager(name, id, email, office);
        this.team.push(manager);
        console.log("Manager Added");
      });
  }

  getEmployee() {
    console.log("\nAdd Employees\n");
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Choose a Role?",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "Employee Name:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("\nName is Required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Employee Employee ID:",
          validate: (idInput) => {
            if (!isNaN(idInput) && idInput) {
              return true;
            } else {
              console.log("\nYou need put in a number!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Employee Email:",
          validate: (emailInput) => {
            if (emailInput) {
              const filter =
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              if (!filter.test(emailInput)) {
                console.log("\nPlease Do Email Format!");
                return false;
              }
              return true;
            } else {
              console.log("\nYou need put in a email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "Employee's github username:",
          when: (input) => input.role === "Engineer",
          validate: (gitInput) => {
            if (gitInput) {
              return true;
            } else {
              console.log("Please enter the employee's github username!");
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "Please enter the intern's school",
          when: (input) => input.role === "Intern",
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please enter the school!");
            }
          },
        },
        {
          type: "confirm",
          name: "confirm",
          message: "Would you like to add more team members?",
          default: false,
        },
      ])
      .then((data) => {
        const { role, name, id, email, github, school, confirm } = data;
        let employee;

        if (role === "Intern") {
          employee = new Intern(name, id, email, school);
          console.log("Intern Added");
        } else if (role === "Engineer!") {
          employee = new Engineer(name, id, email, github);
          console.log("Engineer Added!");
        }
        this.team.push(employee);

        if (confirm) {
          return this.getEmployee();
        } else if (!confirm) return this.team;
      });
  }

  getInput() {
    this.getManager()
      .then(this.getEmployee).catch(err => console.log(err));
    // .then(writeFileHTML(this.team))
    //.then((page) => writeFile(page));
  }
}

module.exports = TeamProfile;