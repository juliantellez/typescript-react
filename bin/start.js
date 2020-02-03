#!/usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const exec = util.promisify(require('child_process').exec)

/**
 * @param {string} projectName
 * @param {string} directoryPath
 *
 * @returns {string} directory
 */
const createProjectDir = (projectName, directoryPath) => {
    const directory = directoryPath + '/' + projectName
    if (!fs.existsSync(directory)) {
        console.log(chalk.yellow('Creating folder: ' + directory))
        fs.mkdirSync(directory)
    } else {
        console.log(chalk.red('Directory already exists'))
        process.exit(0)
    }

    return directory
}

/**
 * @param {string} projectName
 */
const main = async answers => {
    try {
        const directory = createProjectDir(answers.projectName, process.cwd())
        /**
         * Move to current dir
         */
        process.chdir(directory)

        /**
         * Create Package.json
         */
        const { stdout: init } = await exec('npm init --yes')
        console.log(chalk.yellow('[NPM INIT]'), chalk.gray(init))

        /**
         * Install latest version
         */
        const { stdout: install } = await exec(
            'npm i typescript-react@latest --save-dev'
        )
        console.log(chalk.yellow('[NPM INSTALL]'), chalk.gray(install))

        /**
         * Copy dependencies to current dir
         */
        const packageJson = require(`${directory}/package.json`)
        const { stdout: copy } = await exec(
            `cp -R ${directory}/node_modules/typescript-react/{.,}* ${directory}`
        )
        console.log(chalk.yellow('[COPY BOILERPLATE]'), chalk.gray(copy))

        /**
         * Aggregate Json files
         */
        const boilerplateJson = require(`${directory}/node_modules/typescript-react/package.json`)
        const unifiedPackageJson = {
            ...packageJson,
            scripts: boilerplateJson.scripts,
            devDependencies: boilerplateJson.devDependencies,
        }

        fs.writeFileSync(
            `${directory}/package.json`,
            JSON.stringify(unifiedPackageJson)
        )

        /**
         * Install dependencies
         */
        const { stdout: installDeps } = await exec('npm install')
        console.log(
            chalk.yellow('[NPM INSTALL BOILERPLATE]'),
            chalk.gray(installDeps)
        )

        /**
         * Uninstall typescript-react
         */
        const { stdout: uninstall } = await exec(
            'npm uninstall typescript-react'
        )
        console.log(
            chalk.yellow('[NPM UNINSTALL BOILERPLATE]'),
            chalk.gray(uninstall)
        )
    } catch (e) {
        console.log(chalk.red(e))
        process.exit(1)
    }
}

module.exports = main
