<template>
  <div id="personal">
    <div class="selfinfo center">
      <div class="lfnav fl">
        <div class="ddzx">订单中心</div>
        <div class="subddzx">
          <ul>
            <li>
              <router-link to="/personal/order">我的订单</router-link>
            </li>
            <li><a href="javascrip:;">意外保</a></li>
            <li><a href="javascrip:;">团购订单</a></li>
            <li><a href="javascrip:;">评价晒单</a></li>
          </ul>
        </div>
        <div class="ddzx">个人中心</div>
        <div class="subddzx">
          <ul>
            <li>
              <router-link to="/personal/self_info">我的资料</router-link>
            </li>
            <li>
              <router-link to="/personal/message">消息通知</router-link>
            </li>
            <li>
              <router-link to="/personal/discount">优惠券</router-link>
            </li>
            <li>
              <router-link to="/personal/address">收货地址</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="rtcont fr">
        <router-view/>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>

  export default {}
</script>
<style lang="stylus" scoped>
  #personal {
    width: 100%;
    height: auto;
    background: rgb(245, 245, 245);
    padding-bottom: 20px;
    padding-top: 20px;
    .selfinfo {
      width: 1226px;
      .lfnav {
        width: 234px;
        height: 500px;
        background: #fff;
        .ddzx {
          width: 234px;
          height: 40px;
          line-height: 40px;
          font-size: 19px;
          margin: 30px 20px 10px 40px;
          color: rgb(51, 51, 51);
        }
        .subddzx {
          ul {
            li {
              display: block;
              width: 194px;
              height: 40px;
              line-height: 40px;
              padding-left: 40px;
              a {
                color: rgb(117, 117, 117);
                &:hover {
                  color: rgb(51, 51, 51);
                }
                &.router-link-active {
                  color: #ff6700
                  font-weight:bold
                }
              }
            }
          }
        }
      }
      .rtcont {
        width: 978px;
        height: 500px;
        background: #fff;
      }
    }
  }
</style>
