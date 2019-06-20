/* @flow */

import { mergeOptions } from '../util/index'
// 添加mixin方法
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
