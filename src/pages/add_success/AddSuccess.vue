<template>
  <div id="add_success">
    <Nav/>
    <div class="w" id="result">
      <div class="m succeed-box">
        <div class="mc success-cont">
          <div class="success-lcol">
            <div class="success-top"><b class="succ-icon"></b>
              <h3 class="ftx-02">商品已成功加入购物车</h3></div>
            <div class="p-item">
              <div class="p-img">
                <a href="javascript:;" target="_blank"><img :src="imgSrc"></a>
              </div>
              <div class="p-info">
                <div class="p-name">
                  <a href="javascript:;" title="TCL 55A950C 55英寸32核人工智能 HDR曲面超薄4K电视金属机身（枪色）">{{name}}</a>
                </div>
                <div class="p-extra"><span class="txt" title="55吋 超薄曲面 人工智能">套餐：{{group}}</span><span class="txt">/  数量：1</span></div>
              </div>
              <div class="clr"></div>
            </div>
          </div>
          <div class="success-btns success-btns-new">
            <div class="success-ad">
              <a href="#none"></a>
            </div>
            <div class="clr"></div>
            <div class="bg_shop">
              <a class="btn-tobback" href="javascript:;" @click="$router.go(-1)">查看商品详情</a>
              <a class="btn-addtocart" href="javascript:;" id="GotoShoppingCart" @click="$router.replace('/cart')"><b></b>去购物车结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    props:["imgSrc","name","group","price"],
    computed:{
      ...mapState(['productInfo'])
    },
    methods:{
    }
  }
</script>

<style lang="stylus" scoped>
  #add_success
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    .w
      width 1210px
      margin 0 auto
      background-color: #f5f5f5;
      .m
        overflow hidden
        zoom 1
        width 1210px
        height 127px
      .succeed-box
        .success-cont
          display inline-block
          display block
          font-family "Microsoft YaHei"
          .success-lcol
            float left
            .success-top
              position relative
              padding-left 35px
              margin 20px 0
              .succ-icon
                position absolute
                top 0
                left 0
                display block
                width 25px
                height 25px
                overflow hidden
                background url(//misc.360buyimg.com/user/cart/widget/addtocart-201608/i/addtocart-icons.png) 0 0 no-repeat
              h3
                font-size 18px
                line-height 25px
                font-weight 400
                color #71b247
            .p-item
              width 592px
              height 62px
              .p-img
                float left
                width 60px
                height 60px
                margin-right 10px
                border 1px solid #e8e8e8
                a
                  display block
                  height 100%
                  width 100%
                  img
                    display block
                    height 100%
                    width 100%
              .p-info
                float left
                width 520px
                margin 0
                .p-name
                  width 100%
                  line-height 28px
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                  font-size 14px
                  a
                    color #333
                    text-decoration none
                    display inline-block
                    &:hover
                      color red
                .p-extra
                  display inline-block
                  color #aaa
                  .txt
                    float left
                    max-width 135px
                    margin-right 5px
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
              .clr
                display block
                overflow hidden
                clear both
                height 0
                line-height 0
                font-size 0
          .success-btns
            float right
            font-size 0
            overflow hidden
            .success-ad
              float right
              height 70px
              width 106px
              margin 10px 0
              a
                display inline-block
                color #666
                text-decoration none
            .clr
              display block
              overflow hidden
              clear both
              height 0
              line-height 0
              font-size 0
            .bg_shop
              width 336px
              height 36px
              .btn-tobback
                padding 0 30px
                margin-right 10px
                background #fff
                color #e4393c
                border 1px solid #fff
                display inline-block
                height 34px
                line-height 36px
                font-size 16px
                vertical-align middle
                text-decoration none
                &:hover
                  border 1px solid red
              .btn-addtocart
                position relative
                padding 0 30px
                padding-left 30px
                background #e4393c
                border 1px solid #e4393c
                color #fff
                display inline-block
                height 34px
                line-height 36px
                font-size 16px
                vertical-align middle
                text-decoration none
                b
                  position absolute
                  top 8px
                  right 15px
                  width 10px
                  height 20px
                  overflow hidden
                  background url(//misc.360buyimg.com/user/cart/widget/addtocart-201608/i/addtocart-icons.png) -20px -81px no-repeat
                &:hover
                  background #c91623



</style>
