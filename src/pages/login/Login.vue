<template>
  <div id="login">
    <div class="top center">
      <div class="logo center">
        <router-link to="/"><img src="/static/image/login/logo.png" alt=""></router-link>
      </div>
    </div>
    <div class="form center">
      <div class="login">
        <div class="login_center" v-show="isLogin">
          <div class="login_top">
            <div class="left fl">会员登录</div>
            <div class="right fr">您还不是我们的会员？<a href="javascript:;" @click="isLogin=!isLogin">立即注册</a></div>
            <div class="clear"></div>
            <div class="xian center"></div>
          </div>
          <div class="login_main center">
            <div class="username">用户名:&nbsp;<input class="shurukuang" v-model="username" type="text" placeholder="请输入你的用户名"/>
            </div>
            <div class="username">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input class="shurukuang" v-model="password" type="password" placeholder="请输入你的密码"/></div>
          </div>
          <div class="login_submit">
            <input class="submit" type="button" value="立即登录" @click="ToLogin">
          </div>
          <div class="login_other">
            <div class="title">
              <span>其他登陆方式</span>
            </div>
            <a href="javascript:;" @click="ToLogin">
              <i class="qq"></i>
              <span>QQ</span>
            </a>
            <a href="javascript:;" @click="ToLogin">
              <i class="wx"></i>
              <span>微信</span>
            </a>
            <a href="javascript:;" @click="ToLogin">
              <i class="xl"></i>
              <span>新浪</span>
            </a>
          </div>
        </div>
        <div class="login_center" v-show="!isLogin">
          <div class="login_top">
            <div class="left fl">会员注册</div>
            <div class="right fr">您已有账号？<a href="javascript:;" @click="isLogin=!isLogin">请登录</a></div>
            <div class="clear"></div>
            <div class="xian center"></div>
          </div>
          <div class="login_main center">
            <div class="username">手机号:&nbsp;<input class="shurukuang" type="text" v-model="phone" placeholder="请输入你的用户名"/>
            </div>
            <div class="username">
              验证码:&nbsp;
              <input class="shurukuang yanzhengma" type="password" v-model="code" placeholder="请输入验证码"/>
              <input type="button" class="send" value="发送验证码">
            </div>
          </div>
          <div class="login_submit">
            <input class="submit" type="button" value="立即注册" @click="ToRegister">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isLogin:true,
        username:"",
        password:"",
        phone:"",
        code:""
      }
    },
    methods:{
      ToLogin(){
        let {username,password,cb} =this;
        this.$store.dispatch('getLogin',{username,password,cb})
      },
      ToRegister(){
        let {phone,code,cb} =this;
        this.$store.dispatch('getRegister',{phone,code,cb})
      },
      cb(){
        this.$router.replace('/');
      }
    },
  }
</script>
<style lang="stylus" scoped>
  #login
    background  rgb(20,33,42)
    .top
      width  100%
      height  100px
      background  #fff
      .logo
        width  1130px
        height  100px
        overflow hidden
        a
          display block
          margin-top 23px
          img 
            display block
            width 200px
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
        font  12px "宋体",Times New Roman

        .login_center
          width  360px
          margin  10px auto
          padding 30px 0

          &.hide
            display: none

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



            .xian
              height  2px
              background  #ff6700
              margin  8px 0

          .login_main
            padding  5px 0
            input
              &:focus
                border  2px solid orange


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

            .send
              width:100px
              height:42px
              margin-left:12px

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
                &.xl
                  background-image url('/static/image/login/xlwb.png');
                  background-size:auto 100%




</style>
