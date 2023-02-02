import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const projectRootDir = path.resolve(__dirname)
console.log('🚀 >> projectRootDir', path.resolve(projectRootDir, 'src'))

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      alias({
        entries: [
          { find: '@', replacement: path.resolve(projectRootDir, 'src') },
          { find: 'src', replacement: path.resolve(projectRootDir, 'src') }
        ]
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      postcss({
        plugins: [],
        minimize: true
      }),
      external(),
      resolve(),
      terser()
    ],
    external: ['react']
  }
]
