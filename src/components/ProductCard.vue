<template>
  <div class="pc">
    <div class="sub_mingxing">
      <a href="./xiangqing.html" target="_blank">
        <img :src="product.imgPath[1]" alt="">
      </a>
    </div>
    <div class="pinpai">
      <a href="./xiangqing.html" target="_blank">{{product.name}}</a>
    </div>
    <div class="youhui">5.16早10点开售</div>
    <div class="jiage">{{product.price}}元</div>
  </div>
</template>
<script>
  export default {
    props:{
      product:Object
    }
  }
</script>
<style lang="stylus" scoped>
  .pc
    float left
    width:230px;
    height: 339px;
    background: rgb(250,250,250);
    border:2px solid #fff;
    cursor:pointer;
    margin-bottom 20px
    &:hover
      border-color:red
    .sub_mingxing
      padding: 37px;
      a
        img
          display: block;
          width: 160px;
          height: 160px;
          opacity: 0.85;
          &:hover
            width: 160px;
            height: 160px;
            opacity: 1;




    .pinpai
      width: 234px;
      height: 14px;
      line-height: 14px;
      text-align: center;
      margin-top: -10px;
      a
        font-size: 14px;
        color: #333;


    .youhui
      width: 234px;
      height: 12px;
      line-height: 12px;
      margin: 15px 0;
      font-size: 12px;
      color: rgb(176,176,176);
      text-align: center;

    .jiage
      font-size: 14px;
      text-align: center;
      color: #ff6709;


</style>
