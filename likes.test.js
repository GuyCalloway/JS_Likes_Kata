const process = require("./likes");

test("if no names in list returns string notifying user of this", () => {
  expect(process.likes([])).toBe("no one likes this");
});

test("if one name in list returns string notifying user of who likes", () => {
  expect(process.likes(["james"])).toBe("james likes this");
});
