<template>
  <header id="header">
    <div class="center">
      <ul class="fl">
        <li><a href="javascript:;">硅谷商城</a></li>
        <li><a href="javascript:;">HIUI</a></li>
        <li><a href="javascript:;">谷聊</a></li>
        <li><a href="javascript:;">游戏</a></li>
        <li><a href="javascript:;">多看阅读</a></li>
        <li><a href="javascript:;">云服务</a></li>
        <li><a href="javascript:;">金融</a></li>
        <li><a href="javascript:;">硅谷商城移动版</a></li>
        <li><a href="javascript:;">问题反馈</a></li>
        <li><a href="javascript:;">Select Region</a></li>
      </ul>
      <div class="fr">
        <LoginHeader/>
        <div class="shopcart" @click="ToCart">
          <i class="iconfont icon-cart"></i>
          购物车(3)
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    methods:{
      ToCart(){
        this.$router.push('/cart');
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #header
    display: flex
    justify-content: center
    width: 100%
    height: 40px
    background-color: #333
    .center
      width: 1226px
      height: 40px
      flex-shrink: 0
      display: flex
      justify-content: space-between
      align-items: center
      ul
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
      .fl
        flex-shrink: 0
        display: flex
        width: 612px
      .fr
        display: flex
        height: 40px
        .shopcart
          display: flex
          width: 120px
          font-size: 12px
          color: #fff
          margin: 0 20px
          justify-content: center
          align-items: center
          background-color: #ff6700
          cursor pointer
</style>
