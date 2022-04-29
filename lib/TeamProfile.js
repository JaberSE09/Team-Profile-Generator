const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");

class TeamProfile {
  team = [];
  getManager() {
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

  Employee() {

    console.log("\nAdd Employees\n");
    inquirer.prompt([
      {
        type: 'checkbox',
        name: 'role',
        message: 'Choose a Role?',
        choices: [
          'Engineer','Intern'
        ],
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
    ]);
  }
}

module.exports = TeamProfile;
