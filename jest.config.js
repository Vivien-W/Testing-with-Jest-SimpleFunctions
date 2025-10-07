export default {
  testEnvironment: "jest-environment-jsdom",

  // Transform-Regeln: wir brauchen Babel nur, wenn du JSX oder moderne Features nutzt
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // Welche Dateien Jest als Tests erkennt
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],

  // Modul-Dateiendungen
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
