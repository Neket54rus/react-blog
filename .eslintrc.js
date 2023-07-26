module.exports = {
	env: { browser: true, es2021: true, jest: true },
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		'no-tabs': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		// 'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'no-underscore-dangle': 'off',
		'import/no-extraneous-dependencies': 'off',
		'i18next/no-literal-string': [
			'error',
			{ markupOnly: true, ignoreAttribute: ['data-testid', 'to', 'name', 'target', 'alt', 'direction'] },
		],
		'max-len': ['error', { code: 120, ignoreComments: true }],
		'no-restricted-globals': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-param-reassign': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'no-undef': 'off',
		'react/no-array-index-key': 'off',
		'arrow-body-style': 'off',
		'object-curly-newline': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'react/jsx-props-no-spreading': 'off',
		'arrow-spacing': 'off',
	},
	overrides: [
		{
			files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
				'max-len': 'off',
			},
		},
	],
};
