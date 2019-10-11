import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
// 添加静态方法和属性、版本等
initGlobalAPI(Vue) // 传入vue

Object.defineProperty(Vue.prototype, '$isServer', { // 定义只读属性
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', { // 定义只读属性
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// 在ssr中使用
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__' // 版本号

export default Vue
