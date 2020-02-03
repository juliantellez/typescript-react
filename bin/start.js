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
         * Install latest version
         * Copy dependencies to current dir
         */
        console.log(chalk.yellow('[ FETCH ]'))

        const { stdout: fetch } = await exec(
            `git clone git@github.com:juliantellez/typescript-react.git ${directory} --depth 1`
        )
        console.log(chalk.gray(fetch))

        /**
         * Aggregate Json files
         */
        const packageJson = require(`${directory}/package.json`)

        const unifiedPackageJson = {
            name: answers.projectName,
            version: '0.0.0',
            scripts: packageJson.scripts,
            devDependencies: packageJson.devDependencies,
        }

        fs.writeFileSync(
            `${directory}/package.json`,
            JSON.stringify(unifiedPackageJson, void 0, 2)
        )

        /**
         * Install dependencies
         */
        console.log(chalk.yellow('[ NPM INSTALL DEPENDENCIES ]'))
        const { stdout: installDeps } = await exec('npm install')
        console.log(chalk.gray(installDeps))

        /**
         * House Keeping
         */
        console.log(chalk.yellow('[ HOUSE KEEPING ]'))
        const { stdout: houseKeeping } = await exec(
            `rm -rf ${directory}/bin ${directory}/.git `
        )
        console.log(chalk.gray(houseKeeping))
    } catch (e) {
        console.log(chalk.red(e))
        process.exit(1)
    }
}

module.exports = main
