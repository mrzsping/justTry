<template>
  <div>
      page b{{d}}
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: ['d'], // 路由组件传参
    mounted () {
      // test* 之后所匹配路由后半部分 /test123 => 123
      console.log(this.$route.params.pathMatch)

      // 编程式导航 query
      console.log(this.$route.query)

      // console.log(this.route.params)
    }
  }
</script>