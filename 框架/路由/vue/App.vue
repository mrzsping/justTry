<template>
  <div id="app">
    <!-- 自带class router-link-active -->
    <router-link to="/a">a</router-link>
    <router-view/>
    <!-- 嵌套视图 -->
    <router-view name="a"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
