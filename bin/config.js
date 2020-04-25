const Env = {
    DEV: 'DEV',
    PROD: 'PROD',
    CI: 'CI'
}

const config = {
    REPOSITORY_NAME: process.env.REPOSITORY_NAME || "https://github.com/juliantellez/typescript-react.git",
    REPOSITORY_BRANCH: process.env.REPOSITORY_BRANCH || "master",
    PROJECT_NAME: process.env.PROJECT_NAME || "test",
    NODE_ENV: process.env.NODE_ENV || Env.DEV
}

module.exports = {
    config,
    Env
}
