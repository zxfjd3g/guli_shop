<template>
  <div class="remen fl">
    <router-link :to="`/detail/${good.id}`">
      <div class="xinpin" v-if="good.discounts"><span :style="good.discountsText?'background:red':''">新品</span></div>
      <div class="tu"><a href="javascript:;"><img :src="good.imgSrc"></a></div>
      <div class="miaoshu"><a href="javascript:;">{{good.name}}</a></div>
      <div class="jiage">{{good.price}}元</div>
      <div class="pingjia">{{good.comments}}人评价</div>
      <div class="piao" v-if="good.commentText">
        <a href="javascript:;">
          <span>{{good.commentText}}</span>
          <span>来至于{{good.commentUserName}}的评价</span>
        </a>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    props: {
      good: Object
    }
  }
</script>

<style lang="stylus" scoped>
  .remen
    width 234px
    height 300px
    margin-right 14px
    position relative
    background #fff
    overflow hidden
    &:hover
      box-shadow 0px 0px 30px #ccc
      .piao
        transform translateY(0)
    &:nth-of-type(5)
      margin-right 0
    .xinpin
      span
        display block
        margin 0 auto
        font-size 10px
        line-height 20px
        height 20px
        color #fff
        width 65px
        background #83c44e
        text-align center
    .tu
      a
        img
          margin 10px 42px 20px 42px
    .miaoshu
      width 234px
      height 25px
      line-height 25px
      text-align center
      overflow hidden
      a
        color #000
        font-size 14px
    .jiage
      color #ff6700
      font-size 14px
      text-align center
      width 234px
      height 25px
      line-height 25px
    .pingjia
      width 234px
      height 15px
      line-height 15px
      font-size 12px
      color #aaa
      text-align center
    .piao
      width 204px
      height 60px
      font-size 12px
      padding 10px 0px 0px 30px
      background #ff6700
      position absolute
      left 0
      bottom 0
      transform translateY(100%)
      transition transform 0.2s
      a
        color #fff
      span
        display block
        margin-top 5px

</style>
