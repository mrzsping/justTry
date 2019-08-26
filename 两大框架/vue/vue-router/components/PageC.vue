<template>
  <div>
    page c{{query}}
  </div>
</template>

<script>
  export default {
    props: ['query']
    // 组件内守卫

    // beforeRouteEnter 不能获取组件实例this 唯一支持给next传递回调
    // beforeRouteUpdate (2.2 新增)
    // beforeRouteLeave

    //导航解析流程
    
    // 导航被触发。
    // 在失活的组件里调用离开守卫。 beforerouteleave
    // 调用全局的 beforeEach 守卫。
    // 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    // 在路由配置里调用 beforeEnter。
    // 解析异步路由组件。
    // 在被激活的组件里调用 beforeRouteEnter。
    // 调用全局的 beforeResolve 守卫 (2.5+)。
    // 导航被确认。
    // 调用全局的 afterEach 钩子。
    // 触发 DOM 更新。
    // 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
  }
</script>