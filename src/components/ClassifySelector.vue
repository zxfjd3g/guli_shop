<template>
  <div class="classify">
    <span>分类:</span>
    <div :class='{active: classifyId===0}' @click="setClassifyId(0)">全部</div>
    <div :class='{active: classifyId===item.id}'
         v-for="item in classifys"
         :key="item.id"
         @click="setClassifyId(item.id)">
      {{item.name}}
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      classifyId: Number,
      setClassifyId: Function
    },

    computed: {
      ...mapState(['classifys'])
    }
  }
</script>
<style lang="stylus" scoped>
  .classify
    width 1226px
    height 81px
    margin 0 auto
    background-color #fff
    display flex
    align-items center
    font-size 14px
    span
      color #b0b0b0
      width 72px
      height 21px
    div
      width 172px
      height 45px
      line-height 45px
      cursor pointer
      &:hover
        color #ff6700
    .active
      color #ff6700

</style>
