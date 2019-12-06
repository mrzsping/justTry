/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator (function baseCompile ( // 返回createCompiler
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options) // 调用 parse 函数将字符串模板解析成抽象语法树(AST)
  if (options.optimize !== false) {
    optimize(ast, options) // // 调用 optimize 函数优化 ast
  }
  const code = generate(ast, options) // 调用 generate 函数将 ast 编译成渲染函数
  return {
    ast,
    render: code.render, // 渲染函数 字符串
    staticRenderFns: code.staticRenderFns
  }
})
