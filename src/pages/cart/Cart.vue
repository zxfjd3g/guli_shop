<template>
  <div id="cart">
    <div class="banner_x center">
      <router-link to="/">
        <div class="logo fl"></div>
      </router-link>
      <div class="wdgwc fl ml40">我的购物车</div>
      <div class="wxts fl ml20">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
      <div class="dlzc fr">
        <LoginHeader/>
      </div>
      <div class="clear"></div>
    </div>
    <div class="xiantiao"></div>
    <div class="gwcxqbj">
      <div class="gwcxd center">
        <div class="top2 center">
          <div class="sub_top fl">
            <input type="checkbox" v-model="checkAll" class="quanxuan" @click="isCheckAll"/>全选
          </div>
          <div class="sub_top fl">商品名称</div>
          <div class="sub_top fl">单价</div>
          <div class="sub_top fl">数量</div>
          <div class="sub_top fl">小计</div>
          <div class="sub_top fr">操作</div>
          <div class="clear"></div>
        </div>
        <CartItem v-for="good in goods"
                  :good="good"
                  :key="good.productSkuId"
                  :addBuy="addBuy"
                  :removeBuy="removeBuy"
                  :removeGood="removeGood"
                  :ref="good.productSkuId"
        />
      </div>
      <div class="jiesuandan mt20 center">
        <div class="tishi fl ml20">
          <ul>
            <li><a href="./liebiao.html">继续购物</a></li>
            <li>|</li>
            <li>共<span>{{sum}}</span>件商品，已选择<span>{{selectCount}}</span>件</li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="jiesuan fr">
          <div class="jiesuanjiage fl">合计（不含运费）：<span>{{totalPrice}}元</span></div>
          <div class="jsanniu fr">
            <input class="jsan" type="submit" name="jiesuan" value="去结算" @click="toBuy"/>
            </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import CartItem from "../../components/CartItem.vue";

  export default {
    data() {
      return {
        goods: [],
        buyGoods: [],
        checkAll: false
      };
    },
    computed:{
      ...mapState(["cartList"]),
      sum() {
        return this.goods.reduce((pre, good) => {
          return pre + good.num;
        }, 0);
      },
      selectCount() {
        return this.buyGoods.reduce((pre, good) => {
          return pre + good.num;
        }, 0);
      },
      totalPrice() {
        return this.buyGoods.reduce((pre, good) => {
          return pre + good.num * good.price;
        }, 0);
      }
    },
    methods: {
      addBuy(good) {
        this.buyGoods.push(good);
        if (this.buyGoods.length == this.goods.length) {
          this.checkAll = true;
        }
        this.$store.dispatch('getCartCheck',{id:good.productSkuId,type:1,cb:this.cb});
      },
      removeBuy(good) {
        this.buyGoods = this.buyGoods.filter((item, index) => {
          return item.productSkuId !== good.productSkuId;
        });
        this.checkAll = false;
        this.$store.dispatch('getCartCheck',{id:good.productSkuId,type:0,cb:this.cb});
      },
      removeGood(good) {
        let shopgood = {};
        this.removeBuy(good);
        this.goods = this.goods.filter((item, index) => {
          return item.productSkuId !== good.productSkuId;
        });
        this.buyGoods = this.buyGoods.filter((item, index) => {
          return item.productSkuId !== good.productSkuId;
        });
        if (this.buyGoods.length == this.goods.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
        this.goods.forEach((good, index) => {
          shopgood[good.productSkuId] = good;
        })
        this.$store.dispatch('getCartDelete',{id:good.productSkuId,cb:this.cb});
      },
      isCheckAll() {
        this.checkAll = !this.checkAll;
        const {checkAll, $refs, goods} = this;
        let refs = Object.values($refs);
        if (checkAll) {
          this.buyGoods = goods;
        } else {
          this.buyGoods = [];
        }
        refs.forEach((item, index) => {
          item[0].isBuy = checkAll;
        });
        this.$store.dispatch('getCartCheckAll',{type:checkAll*1,cb:this.cb})
      },
      cb(msg){
        alert(msg);
      },
      toBuy(){
        this.$store.dispatch('getBuyOrderList',()=>{
          this.$router.push('/buy');
        })
      }
    },
    watch: {
      buyGoods() {
        const {buyGoods, goods} = this;
        if (buyGoods.length === goods.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
      },
      cartList(){
        this.goods=this.cartList.items;
      }
    },
    mounted(){
      this.$store.dispatch('getCartList');
    },
    components: {
      CartItem
    }
  }
</script>
<style lang="stylus" scoped>
  #cart
    .banner_x
      width 1226px
      height 100px
      .logo
        background: url('/static/image/nav/logo2.png') no-repeat center center;
        background-size:100%;
        width: 50px;
        height: 100px;

      .wdgwc
        height: 100px;
        line-height: 100px;
        font-weight: bold;
        font-size: 24px;

      .wxts
        height: 90px;
        line-height: 105px;
        font-size: 12px;
        color: #777;

      .dlzc
        height: 100px;
        line-height: 100px;
        display flex
        align-items center
        .user
          width: 120px
          height: 40px
          line-height 40px
          font-size 12px
          text-align: center
          position relative
          &:hover
            .username
              color: #ff6700
              background-color: #fff
            .selector
              padding: 7px 0
              height 120px
          .username
            display: block
            width: 100%
            height: 100%
            line-height: 40px
            color: #b0b0b0
            position relative
            z-index 201
          .selector
            position absolute
            left 0
            top 40px
            width: 100%
            z-index 200
            box-shadow 0 2px 10px rgba(0, 0, 0, 0.15)
            height: 0
            background-color: #fff;
            overflow hidden
            transition all 0.2s
            li
              width 100%
              height 30px
              &:hover
                a
                  color: #ff6700
                  background-color: #fafafa
              a
                display: block
                width 100%
                height 100%
                line-height: 30px
                padding: 0
                border 0

        .login
          display: flex
          align-items: center
          width: 81px
          height: 40px
          li
            a
              display: flex
              align-items: center
              height: 12px
              font-size: 12px
              color: #b0b0b0
              padding: 0 8px
              border-right: 1px solid #b0b0b0

            &:last-of-type
              a
                border-right: none

    .xiantiao
      width: 100%;
      height: 2px;
      background: #ff6700;
    .gwcxqbj
      width: 100%;
      // height: 400px;
      background: rgb(245, 245, 245);
      padding-bottom: 20px;
      .gwcxd
        background: #fff;
        width: 1226px;
        height: auto;
        padding-top: 30px;
        .top2
          width: 1226px;
          height: 70px;
          .sub_top
            width: 100px;
            height: 70px;
            line-height: 36px;
            margin-right: 0px;
            margin-top: 0px;
            margin-left: 30px;
            &:nth-of-type(2)
              margin-left: 100px;

            &:nth-of-type(3)
              margin-left: 300px;

            &:nth-of-type(4)
              margin-left: 60px;

            &:nth-of-type(5)
              margin-left: 60px;

            .quanxuan
              width: 18px;
              height: 18px;
              border: 1px solid #ccc;
              background: none;
        .sub_content
          .quanxuan
            width: 18px;
            height: 18px;
            border: 1px solid #ccc;
            background: none;

      /*结算单*/
      .jiesuandan
        width: 1226px;
        height: 50px;
        background: #fff;
        .tishi
          width: 400px;
          height: 50px;
          line-height: 50px;
          ul
            li
              float: left;
              font-size: 14px;
              display: inline-block;
              padding: 0 10px;
              color: #666;
              a
                color: #666;
                &:hover
                  color: #ff6700;

              span
                display: inline-block;
                color: #ff6700;
                margin: 0 4px;

        .jiesuan
          width: 500px;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #ff6700;
          .jiesuanjiage
            span
              font-size: 24px;
              font-weight: bold;

          .jsanniu
            .jsan
              width: 200px;
              height: 50px;
              color: #fff;
              background: rgb(255, 103, 0);
              font-size: 20px;
              border: none;
              cursor: pointer;
              &:hover
                background: rgb(242, 88, 7);


</style>
