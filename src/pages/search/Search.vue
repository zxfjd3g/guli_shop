<template>
  <div id="search">
    <Nav/>
    <!--分类过滤-->
    <ClassifySelector :searchProps="searchProps"/>

    <!--排序-->
    <SortSelector/>

    <!-- danpin -->
    <div class="danpin center">
      <div class="main center">
        <ProductCard v-for="product in searchProductDetails" :key="product.id" :product="product"/>
        <div class="clear"></div>
      </div>
      <Pages/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Pages from '../../components/Pages.vue'
  import ClassifySelector from '../../components/ClassifySelector.vue'
  import SortSelector from '../../components/SortSelector.vue'

  export default {
    mounted(){
      this.$store.dispatch('getSearch');
    },
    computed:{
      ...mapState(["searchInfo"]),
      searchProductDetails(){
          let productDetails=this.searchInfo.productDetails;
          return productDetails;
      },
      searchProps(){
          let props=this.searchInfo.props;
          return props;
      },
    },
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
