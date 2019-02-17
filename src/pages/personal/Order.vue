<template>
  <div id="order">
    <div class="ddzxbt">交易订单</div>
    <OrderCard/>
    <OrderCard/>
  </div>
</template>
<script>
  import OrderCard from '../../components/OrderCard.vue'
  export default {
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
