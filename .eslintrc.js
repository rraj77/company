module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		quotes: ['error', 'double'],
		'max-len': ['error', { code: 100 }],
		'prefer-promise-reject-errors': ['off'],
		'react/jsx-filename-extension': ['off'],
		'react/prop-types': ['warn'],
		'no-return-assign': ['off']
	}
};
