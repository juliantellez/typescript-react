const filExtensions =
    '\\.(css|scss|sass|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'

const config = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        [filExtensions]: 'identity-obj-proxy',
    },
    /**
     * Watch
     */
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ],
    /**
     * NYC coverage
     * see https://jestjs.io/docs/en/configuration#coveragedirectory-string
     */
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx,js,jsx}',
        /**
         * Exclude style declaration files
         */
        '!src/**/*.{scss,css,scss}.d.ts',
        /**
         * Exclude storybook files
         */
        '!src/**/*/*.stories.{ts,tsx,js,jsx}',
    ],
    coverageReporters: ['lcov', 'text', 'text-summary'],
    coverageThreshold: {
        global: {
            branches: 98,
            functions: 98,
            lines: 98,
            statements: 98,
        },
    },
}

module.exports = config
