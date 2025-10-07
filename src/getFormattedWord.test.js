const { getFormattedWord } = require("./getFormattedWord.js");

test("capitalizes the first letter of a word", () => {
  expect(getFormattedWord("hello")).toBe("Hello");
});

const { addString } = require("./getFormattedWord.js");

test("add string to existing string", () => {
  expect(addString("hello")).toBe("hellohello");
});

const { reverseString } = require("./getFormattedWord.js");

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

const { getMax } = require("./getFormattedWord.js");

test("returns max value in array", () => {
  expect(getMax([1, 2, 3])).toBe(3);
});

const { getActualAge } = require("./getFormattedWord.js");

test("calculate age by birthyear", () => {
  expect(getActualAge(1992)).toBe(33);
});

const { findItem } = require("./getFormattedWord.js");

test("find value in array", () => {
  expect(findItem([2, 4, 6], 2)).toBe(true);
  expect(findItem([1, 2, 4], 3)).toBe(false);
});
