const config = {
    parser: "@typescript-eslint/parser",
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};

module.exports = config;
