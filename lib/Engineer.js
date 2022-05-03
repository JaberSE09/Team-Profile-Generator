
const Employee = require("./Employee");
//Engineer which takes in employee and GitHub link
class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }

  //Getter Functions
  getGitHub() {
    return this.GitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
