function getFormattedWord(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function addString(str) {
  if (!str) return "";
  return str + str;
}

module.exports = { getFormattedWord, addString };
