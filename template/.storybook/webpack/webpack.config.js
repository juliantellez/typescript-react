const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin")

const jsRules = require("./jsRule.js")
const cssRules = require("./cssRule.js")

const PATH_ROOT = path.resolve(__dirname, "..");

const config = (env) => {
    return {
        rules: [
            jsRules,
            cssRules
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: path.join(PATH_ROOT, "assets"),
                to: path.join(PATH_ROOT, "dist", "assets")
            }])
        ]
    }
}

module.exports = config
