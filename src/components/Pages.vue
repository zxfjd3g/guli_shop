<template>
  <div class="pages">
    <div class="pre iconfont icon-jiantou_xiangzuo disable">
    </div>
    <div class="active">
      1
    </div>
    <div>
      2
    </div>
    <div>
      3
    </div>
    <div>
      4
    </div>
    <div>
      5
    </div>
    <div>
      6
    </div>
    <div>
      7
    </div>
    <div>
      8
    </div>
    <div class="next iconfont icon-jiantou_xiangyou">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Pages"
  }
</script>

<style lang="stylus" scoped>
  .pages {
    display flex
    align-items center
    justify-content center
    margin-top 35px
    width: 100%;
    height: 50px;
    background-color: #f5f5f5
    div {
      flex-shrink 0
      width 48px
      height 24px
      line-height 24px
      padding 3px 0
      margin 0 7px
      text-align center
      color #b0b0b0
      cursor pointer
      background: rgba(0, 0, 0, 0);
      transition all 0.2s
      &:hover {
        background: #b0b0b0;
        color: #fff;
      }
      &.active {
        background-color: #757575;
        color: #fff;
      }
      &.disable {
        background: rgba(0, 0, 0, 0);
        color: #b0b0b0;
        cursor default
      }
    }
  }
</style>
