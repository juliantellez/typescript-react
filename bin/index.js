#!/usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

require('yargs')
    .scriptName('typescript-react')
    .usage('$0 <cmd> [args]')
    .command(
        'install [name]',
        'bootstrap dependencies',
        yargs => {
            yargs.positional('name', {
                type: 'string',
                default: 'typescript-react-boilerplate',
                describe: 'directory name',
            })
        },
        async args => {
            const fs = require('fs')
            const util = require('util')

            console.log('CURRENT_DIR:', process.cwd())

            const ROOT = process.cwd()
            const directory = ROOT + '/' + args.name

            if (!fs.existsSync(directory)) {
                console.log('Creating folder: ' + directory)
                fs.mkdirSync(directory)
            } else {
                console.log('Directory already exists')
                process.exit(0)
            }

            process.chdir(directory)
            const exec = util.promisify(require('child_process').exec)

            try {
                const { stdout: npmInit } = await exec('npm init --yes')
                console.log('[NPM INIT]', npmInit)

                const { stdout: npmInstall } = await exec(
                    'npm i typescript-react@latest --save-dev'
                )
                console.log('[NPM INSTALL]', npmInstall)

                const packageJson = require(`${directory}/package.json`)

                const { stdout: cpDir } = await exec(
                    `cp -R ${directory}/node_modules/typescript-react/{.,}* ${directory}`
                )
                console.log('[COPY BOILERPLATE]', cpDir)

                const boilerplateJson = require(`${directory}/node_modules/typescript-react/package.json`)

                const obj = {
                    ...packageJson,
                    scripts: boilerplateJson.scripts,
                    devDependencies: boilerplateJson.devDependencies,
                }

                fs.writeFileSync(
                    `${directory}/package.json`,
                    JSON.stringify(obj)
                )

                const { stdout: npmInstallDeps } = await exec('npm install')
                console.log('[NPM INSTALL BOILERPLATE] ', npmInstallDeps)
            } catch (e) {
                console.log(e)
                process.exit(1)
            }
        }
    )
    .help().argv
