import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const externals = [
  'classnames',
  'react',
  'react-dom',
  'react-redux',
  'redux',
  'react-modal'
];

export default [
  {
    input: './src/index.js',
    output: {
      exports: 'named',
      file: './dist/redux.dialog.js',
      format: 'cjs'
    },
    external: externals,
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),

      resolve(),

      commonjs({
        include: 'node_modules/**'
      }),

      babel({
        presets: [['@babel/preset-env', { modules: false }]]
      })

      // uglify()
    ]
  },

  {
    input: './src/index.js',
    output: {
      file: pkg.module,
      format: 'es'
    },
    external: externals,
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),

      resolve(),

      commonjs({
        include: 'node_modules/**'
      }),

      babel({
        presets: [['@babel/preset-env', { modules: false }]]
      })

      // uglify()
    ]
  }
];
