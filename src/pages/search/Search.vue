<template>
  <div id="search">
    <Nav/>
    <!--分类过滤-->
    <ClassifySelector/>

    <!--排序-->
    <SortSelector/>

    <!-- danpin -->
    <div class="danpin center">
      <div class="main center">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        <div class="clear"></div>
      </div>
      <Pages/>
    </div>
  </div>
</template>

<script>
  import Pages from '../../components/Pages.vue'
  import ClassifySelector from '../../components/ClassifySelector.vue'
  import SortSelector from '../../components/SortSelector.vue'

  export default {
    components: {
      Pages,
      ClassifySelector,
      SortSelector
    }
  }
</script>

<style lang="stylus" scoped>
  #search
    .danpin
      .main
        width: 1226px;
</style>
