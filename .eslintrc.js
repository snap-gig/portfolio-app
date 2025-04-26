module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier"
    ],
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    settings: { react: { version: "detect" } },
    env: { node: true, browser: true, es2021: true },
    rules: {}
  };