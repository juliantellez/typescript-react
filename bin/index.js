#!/usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const renderBanner = require('./banner')
const inquirer = require('inquirer')
const start = require('./start')
const {config, Env} = require('./config')

renderBanner()

inquirer
    .prompt([
        {
            name: 'projectName',
            message: 'What would you like to call this project?',
            default: 'typescript-react-boilerplate',
            validate: input => Boolean(input.length),
            when: () => config.NODE_ENV !== Env.CI
        },
    ])
    .then(start)
