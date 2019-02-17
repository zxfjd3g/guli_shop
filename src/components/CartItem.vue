<template>
  <div class="content2 center">
    <div class="sub_content fl ">
      <input type="checkbox" v-model="isBuy" class="quanxuan" @click="checkBuy"/>
    </div>
    <div class="sub_content fl">
      <img :src="good.imgSrc">
    </div>
    <div class="sub_content fl ft20">{{good.name}}</div>
    <div class="sub_content fl ">{{good.price}}元</div>
    <div class="sub_content fl">
      <input class="shuliang" v-model="count" type="number" @mouseout="updateGood" step="1" min="1">
    </div>
    <div class="sub_content fl">{{totalPrice}}元</div>
    <div class="sub_content fl">
      <a @click="remove">×</a>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {
    props: {
      good: Object,
      addBuy: Function,
      removeBuy: Function,
      removeGood: Function
    },
    data() {
      return {
        count: this.good.count,
        isBuy: false
      };
    },
    computed: {
      totalPrice() {
        return this.count * this.good.price;
      }
    },
    methods: {
      updateGood() {
        let shopgood = JSON.parse(localStorage.getItem("shopgood"));
        const count = this.count * 1;
        shopgood[this.good.id].count = count;
        this.good.count = count;
        localStorage.setItem("shopgood", JSON.stringify(shopgood));
      },
      remove() {
        const {good, removeGood} = this;
        if (confirm("确定要从购物车中删除该商品吗?")) {
          removeGood(good);
          //接下来删除localStorage中的商品
        }
      },
      checkBuy() {
        this.isBuy = !this.isBuy;
        const {isBuy, good, addBuy, removeBuy} = this;
        if (isBuy) {
          addBuy(good);
        } else {
          removeBuy(good);
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content2
    width 1226px
    height 120px
    border-top 1px solid #ccc
    .sub_content
      width 60px
      height 120px
      line-height 120px
      margin-right 0px
      white-space nowrap
      .quanxuan
        width 18px
        height 18px
        border 1px solid #ccc
        background none
      img
        vertical-align middle
        width 80px
        height 80px
      &:nth-of-type(1)
        margin-left 30px
      &:nth-of-type(2)
        margin-left 35px
      &:nth-of-type(3)
        margin-left 55px
        width 330px
      &:nth-of-type(4)
        margin-left 40px
      &:nth-of-type(5)
        margin-left 115px
      &:nth-of-type(6)
        margin-left 115px
        color #ff6700
      &:nth-of-type(7)
        margin-left 115px
        font-size 25px
      .shuliang
        width 70px
        height 35px
        border 2px solid #ccc
        text-align center
        font-size 16px
        color #ff6700
      a
        display block
        width 20px
        height 20px
        border-radius 10px
        color #000
        cursor pointer
        &:hover
          color #ff6700

</style>


