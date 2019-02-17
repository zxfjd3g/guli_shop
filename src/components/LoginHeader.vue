<template>
  <div id="lh">
    <!--<div class="user">
      <ul class="selector">
        <li>
          <a href="javascript:;">
            个人中心
          </a>
        </li>
        <li>
          <a href="javascript:;">
            我的订单
          </a>
        </li>
        <li>
          <a href="javascript:;">
            账号设置
          </a>
        </li>
        <li>
          <a href="javascript:;">
            退出登录
          </a>
        </li>
      </ul>
      <a href="javascript:;" class="username">
        七月
        <i class="iconfont">&#xe616;</i>
      </a>
    </div>-->
    <ul class="login">
      <li><a href="">登录</a></li>
      <li><a href="">注册</a></li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #lh
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

</style>
