<template>
  <div class="swiper-container fl">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in homeAdv" :key="index">
        <img :src="slide.imgPath" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['homeAdv'])
    },
    mounted() {
      this.$store.dispatch('getHomeAdv',()=>{
        this.$nextTick(()=>{
          this.swiper = new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            autoplay: {
              delay: 3000, //3秒切换一次
              disableOnInteraction: false
            },
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination"
            },
            observer: true,
            observeParents: true,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          });
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width: 992px
    height: 100%
    .swiper-wrapper
      .swiper-slide
        img
          width: 100%
          height: 100%
</style>
