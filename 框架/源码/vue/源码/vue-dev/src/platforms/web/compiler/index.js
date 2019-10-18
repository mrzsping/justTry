/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

const { compile, compileToFunctions } = createCompiler(baseOptions) // compiler/create-compiler.js

export { compile, compileToFunctions }
