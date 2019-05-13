<template>
    <div id="buyItem">
      <div class="to_right">
        <h5>商家：{{good.productBrand}}旗舰店</h5>
        <div class="yun1">
          <img :src="good.productPic" class="yun"/>
          <div class="mi">
            <div id="productName">
              {{good.productName}}
            </div>
            <div id="productInfo">
              <span style="color: red;"> ￥ {{good.newPrice}}</span> 
              <span> x{{good.num}} </span> 
              <span>有货</span>
              <span>0.095kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

  export default {
    props:{
      good:Object
    }
  }
</script>
<style lang="stylus" scoped>
#buyItem
      width 951px
      margin-left 30px
      margin-top 10px
      overflow hidden
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
            font-size 12px
            #productName
              width 160px
            #productInfo
              color #666
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
</style>
