<template>
  <div id="sub_banner">
    <div class="selector">
      <a class="sidebar" href="javascript:;">
        <img src="/static/image/sub_banner/hjh_01.gif" alt="">
      </a>
      <a class="sidebar" href="javascript:;">
        <img src="/static/image/sub_banner/hjh_02.gif" alt="">
      </a>
      <a class="sidebar" href="javascript:;">
        <img src="/static/image/sub_banner/hjh_03.gif" alt="">
      </a>
      <a class="sidebar" href="javascript:;">
        <img src="/static/image/sub_banner/hjh_04.gif" alt="">
      </a>
      <a class="sidebar" href="javascript:;">
        <img src="/static/image/sub_banner/hjh_05.gif" alt="">
      </a>
      <a class="sidebar" href="javascript:;">
        <img src="/static/image/sub_banner/hjh_06.gif" alt="">
      </a>
    </div>
    <div class="bigImg" v-for="product in hotProducts" :key="product.id">
      <a href="javascript:;">
        <img :src="product.imgPath" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    computed:{
      ...mapState(["hotProducts"])
    },
    mounted(){
      this.$store.dispatch('getHomeHotProducts');
    }
  };
</script>

<style lang="stylus" scoped>
  #sub_banner
    display: flex
    width: 1226px
    flex-shrink: 0
    justify-content: space-between
    height: 170px
    margin-top: 15px
    .selector
      width: 234px
      height: 100%
      .sidebar
        float: left
        display: block
        width: 78px
        height: 85px
        img
          opacity: 0.8
          &:hover
            opacity: 1

    .bigImg
      width: 316px
      height: 100%
      a
        display: block
        width: 100%
        height: 100%
        img
          width: 100%
          height: 100%
          opacity: 0.8
          &:hover
            opacity: 1
</style>
