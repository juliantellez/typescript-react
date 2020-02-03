# Typescript React

A one line command to install a typescript + react application. It runs on [node v12](https://github.com/nodejs/Release).

# Install
```
npx typescript-react
```

<img width="591" alt="Screenshot 2020-02-03 at 00 27 24" src="https://user-images.githubusercontent.com/4896851/73617995-0f6c3600-461c-11ea-861f-f77709eaed66.png">

## Start

```
npx typescript-react hello-world
cd hello-world
npm start
```

# What's inside?

- [Babel](https://github.com/babel/babel): A compiler for writing next generation JavaScript.
- [Commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint): Lint commit messages.
- [Eslint](https://github.com/eslint/eslint): Find and fix problems in your JavaScript code.
- [Husky](https://github.com/typicode/husky): Git hooks made easy.
- [Jest](https://github.com/facebook/jest): Delightful JavaScript Testing.
- [Nyc](https://github.com/istanbuljs/nyc): Track how well your unit-tests exercise your codebase.
- [Prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter.
- [React + React Dom](https://github.com/facebook/react): Declarative, efficient, and flexible JavaScript library for building user interfaces.
- [React Testing Library](https://github.com/testing-library/react-testing-library): React DOM testing utilities that encourage good testing practices.
- [Sass](https://github.com/sass/sass): CSS with superpowers.
- [Storybook](https://github.com/storybookjs/storybook): Development environment for UI components.
- [Typedoc](https://github.com/TypeStrong/typedoc): Documentation generator for TypeScript projects.
- [Typescript](https://github.com/microsoft/TypeScript): Superset of JavaScript that compiles to clean JavaScript output.
- [Webpack](https://github.com/webpack/webpack): Bundle JavaScript files for usage in a browser.

# Configurations files

Libraries such as babel, husky, commitlint and eslint use [comsmiconfig](https://github.com/davidtheclark/cosmiconfig) to load their corresponding configurations. The configuration file could be one of the following:

- a package.json property
- a JSON or YAML, extensionless "rc file"
- an "rc file" with the extensions .json, .yaml, .yml, or .js.
- a .config.js CommonJS module
