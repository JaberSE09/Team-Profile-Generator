const Engineer = require("../lib/Engineer");

test("Creating a Engineer", () => {
  const newEngineer = new Engineer(
    "Carlos Jones",
    2,
    "carlos@gmail.com",
    "carlos123"
  );
  expect(newEngineer.name).toBe("Carlos Jones");
  expect(newEngineer.id).toBe(2);
  expect(newEngineer.email).toBe("carlos@gmail.com");
  expect(newEngineer.GitHub).toBe("carlos123");
});
