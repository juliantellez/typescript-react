import * as path from 'path'
import { Configuration } from 'webpack'

import jsRule from './rules/jsRules'
import cssRule from './rules/cssRule'

import createWebpackEnv from './utils/createWebpackEnv'
import createWebpackPlugins from './utils/createWebpackPlugins'
import createWebpackPaths from './utils/createWebpackPaths'

import { WebpackArgs } from './types'

const PATH_ROOT = path.resolve(__dirname, '..', '..')

const createWebpackConfig = (args: WebpackArgs): Configuration => {
    const env = createWebpackEnv(args)
    const paths = createWebpackPaths(PATH_ROOT)

    return {
        mode: env.isProduction() ? 'production' : 'development',
        entry: paths.src,
        output: {
            chunkFilename: 'chunk.[name].[contenthash].js',
            path: paths.build,
            filename: '[name].js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', 'jsx'],
        },
        module: {
            rules: [jsRule, cssRule],
        },
        plugins: createWebpackPlugins(env, paths),
        devtool: env.isProduction() ? 'source-map' : 'cheap-module-source-map',
        cache: env.isProduction() ? false : true,
        optimization: {
            splitChunks: {
                chunks: 'initial',
                cacheGroups: {
                    vendors: false,
                    default: false,
                },
            },
        },
        ...(env.isDevelopment() && {
            devServer: {
                compress: true,
                hot: true,
                port: 3000,
                historyApiFallback: true,
            },
        }),
    }
}

export default createWebpackConfig
