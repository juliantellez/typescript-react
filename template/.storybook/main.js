/**
 * Duplication should be avoided
 * TS support is in dev at the moment
 * see https://github.com/storybookjs/storybook/issues/9397
 */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin")

const jsRules = require("./webpack/jsRule");
const cssRules = require("./webpack/cssRule");

const PATH_ROOT = path.resolve(__dirname, "..");
const PATH_SRC = path.resolve(PATH_ROOT, "./src");

module.exports = {
    stories: [
        path.resolve(PATH_SRC, "./**/*.stories.ts"),
        path.resolve(PATH_SRC, "./**/*.stories.tsx"),
        path.resolve(PATH_SRC, "./**/*.stories.js"),
        path.resolve(PATH_SRC, "./**/*.stories.jsx"),
    ],
    addons: ["@storybook/addon-actions", "@storybook/addon-links"],
    webpackFinal: config => {

        config.module.rules = [jsRules, cssRules];

        config.resolve = {
            extensions: [".tsx", ".ts", ".js"]
        };

        config.plugins.push(
            new CopyWebpackPlugin([{
                from: path.join(PATH_ROOT, "assets"),
                to: path.join(PATH_ROOT, "storybook-static", "assets")
            }])
        );

        return config;
    }
};
