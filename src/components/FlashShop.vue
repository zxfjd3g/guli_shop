<template>
  <div id="flash">
    <h2>小米闪购</h2>
    <ul>
      <li class="time">
        <a href="javascript:;">
          <p class="name">14:00 场</p>
          <img src="/static/image/flash/flashshop.png" alt=""/>
          <p class="text">距离结束还有</p>
          <div class="flashTime">
            <div class="box">00</div>
            <div class="dosh">:</div>
            <div class="box">40</div>
            <div class="dosh">:</div>
            <div class="box">32</div>
          </div>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="/static/image/flash/pinpai1.png" alt=""/>
          <p class="name">小米MIX</p>
          <p class="discount">5月9日-21日享花呗12期分期免息</p>
          <p class="price">3499元起</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="/static/image/flash/pinpai2.png" alt=""/>
          <p class="name">小米MIX</p>
          <p class="discount">5月9日-21日享花呗12期分期免息</p>
          <p class="price">3499元起</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="/static/image/flash/pinpai3.png" alt=""/>
          <p class="name">小米MIX</p>
          <p class="discount">5月9日-21日享花呗12期分期免息</p>
          <p class="price">3499元起</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="/static/image/flash/pinpai4.png" alt=""/>
          <p class="name">小米MIX</p>
          <p class="discount">5月9日-21日享花呗12期分期免息</p>
          <p class="price">3499元起</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #flash
    width: 1226px
    flex-shrink: 0
    height: 398px
    margin-top: 20px
    & > h2
      height: 58px
      line-height: 58px
    ul
      display: flex
      justify-content: space-between
      li
        width: 234px
        height: 340px
        background-color: #fafafa
        border-top: 1px solid orange
        &:nth-child(2)
          border-color: green

        &:nth-child(3)
          border-color: blue

        &:nth-child(4)
          border-color: red

        &:nth-child(5)
          border-color: teal

        a
          display: block
          font-size: 14px
          text-align: center
          img
            width: 160px
            height: 160px
            opacity: 0.8
            margin: 37px

          .discount
            font-size: 12px
            color: #b0b0b0
            margin: 15px 0

          .price
            color: #ff6709

          &:hover
            img
              opacity: 1
    .time
      background-color: #f1eded
      .name
        margin-top 53px
        font-size 21px
        color: #ef3a3b
      img
        width 34px
        height 53px
      .text
        font-size 15px
        color: rgba(0, 0, 0, 0.54)
      .flashTime
        margin 28px 33px 0
        color #fff
        font-size: 24px
        line-height 46px
        display: flex
        justify-content center
        .box
          width: 46px
          height: 46px
          background-color: #605751
        .dosh
          height: 46px
          font-size: 28px
          color: #605751

</style>
