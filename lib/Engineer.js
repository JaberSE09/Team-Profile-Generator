const Employee = require("./Employee");

class Engineer extends Employee{
  constructor(name, id, email, GitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.GitHub = GitHub;
  }

  getGitHub() {
    return this.GitHub;
  }

  getRole(){
      return "Engineer"
  }
}

module.exports = Engineer;
