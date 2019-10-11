<template>
  <div>
    <!-- 详情使用params -->
    <!-- 使用相同组件，生命周期钩子不被调用 -->
    {{$route.params.d}}
    <!-- 查询页面使用query -->
    {{$route.query}}
    <!-- 解耦$route.params.d -->
    这是：{{d}}
    <button type="" @click="toPageB">to pageb</button>
  </div>
</template>

<script>
  export default {
    props: ['d'], // 使用props获取结果
    data () {
      return {

      }
    },
    beforeRouteUpdate (to, from ,next) {
      console.log(to, from, next)
    },
    mounted() {
      // router为VueRouter的实例，相当于一个全局的路由器对象
      // route相当于当前正在跳转的路由对象
      // console.log(this.$router, this.$route)
    },
    watch: {
      // 监听router变化
      '$route' (n, o){
        // console.log(n, o)
      }
    },
    methods: {
      // router方法参照window.history方法
      // router.push = window.history.pushState
      // router.replace = window.history.replaceState
      // router.go = window.history.go
      toPageB () { // 编程式导航
        // this.$router.push('/test')

        this.$router.push({name: 'test', params: {id: '123'}}) // 带有params

        // this.$router.push({path: 'test', query: {id: '123'}}) // 带有query
      }
    },
  }
</script>