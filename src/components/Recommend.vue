<template>
  <div id="recommend">
    <h2>为你推荐</h2>
    <a href="javascript:;" class="more">查看更多>></a>
    <ul>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
      <RecommendCard/>
    </ul>
  </div>
</template>

<script>
  import RecommendCard from './RecommendCard.vue'
  export default {
    components: {
      RecommendCard
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #recommend
    width: 1226px
    position relative
    flex-shrink: 0
    height: 672px
    margin-top: 20px
    background-color: #f5f5f5
    & > h2
      height: 58px
      line-height: 58px
    .more
      position absolute
      top 18px
      right 30px
      &:hover
        color red
    ul
      display: flex
      height: 614px
      justify-content: space-between
      align-content: space-between
      flex-wrap: wrap
</style>
