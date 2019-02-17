<template>
  <div class="mingxing fl">
    <router-link :to="`/detail/${good.id}`" >
      <div class="sub_mingxing"><img :src="good.imgSrc" alt=""></div>
      <div class="pinpai">{{good.name}}</div>
      <div class="youhui">{{good.discounts}}</div>
      <div class="jiage">{{good.price}}元起</div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props:{
      good:Object
    }
  };
</script>
<style lang="stylus" scoped>
  .mingxing
    width 230px
    height 339px
    background rgb(250,250,250)
    &:nth-of-type(1)
      border-top 1px solid orange
      margin-right 14px
    &:nth-of-type(2)
      border-top 1px solid green
      margin-right 14px
    &:nth-of-type(3)
      border-top 1px solid blue
      margin-right 14px
    &:nth-of-type(4)
      border-top 1px solid red
      margin-right 14px
    &:nth-of-type(5)
      border-top 1px solid teal
    a
      display block
      width 100%
      height 100%
      .sub_mingxing
        padding 37px
        img
          display block
          width 160px
          height 160px
          opacity 0.85
      &:hover
        .sub_mingxing
          img
            width 160px
            height 160px
            opacity 1
    .pinpai
      width 234px
      height 14px
      line-height 14px
      text-align center
      margin-top -10px
      font-size 14px
      color #333
    .youhui
      width 234px
      height 12px
      line-height 12px
      margin 15px 0
      font-size 12px
      color rgb(176,176,176)
      text-align center
    .jiage
      font-size 14px
      text-align center
      color #ff6709

</style>
