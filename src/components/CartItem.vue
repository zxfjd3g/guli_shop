<template>
  <div class="content2 center">
    <div class="sub_content fl ">
      <input type="checkbox" value="quanxuan" class="quanxuan"/>
    </div>
    <div class="sub_content fl"><img src="/static/image/cart/gwc_xiaomi6.jpg"></div>
    <div class="sub_content fl ft20">小米6全网通6GB内存+64GB 亮黑色</div>
    <div class="sub_content fl ">2499元</div>
    <div class="sub_content fl">
      <input class="shuliang" type="number" value="1" step="1" min="1">
    </div>
    <div class="sub_content fl">2499元</div>
    <div class="sub_content fl"><a href="">×</a></div>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
  .content2
    width: 1226px;
    height: 120px;
    border-top: 1px solid #ccc;
    .sub_content
      width: 50px;
      height: 120px;
      line-height: 120px;
      margin-right: 0px;
      white-space nowrap
      img
        vertical-align: middle;

      &:nth-of-type(1)
        margin-left: 30px;

      &:nth-of-type(2)
        margin-left: 35px;

      &:nth-of-type(3)
        margin-left: 55px;
        width: 330px;

      &:nth-of-type(4)
        margin-left: 55px;

      &:nth-of-type(5)
        margin-left: 115px;

      &:nth-of-type(6)
        margin-left: 115px;
        color: #ff6700;

      &:nth-of-type(7)
        margin-left: 145px;
        font-size: 25px;

      .shuliang
        width: 70px;
        height: 35px;
        border: 2px solid #ccc;
        text-align: center;
        font-size: 16px;
        color: #ff6700;

      a
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        color: #000;
        &:hover
          color: #ff6700;

</style>


