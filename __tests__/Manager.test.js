const Manager = require("../lib/Manager");

test("Creating a Manager", () => {
  const newManager = new Manager("John Doe", 6, "john@gmail.com", 101);

  expect(newManager.name).toBe("John Doe");
  expect(newManager.id).toBe(6);
  expect(newManager.email).toBe("john@gmail.com");
  expect(newManager.officeNumber).toBe(101);
});
