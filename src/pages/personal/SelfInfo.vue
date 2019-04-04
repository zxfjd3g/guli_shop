<template>
  <div id="selfinfo">
    <div class="grzlbt ml40">我的资料</div>
    <div class="subgrzl ml40"><span>昵称</span><span>zhangsanfeng</span><span><a href="">编辑</a></span></div>
    <div class="subgrzl ml40"><span>手机号</span><span>156****7417</span><span><a href="">编辑</a></span></div>
    <div class="subgrzl ml40"><span>密码</span><span>************</span><span><a href="">编辑</a></span></div>
    <div class="subgrzl ml40"><span>个性签名</span><span>一支穿云箭，千军万马来相见！</span><span><a href="">编辑</a></span></div>
    <div class="subgrzl ml40"><span>我的爱好</span><span>游戏，音乐，旅游，健身</span><span><a href="">编辑</a></span></div>
    <div class="subgrzl ml40"><span>收货地址</span><span>浙江省杭州市江干区19号大街571号</span><span><a href="">编辑</a></span></div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" scoped>
  #selfinfo
    .grzlbt {
      width: 938px;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      color: rgb(117, 117, 117);
    }
    .subgrzl {
      height: 45px;
      line-height: 45px;
      width: 900px;
      background: rgb(253, 253, 253);
      border: 1px solid #aaa;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 3px;
      span {
        &:nth-of-type(1) {
          display: inline-block;
          font-size: 15px;
          font-weight: bold;
          color: rgb(117, 117, 117);
          width: 70px;
          height: 45px;
          line-height: 45px;
          padding-left: 20px;
        }
        &:nth-of-type(2) {
          display: inline-block;
          font-size: 15px;
          color: rgb(117, 117, 117);
          width: 480px;
          height: 45px;
          line-height: 45px;
          padding-left: 120px;
        }
        &:nth-of-type(3) {
          display: inline-block;
          font-size: 15px;
          width: 160px;
          height: 45px;
          line-height: 45px;
          text-align: right;
        }
        a {
          color: teal;
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
</style>
