<template>
  <div id="search">
    <Nav/>
    <!--分类过滤-->
    <ClassifySelector :brand="searchInfo.brand" :catelog="searchInfo.catelog" :attrs="searchInfo.attrs" :pageSize="pageSize"
                      :selectBrand="selectBrand" :selectCateLog="selectCateLog" :selectAttrs="selectAttrs" :setSearchData="setSearchData"/>

    <!--排序-->
    <SortSelector/>

    <!-- danpin -->
    <div class="danpin center">
      <div class="main center">
        <ProductCard v-for="product in searchProductDetails" :key="product.id" :product="product"/>
        <div class="clear"></div>
      </div>
      <Pages :total="searchInfo.total" :setPageNum="setPageNum" :pageNum="pageNum" :pageSize="pageSize"
              :selectBrand="selectBrand" :selectCateLog="selectCateLog" :selectAttrs="selectAttrs"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Pages from '../../components/Pages.vue'
  import ClassifySelector from '../../components/ClassifySelector.vue'
  import SortSelector from '../../components/SortSelector.vue'

  export default {
    // mounted(){
    //   this.$store.dispatch('getSearch');
    // },
    data(){
      return {
        pageNum:1,
        pageSize:1,
        selectBrand:[],
        selectCateLog:[],
        selectAttrs:[]
      };
    },
    methods:{
      setPageNum(pageNum){
        this.pageNum=pageNum*1;
      },
      setSearchData(name,value){
        this[name]=value;
      }
    },
    computed:{
      ...mapState(["searchInfo"]),
      searchProductDetails(){
          let products=this.searchInfo.products;
          return products;
      }
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
