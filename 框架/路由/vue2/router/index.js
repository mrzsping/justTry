import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/Page'
import PageB from '@/components/PageB'
import PageC from '@/components/PageC'

Vue.use(Router)

const router =  new Router({
  // mode: 'history', // hash模式 history模式, history: seo优化 美观 需要后台配置
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: (to, from, next) => { // 与全局前置守卫一致
        next()
      }
    },
    {
      path: '/a/:d', // 动态路由
      name: 'Page',
      // props: true, // 使用props属性 解耦 布尔模式
      props: {default: true, a: true},
      components: {
        default: Page,
        a: PageB
      }
    },
    {
      path: '*', // 匹配所有
      components: { // 命名视图
        default: Page,
        a: PageB
      }
    },
    {
      path: '/test*', // 匹配test开头
      component: PageB
    },
    {
      name: 'test', // push name
      path: '/test/:id', // 匹配test开头
      component: PageB
    },
    {
      path: '/test123', // 使用pathMatch
      component: PageB
    },
    {
      path: '/as/(na)?me', // 使用正则
      component: PageB,
      children: [
        {
          path: 'c', // 无/ 以/开头的嵌套路径会被当作根路径
          component: PageC
        }
      ]
    },
    {
      path: '/h', // 使用history
      component: PageC,
      meta: {
        name: 1233
      }
    },
    {
      path: '/redirect', // 重定向
      redirect: '/a' // 有可以是() => return 
    },
    // 重定向 使用name
    // {
    //   path: '/redirect1',
    //   redirect: {
    //     name: 'test'
    //   }
    // }
    // 别名 路径是b 访问是a
    {
      path: '/a',
      alias: '/b',
      component: PageB
    },
    { // 路由传参
      path: '/c/:q',
      component: PageC,
      props: (route) => ({query: route.params.q})
    },
  ],
  scrollBehavior (to, from, savedPosition) {
   return {
     x: 0,
     y: 200
   }
  }
})

// 全局前置守卫
router.beforeEach((to, from ,next) => {
  console.log(to, from , next)
  // 路由元
  console.log('meta', from.meta)
  console.log('meta', to.meta)
  next()
  // next(false)
  // next('/a')
  // next({path: 'name})
})

// 全局解析守卫 所有组件内守卫和异步路由组件被解析之后
// router.beforeResolve((to, from ,next) => {
//   console.log(11111)
// })

// 全局后置钩子 不会改变导航本身
router.afterEach((to, from) => {
  console.log('这是后置', to, from)
})
export default router
