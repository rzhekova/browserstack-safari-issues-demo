module.exports = {
  extends: ["plugin:testcafe/recommended"],
  ignorePatterns: ["**/test/**/*.js"],
  overrides: [
    {
      files: ["test/testcafe/fixtures/*.js"],
      rules: {
        "jest/expect-expect": "off",
      },
    },
  ],
};
