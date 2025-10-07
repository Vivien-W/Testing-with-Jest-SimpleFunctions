const {
  getFormattedWord,
  addString,
  reverseString,
  getMax,
  getActualAge,
  findItem,
} = require("./getFormattedWord.js");

describe("Utility functions", () => {
  describe("getFormattedWord()", () => {
    test("capitalizes the first letter of a word", () => {
      expect(getFormattedWord("hello")).toBe("Hello");
    });
  });

  describe("addString()", () => {
    test("adds string to existing string", () => {
      expect(addString("hello")).toBe("hellohello");
    });
  });

  describe("reverseString()", () => {
    test("reverses a string", () => {
      expect(reverseString("hello")).toBe("olleh");
    });
  });

  describe("getMax()", () => {
    test("returns max value in array", () => {
      expect(getMax([1, 2, 3])).toBe(3);
    });
  });

  describe("getActualAge()", () => {
    test("calculates age by birthyear", () => {
      expect(getActualAge(1992)).toBe(33);
    });
  });

  describe("findItem()", () => {
    test("finds value in array", () => {
      expect(findItem([2, 4, 6], 2)).toBe(true);
      expect(findItem([1, 2, 4], 3)).toBe(false);
    });
  });
});
