const process = require("./likes");

test("if no names in list returns string notifying user of this", () => {
  expect(process.likes([])).toBe("no one likes this");
});

test("if one name in list returns string notifying user of likes", () => {
  expect(process.likes(["james"])).toBe("james likes this");
});

test("if two names in list returns string notifying user of likes correctly", () => {
  expect(process.likes(["james", "andy"])).toBe("james and andy like this");
});
