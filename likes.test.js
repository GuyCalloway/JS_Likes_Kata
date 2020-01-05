const process = require("./likes");

test("if no names in list returns string notifying user of this", () => {
  expect(process.likes([])).toBe("no one likes this");
});