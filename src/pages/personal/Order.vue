<template>
  <div id="order">
    <div class="ddzxbt">交易订单</div>
    <OrderCard v-for="(order,index) in orderList" :key="index" :order="order"/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import OrderCard from '../../components/OrderCard.vue'
  export default {
    computed:{
      ...mapState(['orderList'])
    },
    mounted(){
      this.$store.dispatch('getOrderList');
    },
    components: {
      OrderCard
    }
  }
</script>
<style lang="stylus" scoped>
  #order
    .ddzxbt {
      width: 938px;
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      font-weight: bold;
      color: rgb(117,117,117);
      padding-left: 40px;
      border-bottom: 1px solid #ccc;
    }
</style>
