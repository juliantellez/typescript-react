const config = {
    parser: '@typescript-eslint/parser',
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    extends: [
        'eslint:recommended',
        /**
         * Ts
         */
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        /**
         * Prettier
         */
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        /**
         * React
         */
        'plugin:react/recommended',
    ],
    plugins: ['@typescript-eslint', 'react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}

module.exports = config
