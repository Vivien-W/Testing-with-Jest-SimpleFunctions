const { getFormattedWord } = require("./getFormattedWord.js");

test("capitalizes the first letter of a word", () => {
  expect(getFormattedWord("hello")).toBe("Hello");
});

const { addString } = require("./getFormattedWord.js");

test("add string to existing string", () => {
  expect(addString("hello")).toBe("hellohello");
});
