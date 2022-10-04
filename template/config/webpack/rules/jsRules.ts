import { RuleSetRule } from 'webpack'

/**
 * Include ts, tsx, js, and jsx files.
 */
const jsRule: RuleSetRule = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
}

export default jsRule
