const Employee = require("./Employee");
//Manager which takes in Employee and office number
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
//Getter Function
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
