const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");

class TeamProfile {
  team = [];
  getManager() {
    return inquirer.prompt([
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
    ]);
  }
}

module.exports = TeamProfile;
