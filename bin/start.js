#!/usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const exec = util.promisify(require("child_process").exec);
const spawn = require("child_process").spawn;

const REPOSITORY_NAME = "git@github.com:juliantellez/typescript-react.git";
const REPOSITORY_BRANCH = "refactor/separate_bin_from_src";

const promisifySpawn = (command) => {
    return new Promise((resolve, reject) => {
        const [entry, ...args] = command.split(" ").filter(Boolean);
        const currentProcess = spawn(entry, args);

        currentProcess.stdout.on("message", (data) => {
            process.stdout.write(data);
        });

        currentProcess.stdout.on("data", (data) => {
            process.stdout.write(data);
        });

        currentProcess.stderr.on("data", (data) => {
            process.stderr.write(data);
        });

        currentProcess.on("close", (code) => {
            process.stdout.write(code);
            Boolean(code) ? reject() : resolve();
        });
    });
};

/**
 * @param {string} projectName
 * @param {string} directoryPath
 *
 * @returns {string} directory
 */
const createProjectDir = (projectName, directoryPath) => {
    const directory = directoryPath + "/" + projectName;
    if (!fs.existsSync(directory)) {
        console.log(chalk.yellow("Creating folder: " + directory));
        fs.mkdirSync(directory);
    } else {
        console.log(chalk.red("Directory already exists"));
        process.exit(0);
    }

    return directory;
};

/**
 * @param {string} projectName
 */
const main = async (answers) => {
    try {
        const directory = createProjectDir(answers.projectName, process.cwd());
        /**
         * Move to current dir
         */
        process.chdir(directory);

        /**
         * Clone template
         */
        console.log(chalk.yellow("[ FETCH TEMPLATE ]"));

        await promisifySpawn(
            `git clone -b ${REPOSITORY_BRANCH} ${REPOSITORY_NAME} ${directory} --depth 1`
        );

        /**
         * Copy template
         * The following is a workaround for copying the template folder
         */
        try {
            await exec(`mv -fv ${directory}/template/* ${directory}`);
            await exec(`mv -fv ${directory}/template/.* ${directory}`);
        } catch (e) {
            // console.log(chalk.red(e));
        }

        // /**
        //  * Aggregate Json files
        //  */
        const packageJson = require(`${directory}/package.json`)

        const unifiedPackageJson = {
            ...packageJson,
            name: answers.projectName,
            version: '0.0.0',
        }

        fs.writeFileSync(
            `${directory}/package.json`,
            JSON.stringify(unifiedPackageJson, void 0, 2)
        )

        /**
         * Install dependencies
         */
        console.log(chalk.yellow('[ NPM INSTALL DEPENDENCIES ]'))
        await promisifySpawn('npm install')

        /**
         * House Keeping
         */
        console.log(chalk.yellow('[ HOUSE KEEPING ]'))
        await exec(`rm -rf ${directory}/bin`);
        await exec(`rm -rf ${directory}/template`);

    } catch (e) {
        console.log(chalk.red(e));
        process.exit(1);
    }
};

module.exports = main;
