<template>
  <div id="regist">
    <div class="regist_center">
      <div class="regist_top">
        <div class="left fl">会员注册</div>
        <div class="right fr"><a href="./index.html" target="_self">小米商城</a></div>
        <div class="clear"></div>
        <div class="xian center"></div>
      </div>
      <div class="regist_main center">
        <div class="username">用&nbsp;&nbsp;户&nbsp;&nbsp;名:&nbsp;&nbsp;<input class="shurukuang" type="text" name="username" placeholder="请输入你的用户名"/><span>请不要输入汉字</span></div>
        <div class="username">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;&nbsp;<input class="shurukuang" type="password" name="password" placeholder="请输入你的密码"/><span>请输入6位以上字符</span></div>

        <div class="username">确认密码:&nbsp;&nbsp;<input class="shurukuang" type="password" name="repassword" placeholder="请确认你的密码"/><span>两次密码要输入一致哦</span></div>
        <div class="username">手&nbsp;&nbsp;机&nbsp;&nbsp;号:&nbsp;&nbsp;<input class="shurukuang" type="text" name="tel" placeholder="请填写正确的手机号"/><span>填写下手机号吧，方便我们联系您！</span></div>
        <div class="username">
          <div class="left fl">验&nbsp;&nbsp;证&nbsp;&nbsp;码:&nbsp;&nbsp;<input class="yanzhengma" type="text" name="username" placeholder="请输入验证码"/></div>
          <div class="right fl"><img src="/static/image/register/yanzhengma.jpg"></div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="regist_submit">
        <input class="submit" type="submit" name="submit" value="立即注册" >
      </div>
    </div>
  </div>
</template>
<script>

  export default {}
</script>
<style lang="stylus">
  body {
    background: rgb(20,33,42);
  }
  /*预定义样式*/
  body,h1,h2,h3,h4,h5,h6
    font  12px "宋体",Times New Roman

  .w {
    width: 1000px;
    margin: 0 auto;
  }
  input {
    &:focus {
      border: 2px solid orange;
    }
  }
  /*用户注册*/
  #regist {
    width: 1000px;
    height: 550px;
    margin: 20px auto;
    background: #fff;
    color: #000;
    border-radius: 6px;
    .regist_center {
      width: 760px;
      margin: 10px auto;
      .regist_top {
        margin: 10px 0;
        .left {
          height: 40px;
          line-height: 40px;
          font-weight: bold;
          font-size: 20px;
        }
        .right {
          height: 40px;
          line-height: 40px;
          font-size: 13px;
          a {
            color: #ff6700;
            font-weight: bold;
            &:hover {
              color: orange;
            }
          }
        }
        .xian {
          height: 2px;
          background: #ff6700;
          margin: 8px auto;
        }
      }
      .regist_main {
        padding: 10px 0;
        padding-left: 45px;
        .username {
          font: 16px Times New Roman;
          height: 40px;
          line-height: 40px;
          margin: 20px 0;
          .shurukuang {
            width: 220px;
            height: 30px;
            border: 1px solid #ccc;
            padding: 5px 10px;
            &:focus {
              border: 1px solid blue;
              background: #f0ffff;
            }
          }
          .yanzhengma {
            width: 100px;
            height: 30px;
            border: 1px solid #ccc;
            padding: 5px 10px;
            &:focus {
              border: 1px solid blue;
              background: #f0ffff;
            }
          }
          .right {
            margin-left: 20px;
          }
          span {
            display: inline-block;
            margin-left: 20px;
            font-size: 12px;
            color: #ccc;
            font-weight: bold;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
      .regist_submit {
        margin: 20px auto;
        .submit {
          border: none;
          width: 440px;
          height: 45px;
          margin-left: 45px;
          background: #ff6700;
          color: #fff;
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 8px;
          cursor: pointer;
          &:hover {
            border: 1px solid #ccc;
          }
        }
      }

    }
  }

</style>
