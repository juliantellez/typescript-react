#!/usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const renderBanner = require('./banner')
const inquirer = require('inquirer')
const start = require('./start')

renderBanner()

inquirer
    .prompt([
        {
            name: 'projectName',
            message: 'What would you like to call this project?',
            default: 'typescript-react-boilerplate',
            validate: input => Boolean(input.length),
        },
    ])
    .then(start)
