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

test("if three names in list returns string notifying user of likes correctly", () => {
  expect(process.likes(["james", "andy", "tasha"])).toBe(
    "james, andy and tasha like this"
  );
});

test("if four names in list returns string notifying user of likes correctly", () => {
  expect(process.likes(["james", "andy", "tasha", "hope"])).toBe(
    "james, andy and 2 others like this"
  );
});

test("if five names in list returns string notifying user of likes correctly", () => {
  expect(process.likes(["james", "andy", "tasha", "hope", "john"])).toBe(
    "james, andy and 3 others like this"
  );
});
