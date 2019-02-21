import node from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import serve from 'rollup-plugin-serve'

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: 'inline',
  },
  plugins: [
    node(),
    cjs(),
    serve('dist'),
  ]
};
