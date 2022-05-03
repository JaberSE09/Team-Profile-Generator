
//Employee Basic format for the other classes
class Employee {
  
  
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

//Getter functions 

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
