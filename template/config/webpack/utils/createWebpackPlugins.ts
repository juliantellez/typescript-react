import * as CopyWebpackPlugin from 'copy-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'
import { EnvironmentPlugin, WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { WebpackEnv, WebpackPaths } from '../types'

const createWebpackPlugins = (
    env: WebpackEnv,
    paths: WebpackPaths
): WebpackPluginInstance[] => {
    const plugins: WebpackPluginInstance[] = [
        new EnvironmentPlugin(env),
        /**
         * Provide HTML template
         */
        new HtmlWebpackPlugin({
            template: path.join(paths.root, 'assets', 'index.html'),
        }),
        /**
         * Add assets to dist
         */
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(paths.root, 'assets'),
                    to: path.join(paths.root, 'dist', 'assets'),
                },
              ],
        }),
    ]

    if (env.analyze) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: true,
              }),
        )
    }

    if (env.isDevelopment()) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins
}

export default createWebpackPlugins
