<template>
<div id="buy">
  <div class="top-1">
    <img src="/static/image/nav/logo2.png" class="img1"/><span>结算页</span>
    <!--右侧绿色-->
    <img src="/static/image/buy/08.png" class="img2"/>
  </div>
  <p class="p1">填写并核对订单信息</p>
  <div class="section">
    <!--收货人信息-->
    <div class="top-2">
      <span>收货人信息</span>
      <span>新增收货地址</span>
    </div>

    <!--地址-->
    <div class="top-3">
      <p>家里</p><span>齐天大圣  北京市  昌平区城区晨曦小区-16号楼 吉利大学  150****2245</span>
    </div>
    <p class="p2">更多地址︾</p>
    <div class="hh1"></div>

    <h4 class="h4">支付方式</h4>
    <div class="top-6">
      <p><span>惠</span>在线支付</p>
    </div>
    <div class="hh1"></div>

    <h4 class="h4" style="margin-top: 5px;">送货清单</h4>
    <BuyItem v-for="(good) in buyOrderList" :good="good" :key="good.productId" />
    <div class="xia">
      <div class="qian">
        <p class="qian_y">
          <span>{{totalNum}}</span>
          <span>件商品，总商品金额：</span>
          <span class="rmb">￥{{totalPrice}}</span>
        </p>
        <p class="qian_y">
          <span>返现：</span>
          <span class="rmb">  -￥0.00</span>
        </p>
        <p class="qian_y">
          <span>运费： </span>
          <span class="rmb"> &nbsp ￥0.00</span>
        </p>
        <p class="qian_y">
          <span>服务费： </span>
          <span class="rmb"> &nbsp ￥0.00</span>
        </p>
        <p class="qian_y">
          <span>退换无忧： </span>
          <span class="rmb"> &nbsp ￥0.00</span>
        </p>

      </div>

      <div class="yfze">
        <p class="yfze_a"><span class="z">应付总额：</span><span class="hq">￥{{totalPrice}}</span></p>
        <p class="yfze_b">寄送至： 北京 朝阳区 三环到四环之间 朝阳北路复兴国际大厦23层麦田房产 IT-中心研发二部 收货人：赵存权 188****5052</p>
      </div>
      <button class="tijiao">提交订单</button>

    </div>
  </div>
</div>

</template>

<script>
import {mapState} from 'vuex';
import BuyItem from '../../components/BuyItem';
  export default {
    computed:{
      ...mapState(['buyOrderList']),
      totalNum(){
        return this.buyOrderList.reduce((pre,item)=>{
          return pre+item.num;
        },0)
      },
      totalPrice(){
        return this.buyOrderList.reduce((pre,item)=>{
          return pre+item.num*item.newPrice;
        },0)
      },
    },
    components:{
      BuyItem
    }
  }
</script>

<style lang="stylus" scoped>
#buy
  width 100%
  .top-1
    position relative
    .img1
      width 50px
      height 50px
      margin 20px 150px
    span
      font-size 22px
      position absolute
      left 220px
      top 30px
    .img2
      margin-left 220px
      position absolute
      top 30px
      right 300px
  .p1
    color dimgray
    text-indent 160px
  .section
    width 1040px
    overflow hidden
    border 1px solid #e3e4e5
    margin 10px 160px
    .top-2
      display flex
      justify-content space-between
      span
        font-size 14px
        padding 10px 25px
        &:first-child
          font-weight 600
        &:last-child
          color cornflowerblue
    .top-3
      width 600px
      height 50px
      display flex
      align-items center
      margin-left 50px
      p
        width 135px
        height 27px
        border 2px solid red
        line-height 27px
        font-size 12px
        text-align center
        color dimgray
      span
        font-size 13px
        color gray
        margin-left 10px
    .p2
      font-size 10px
      color dimgray
      text-indent 50px
      margin-top 8px
    .hh1
      width 94%
      height 1px
      margin 12px 30px
      background #e3e4e5
      width 94%
      height 1px
      margin 15px 30px
      background #e3e4e5
    .h4
      font-size 14px
      text-indent 30px
    .top-6
      display flex
      margin-left 50px
      margin-top 15px
      p
        width 100px
        height 25px
        border 2px solid #e3e4e5
        font-size 13px
        line-height 25px
        text-align center
        color dimgray
        margin 5px
        &:last-child
          border 2px solid red
          display flex
          justify-content space-around
          align-items center
          span
            width 15px
            height 15px
            background #e4393c
            color white
            font-size 10px
            line-height 15px
            text-align center
    .xia
      width 1000px
      float left
      .qian
        .qian_y
          text-align right
          margin-top 5px
          span
            font-size 12px
            color #666666
          .rmb
            margin-left 50px
      .yfze
        background #f4f4f4
        height 80px
        width 1000px
        margin-left 10px
        margin-top 20px
        padding-right 20px
        .yfze_a
          text-align right
          margin-top 10px
          .z
            font-size 12px
            color #666666
          .hq
            font-size 20px
            color red
            margin-left 44px
        .yfze_b
          text-align right
          margin-top 10px
          font-size 12px
          color #999999
      .tijiao
        margin:10px 0 10px 900px
        text-align center
        background #e2383b
        cursor pointer
        border none
        color white
        font-size 20px
        width 100px
        height 40px
        padding 5px
        border-radius 5px
</style>
