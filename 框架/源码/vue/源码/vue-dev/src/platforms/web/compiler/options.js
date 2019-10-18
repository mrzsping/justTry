/* @flow */

import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import { genStaticKeys } from 'shared/util'
import { isUnaryTag, canBeLeftOpenTag } from './util'

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  modules,
  directives,
  isPreTag,
  isUnaryTag, // 是否是一元标签
  mustUseProp,
  canBeLeftOpenTag, // 不是一元标签 自动补齐
  isReservedTag, // 是否是保留标签
  getTagNamespace, // 获取元素(标签)的命名空间
  staticKeys: genStaticKeys(modules) // 根据编译器选项的 modules 选项生成一个静态键字符串
}
