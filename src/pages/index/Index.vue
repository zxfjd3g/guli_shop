<template>
  <content id="content">
    <Nav/>
    <div id="banner">
      <CateMenu/>
      <AdvSwiper/>
    </div>
    <HotProducts/>
    <FlashShop/>
    <Recommend/>
  </content>
</template>

<script>
  import {mapState} from "vuex"

  import CateMenu from '../../components/CateMenu.vue'
  import AdvSwiper from '../../components/AdvSwiper.vue'
  import HotProducts from '../../components/HotProducts.vue'
  import FlashShop from '../../components/FlashShop.vue'
  import Recommend from '../../components/Recommend.vue'
  import Nav from '../../components/Nav.vue'

  export default {
    components: {
      CateMenu,
      AdvSwiper,
      HotProducts,
      FlashShop,
      Recommend,
      Nav
    },
    props:['userToken'],
    mounted(){
      let {userToken}=this;
      if(userToken){
        this.$store.dispatch('setUserToken',userToken);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #content
    display: flex
    justify-content: center
    flex-wrap: wrap
    width: 100%
    #banner
      width: 1226px
      flex-shrink: 0
      height: 460px
      background-color: #ccc
</style>
