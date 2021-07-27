const reverse = require("./reverse");

test("reverse string to exist", () => {
  expect(reverse).toBeDefined();
});

test("reverse string to reverse", () => {
  expect(reverse("hello")).toBe("olleh");
});

