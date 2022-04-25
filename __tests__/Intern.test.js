const Intern = require("../lib/Intern");

test("Creating a Intern", () => {
  const newIntern = new Intern("Julie Smith", 3, "julie@gmail.com", "uwm");

  expect(newIntern.name).toBe("Julie Smith");
  expect(newIntern.id).toBe(3);
  expect(newIntern.email).toBe("julie@gmail.com");
  expect(newIntern.school).toBe("uwm");
});
