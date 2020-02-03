#!/usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const packageJson = require('../package.json')

const logo = fs.readFileSync(path.join(__dirname, './ascii.txt'), 'utf8')
const example = chalk.yellow('npx typescript-react hello-world')

const main = () => {
    console.log(`\n${chalk.yellow(logo)}`)

    // eslint-disable-next-line prettier/prettier
console.log(`
------------------------------------------------------------------------------
------------------------------------------------------------------------------

Version: ${chalk.yellow(packageJson.version)}
Contribute: ${chalk.yellow(packageJson.homepage)}

Use this tool with npx e.g ${example}

`)
}

module.exports = main
