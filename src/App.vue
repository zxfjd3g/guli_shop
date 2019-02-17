<template>
  <div id="app">
    <Header v-show="!$route.meta.notheader"/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.notFooter"/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="stylus">
  #app
    width: 100%
    height: 100%
</style>
