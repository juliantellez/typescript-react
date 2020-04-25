/**
 * See https://webpack.js.org/guides/environment-variables/
 */
export interface WebpackEnv {
    /**
     * webpack --env.NODE_EVN="production"
     */
    NODE_ENV: 'production' | 'development'
    /**
     * webpack --env.ANALYZE
     */
    analyze: boolean
    isProduction: () => boolean
    isDevelopment: () => boolean
}

export type WebpackArgs = Omit<WebpackEnv, 'isProduction' | 'isDevelopment'>

export interface WebpackPaths {
    root: string
    src: string
    build: string
}
