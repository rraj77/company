
const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));
module.exports = {
	
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		"plugin:react/recommended",
		"standard-with-typescript",
		"eslint:recommended",
		"plugin:prettier/recommended"
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["prettier", "jest", "jsx-a11y", "import", "react"],
	rules: {
		"prettier/prettier": ["error", prettierOptions],
		"react/react-in-jsx-scope": "off",
		quotes: ["error", "double"],
		"max-len": ["error", { code: 100 }],
		"prefer-promise-reject-errors": ["off"],
		"react/jsx-filename-extension": ["off"],
		"react/prop-types": ["warn"],
		"no-return-assign": ["off"],
    "dot-notation": "off",
	}
};
