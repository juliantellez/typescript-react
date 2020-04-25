/**
 * Include ts, tsx, js, and jsx files.
 */
const jsRule = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: "babel-loader"
};

module.exports = jsRule;
