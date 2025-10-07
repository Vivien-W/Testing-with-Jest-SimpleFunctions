function getFormattedWord(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function addString(str) {
  if (!str) return "";
  return str + str;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function getMax(arr) {
  return Math.max(...arr);
}

function getActualAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function findItem(arr, value) {
  return arr.includes(value);
}

module.exports = {
  getFormattedWord,
  addString,
  reverseString,
  getMax,
  getActualAge,
  findItem,
};
