const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const writeFile = require("../src/WriteFile");
const writeFileHTML = require("../src/WriteFileHTML");

//Runs the Application
class TeamProfile {
  //Team members
  team = [];

  //Gets user input to add the manager , Engineers and Interns
  getTeam() {
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
        this.getEmployee()
      })
  }

  //Employee user input 
  getEmployee() {
    console.log("\nAdd Employees");
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
        } else if (role === "Engineer") {
          employee = new Engineer(name, id, email, github);
          console.log("Engineer Added!");
        }
        //Checks to see confirm is yes or no and returns the Employee function or the written file
        this.team.push(employee);
        if (confirm) {
          return this.getEmployee();
        } else if (!confirm) {
        //creates  write html file and writes to index
          const TeamHTML = new writeFileHTML()
          writeFile(TeamHTML.getProfile(this.team))
        };
      })
  }
}

module.exports = TeamProfile;
