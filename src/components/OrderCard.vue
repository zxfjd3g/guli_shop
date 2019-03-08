<template>
  <div class="ddxq">
    <div class="ddspt fl"><img :src="order.items[0].imgPath" alt=""></div>
    <div class="ddbh fl">订单号:1705205643098724</div>
    <div class="ztxx fr">
      <ul>
        <li>{{order.payStatus}}</li>
        <li>￥{{order.totalAmount}}</li>
        <li class="createTime">{{order.creatTime}}</li>
        <li><a href="javascript:;">订单详情></a></li>
        <div class="clear"></div>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>

  export default {
    props:{
      order:Object
    }
  }
</script>
<style lang="stylus" scoped>
  .ddxq
    width 938px
    height 120px
    line-height 120px
    font-size 17px
    color rgb(117,117,117)
    border-bottom 1px solid #ccc
    padding-left 40px
    .ddspt
      width 80px
      height 80px
      margin 19px 25px 0 0
      border 1px solid #aaa
      img
        width 100%
        height 100%
    .ztxx
      ul
        li
          display inline-block
          width 130px
          height 60px
          line-height 60px
          float left
          border-left 1px solid #aaa
          margin-top 30px
          text-align center
          &.createTime
            line-height 30px
          a
            color rgb(117,117,117)
            &:hover
              color #ff6700

</style>
