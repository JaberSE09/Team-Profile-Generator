const Employee = require("../lib/Employee");





test("Creates a Employee", () => {
  const newEmployee = new Employee("Bob Smith", 1, "bobsmith@yahoo.com");
  expect(newEmployee.name).toBe("Bob Smith");
  expect(newEmployee.id).toBe(1);
  expect(newEmployee.email).toBe("bobsmith@yahoo.com");
});


