<template>
  <div class="pages">
    <div class="page_wrap">
      <span class="page_span2">
        <em>共<b>169</b>页&nbsp;&nbsp;到第</em>
        <input type="number" value="1">
        <em>页</em>
        <a href="javascript:;">确定</a>
      </span>
      <span class="page_span1">
        <a href="javascript:;">
            < 上一页
        </a>
        <a href="javascript:;">1</a>
        <a href="javascript:;" style="border: 0;font-size: 20px;color: #999;background: #fff">...</a>
        <a href="javascript:;">4</a>
        <a href="javascript:;">5</a>
        <a href="javascript:;">6</a>
        <a href="javascript:;" class="active">7</a>
        <a href="javascript:;">8</a>
        <a href="javascript:;">9</a>
        <a href="javascript:;" style="border: 0;font-size: 20px;color: #999;background: #fff">...</a>
        <a href="javascript:;">169</a>
        <a href="javascript:;">
            下一页 >
        </a>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Pages"
  }
</script>

<style lang="stylus" scoped>
  .pages
    display flex
    align-items center
    justify-content center
    margin 35px 0 20px
    width:100%;
    height:50px;
    .page_wrap
      width 1226px
      .page_span1
        float: right;
        .active
          border: 0;
          color:#ee2222;
          background: #fff
        a
          font-size: 14px;
          display: block;
          float: left;
          text-decoration: none;
          height: 36px;
          background: #f0f0f0;
          line-height: 36px;
          padding: 0 14px;
          margin-right: 5px;
          border: 1px solid #ddd;
          &:nth-child(1)
            color: #ccc;
            background: #fff;



      .page_span2
        float: right;
        em
          float: left;
          line-height: 38px;
          font-size: 14px;
          b
            font-weight: bold;


        input
          float: left;
          width: 30px;
          height: 30px;
          margin: 0 3px;
          line-height: 30px;
          font-size: 14px;
          text-align: center;
          border: 1px solid #ccc;
          padding: 3px;

        a
          float: left;
          height: 27px;
          margin-left: 10px;
          font-size: 14px;
          line-height: 27px;
          display: inline-block;
          border-radius: 2px;
          background: #f7f7f7;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid #ddd;
          padding: 4px 13px 5px;
          color: #666;
          background-repeat: repeat-x;




</style>
