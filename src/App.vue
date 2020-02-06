<template>
  <div id="app">
    <keep-alive :include="$store.state.cachePages">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cachePages: ['TabBar']
    }
  }
}
</script>

<style lang='less'>
.a{
  width: 750px;
  height: 200px;
}
</style>
