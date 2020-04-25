import * as path from 'path'

import { WebpackPaths } from '../types'

const createWebpackPaths = (root: string): WebpackPaths => {
    return {
        root,
        src: path.resolve(root, 'src', 'main'),
        build: path.resolve(root, 'dist'),
    }
}

export default createWebpackPaths
