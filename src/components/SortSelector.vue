<template>
  <div class="sort">
    <div class="list">
      <div class="active">推荐</div>
      <div>新品</div>
      <div>价格<i class="iconfont icon-jiantou_xiangshang"></i></div>
      <div>评论最多</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      orderType: Number,
      isAscend: Boolean
    },

    methods: {
      setOrderType(orderType) {
        this.$emit('setOrderType', orderType)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .sort
    width 100%
    height 81px
    background-color #f5f5f5
    .list
      width 1226px
      height 81px
      margin 0 auto
      display flex
      align-items center
      font-size 14px
      div
        height 20px
        line-height 20px
        padding 0 30px
        flex-shrink 0
        cursor pointer
        border-left 1px solid #e0e0e0
        transition color .2s
        &:nth-child(1)
          text-align left
          padding-left 0
          border-left 0
        &:hover
          color #ff6700
      .active
        color #ff6700

</style>
