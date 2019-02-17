<template>
  <div id="cart">
    <div class="banner_x center">
      <a href="./index.html" target="_blank">
        <div class="logo fl"></div>
      </a>

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
            <input type="checkbox" value="quanxuan" class="quanxuan"/>全选
          </div>
          <div class="sub_top fl">商品名称</div>
          <div class="sub_top fl">单价</div>
          <div class="sub_top fl">数量</div>
          <div class="sub_top fl">小计</div>
          <div class="sub_top fr">操作</div>
          <div class="clear"></div>
        </div>
        <div class="content2 center">
          <div class="sub_content fl ">
            <input type="checkbox" value="quanxuan" class="quanxuan"/>
          </div>
          <div class="sub_content fl"><img src="/static/image/cart/gwc_xiaomi6.jpg"></div>
          <div class="sub_content fl ft20">小米6全网通6GB内存+64GB 亮黑色</div>
          <div class="sub_content fl ">2499元</div>
          <div class="sub_content fl">
            <input class="shuliang" type="number" value="1" step="1" min="1">
          </div>
          <div class="sub_content fl">2499元</div>
          <div class="sub_content fl"><a href="">×</a></div>
          <div class="clear"></div>
        </div>
        <div class="content2 center">
          <div class="sub_content fl ">
            <input type="checkbox" value="quanxuan" class="quanxuan"/>
          </div>
          <div class="sub_content fl"><img src="/static/image/cart/gwc_xiaomi6.jpg"></div>
          <div class="sub_content fl ft20">小米6全网通6GB内存+64GB 亮黑色</div>
          <div class="sub_content fl ">2499元</div>
          <div class="sub_content fl">
            <input class="shuliang" type="number" value="1" step="1" min="1">
          </div>
          <div class="sub_content fl">2499元</div>
          <div class="sub_content fl"><a href="">×</a></div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="jiesuandan mt20 center">
        <div class="tishi fl ml20">
          <ul>
            <li><a href="./liebiao.html">继续购物</a></li>
            <li>|</li>
            <li>共<span>2</span>件商品，已选择<span>1</span>件</li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="jiesuan fr">
          <div class="jiesuanjiage fl">合计（不含运费）：<span>2499.00元</span></div>
          <div class="jsanniu fr"><input class="jsan" type="submit" name="jiesuan" value="去结算"/></div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import ShopGood from "../../components/ShopGood.vue";

  export default {}
</script>
<style lang="stylus" scoped>
  #cart
    .banner_x
      width 1226px
      height 100px
      .logo
        background: url('/static/image/nav/logo_top.png') no-repeat center center;
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
      height: 400px;
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

        .content2
          width: 1226px;
          height: 120px;
          border-top: 1px solid #ccc;
          .sub_content
            width: 50px;
            height: 120px;
            line-height: 120px;
            margin-right: 0px;
            white-space nowrap
            img
              vertical-align: middle;

            &:nth-of-type(1)
              margin-left: 30px;

            &:nth-of-type(2)
              margin-left: 35px;

            &:nth-of-type(3)
              margin-left: 55px;
              width: 330px;

            &:nth-of-type(4)
              margin-left: 55px;

            &:nth-of-type(5)
              margin-left: 115px;

            &:nth-of-type(6)
              margin-left: 115px;
              color: #ff6700;

            &:nth-of-type(7)
              margin-left: 145px;
              font-size: 25px;

            .shuliang
              width: 70px;
              height: 35px;
              border: 2px solid #ccc;
              text-align: center;
              font-size: 16px;
              color: #ff6700;

            a
              display: block;
              width: 20px;
              height: 20px;
              border-radius: 10px;
              color: #000;
              &:hover
                color: #ff6700;

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
