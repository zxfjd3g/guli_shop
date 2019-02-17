<template>
  <div>
    <div class="top center">
      <div class="logo center">
        <a href="./index.html" target="_blank"><img src="/static/image/login/mistore_logo.png" alt=""></a>
      </div>
    </div>
    <form  method="post" action="./login.php" class="form center">
      <div class="login">
        <div class="login_center">
          <div class="login_top">
            <div class="left fl">会员登录</div>
            <div class="right fr">您还不是我们的会员？<a href="./register.html" target="_self">立即注册</a></div>
            <div class="clear"></div>
            <div class="xian center"></div>
          </div>
          <div class="login_main center">
            <div class="username">用户名:&nbsp;<input class="shurukuang" type="text" name="username" placeholder="请输入你的用户名"/></div>
            <div class="username">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input class="shurukuang" type="password" name="password" placeholder="请输入你的密码"/></div>
            <div class="username">
              <div class="left fl">验证码:&nbsp;<input class="yanzhengma" type="text" name="username" placeholder="请输入验证码"/></div>
              <div class="right fl"><img src="image/login/yanzhengma.jpg"></div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="login_submit">
            <input class="submit" type="submit" name="submit" value="立即登录" >
          </div>
          <div class="login_other">
            <div class="title">
              <span>其他登陆方式</span>
            </div>
            <a href="javascript:;">
              <i class="qq"></i>
              <span>QQ</span>
            </a>
            <a href="javascript:;">
              <i class="wx"></i>
              <span>微信</span>
            </a>
          </div>

        </div>
      </div>
    </form>
    <footer>
      <div class="copyright">简体 | 繁体 | English | 常见问题</div>
      <div class="copyright">小米公司版权所有-京ICP备10046444-<img src="image/login/ghs.png" alt="">京公网安备11010802020134号-京ICP证110507号</div>
    </footer>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus">
  /*样式初始化*/
  body,h1,h2,h3,h4,h5,h6
    font  12px "宋体",Times New Roman

  body
    background  rgb(20,33,42)

  /*预定义样式*/
  .w
    width  1000px
    margin  0 auto

  input
    &:focus
      border  2px solid orange

  /*用户登录*/
  .top
    width  100%
    height  100px
    background  #fff
    .logo
      width  1130px
      height  100px


  .form
    width  1130px
    height  588px
    background  url('/static/image/login/login_bg.jpg')no-repeat center center

  .login
    width  400px
    height  470px
    margin  30px auto
    background  #444
    color  #fff
    margin-right  0px
    border-radius  4px

    .login_center
      width  360px
      margin  10px auto

      .login_top
        margin  10px 0

        .left
          height  40px
          line-height  40px
          font-weight  bold
          font-size  20px


        .right
          height  40px
          line-height  40px
          font-size  13px

          a
            color  red
            font-weight  bold

            &:hover
              color  orange





      .login_main
        padding  5px 0

        .username
          font  16px Times New Roman
          height  40px
          line-height  40px
          margin  35px 0

          .shurukuang
            width  220px
            height  30px
            border  1px solid #ccc
            padding  5px 10px

            &:focus
              border  1px solid blue
              background  #f0ffff



          .yanzhengma
            width  100px
            height  30px
            border  1px solid #ccc
            padding  5px 10px

            &:focus
              border  1px solid blue
              background  #f0ffff



          .right
            margin-left  20px




      .login_submit
        .submit
          border  none
          width  240px
          height  45px
          margin-left  55px
          background  #ff6700
          color  #fff
          font-size  20px
          font-weight  bold
          letter-spacing  2px
          cursor  pointer
          border-radius  4px

          &:hover
            border  1px solid #fff

      .login_other
        width 100%
        margin-top 10px
        display flex
        flex-wrap wrap
        justify-content space-around
        .title
          position relative
          width 100%
          height 18px
          border-bottom 1px solid #fff
          font-size 14px
          span
            position absolute
            top 9px
            left: 138px
            background-color: #444;

        a
          display inline-block
          line-height 30px
          color: #fff
          margin-top 10px
          font-size 18px
          &:hover
            color:red
          i
            display block
            float left
            width 33px
            height 30px
            margin-right 10px
            background-image: url('/static/image/login/QQ-weixin.png');
            background-size:auto 100%
            &.qq
              background-position 0 0
            &.wx
              background-position -33px 0

  .xian
    height  2px
    background  #ff6700
    margin  8px 0

  /*设置按钮样式*/
  footer
    width  100%
    height  80px
    background  #fff
    padding  30px 0
    .copyright
      height  30px
      line-height  30px
      font-size  13px
      word-spacing  15px
      text-align  center
      & first-of-type
        margin-top  10px



</style>
