module.exports = {
  src: "./test/testcafe/fixtures/runSmokeTests.js",
  browsers: [
    "browserstack:chrome:Windows 10",
    "browserstack:firefox:Windows 10",
    "browserstack:safari",
    "browserstack:Samsung Galaxy S21",
  ],
  selectorTimeout: 15000,
  pageLoadTimeout: 10000,
  assertionTimeout: 15000,
};
