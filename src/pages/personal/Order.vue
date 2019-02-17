<template>
  <div id="order">
    <div class="ddzxbt">交易订单</div>
    <div class="ddxq">
      <div class="ddspt fl"><img src="/static/image/order/gwc_xiaomi6.jpg" alt=""></div>
      <div class="ddbh fl">订单号:1705205643098724</div>
      <div class="ztxx fr">
        <ul>
          <li>已发货</li>
          <li>￥2499.00</li>
          <li>2017/05/20 13:30</li>
          <li><a href="">订单详情></a></li>
          <div class="clear"></div>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
    <div class="ddxq">
      <div class="ddspt fl"><img src="/static/image/order/liebiao_hongmin4_dd.jpg" alt=""></div>
      <div class="ddbh fl">订单号:170526435444865</div>
      <div class="ztxx fr">
        <ul>
          <li>已发货</li>
          <li>￥1999.00</li>
          <li>2017/05/26 14:02</li>
          <li><a href="">订单详情></a></li>
          <div class="clear"></div>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" scoped>
  #order
    .ddzxbt {
      width: 938px;
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      font-weight: bold;
      color: rgb(117,117,117);
      padding-left: 40px;
      border-bottom: 1px solid #ccc;
    }
    .ddxq {
      width: 938px;
      height: 120px;
      line-height: 120px;
      font-size: 17px;
      color: rgb(117,117,117);
      border-bottom: 1px solid #ccc;
      padding-left: 40px;
      .ddspt {
        width: 80px;
        height: 80px;
        margin: 19px 25px 0 0;
        border: 1px solid #aaa;
      }
      .ztxx {
        ul {
          li {
            display: inline-block;
            width: 130px;
            height: 60px;
            line-height: 60px;
            float: left;
            border-left: 1px solid #aaa;
            margin-top: 30px;
            text-align: center;
            font-size 15px
            a {
              color: rgb(117,117,117);
              &:hover {
                color: #ff6700;
              }
            }
          }
        }
      }
    }
</style>
