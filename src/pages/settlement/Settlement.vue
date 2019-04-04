<template>
  <div id="settlement">
    <div class="top-1">
      <img src="/static/image/buy/logo2.png" class="img1"/><span>结算页</span>
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
      <div class="top_1">
        <div class="to_right">
          <h5>商家：XXX</h5>
          <div class="yun1">
            <img src="/static/image/buy/im_03.png" class="yun"/>
            <div class="mi">
              <p>小米（MI）小米手环2 智能运动 心率检测 来 <span style="color: red;"> ￥ 149.00</span> <span> x1 </span> <span>有货</span></p>
              <p>电提醒 久坐提醒 LED显示器 时间显示 防水记 <span>0.095kg</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="xia">
        <div class="qian">
          <p class="qian_y">
            <span>1</span>
            <span>件商品，总商品金额：</span>
            <span class="rmb">￥28.90</span>
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
          <p class="yfze_a"><span class="z">应付总额：</span><span class="hq">￥28.90</span></p>
          <p class="yfze_b">寄送至： 北京 朝阳区 三环到四环之间 朝阳北路复兴国际大厦23层麦田房产 IT-中心研发二部 收货人：赵存权 188****5052</p>
        </div>
        <button class="tijiao">提交订单</button>

      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  #settlement
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
      height 730px
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
      .top_1
        width 951px
        margin-left 30px
        margin-top 10px
        .to_left
          width 350px
          height 300px
          background #f7f7f7
          float left
          padding-left 23px
          & > *
            margin 2px 0
          h5
            margin 15px 10px 15px 0px
            font-size 14px
            color #666666
            .peisong
              font-size 12px
            .dui
              padding-left 200px
              color #4f9dd0
              font-size 12px
              img
                width 15px
                height 15px
                margin 2px 0px 0px 0px
          .box
            width 135px
            height 27px
            border 2px solid red
            line-height 27px
            font-size 12px
            text-align center
            color dimgray
            margin-bottom 20px
          .til
            color #a9a9a9
            font-size 14px
          .con
            font-size 12px
            color #666
          hr
            color #f6f6f6
            width 90%
            text-align center
            margin-top 3px
          .biao
            a
              font-size 12px
              color #0081c6
          .nul
            font-size 12px
            padding-left 92px
          .kg
            font-size 14px
            color #a9a9a9
            span
              color #a9a9a9
              font-size 14px
          .updata-1
            width 210px
            height 25px
            line-height 30px
            margin-left 100px
            margin-top 2px
            margin-bottom 5px
            border 1px #edd28b solid
            background #fff
            display flex
            justify-content space-around
            align-items center
            span
              font-size 12px
              color #0000ff
          .hh1
            width 94%
            height 1px
            background #e3e4e5
          .updata-2
            width 300px
            height 38px
            line-height 38px
            border 1px #e3e4e5 solid
            margin-bottom 5px
            margin-top 8px
            span
              color #9c64cc
              font-size 14px
            img
              float left
        .to_right
          width 575px
          background #f3fbfe
          float left
          display flex
          flex-direction column
          h5
            margin 10px
            font-size 12px
            color #666666
          div
            display flex
            margin-left 10px
            button
              color snow
              background red
              border none
              font-size 12px
              padding 1px 2.5px
            span
              font-size 12px
              color #666666
              margin-left 5px
          .yun1
            .yun
              width 90px
              height 90px
              margin 10px
            .mi
              display flex
              flex-direction column
              p
                color #666
                font-size 12px
                margin 5px
              .tui-1
                color #6679b3
                img
                  margin-right 5px
              span
                margin-left 30px
          p
            font-size 12px
            margin 10px
            .money
              font-size 12px
              font-weight bold
              margin-left 400px
              color red
          img
            float left
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
          margin-left 900px
          margin-top 10px
          text-align center
          background #e2383b
          border none
          color white
          font-size 20px
          width 100px
          height 40px
          padding 5px
          border-radius 5px
</style>
