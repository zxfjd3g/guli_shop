<template>
  <div class="pages">
    <div class="page_wrap">
      <span class="page_span2">
        <em>共<b>{{totalPage}}</b>页&nbsp;&nbsp;到第</em>
        <input type="number" value="1">
        <em>页</em>
        <a href="javascript:;">确定</a>
      </span>
      <span class="page_span1">
        <a href="javascript:;" :class="pageNum<=1?'disable':''" @click="pageNum>1?selectPage(pageNum-1):null">
            < 上一页
        </a>
        <a href="javascript:;" v-for="(num,index) in pages" :key="index" :class="num==pageNum?'active':num=='...'?'omit':''"
          @click="selectPage(num)">{{num}}</a>
        <a href="javascript:;" :class="pageNum>=totalPage?'disable':''" @click="pageNum<totalPage?selectPage(pageNum+1):null">
            下一页 >
        </a>
      </span>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    props:{
      pageNum:Number,
      pageSize:Number,
      total:Number,
      setPageNum:Function,
      selectBrand:Array,
      selectCateLog:Array,
      selectAttrs:Array
    },
    computed:{
      ...mapState(["keyword"]),
      totalPage(){
        let {total,pageSize}=this;
        return Math.ceil(total/pageSize);
      },
      pages(){
        let arr=[];
        if(this.totalPage>10){
          if(this.pageNum-4>1){
            arr.push(1);
            arr.push('...');
            arr.push(this.pageNum-3);
            arr.push(this.pageNum-2);
            arr.push(this.pageNum-1);
            arr.push(this.pageNum);
          }else{
            for(let i=1;i<this.pageNum+1;i++){
              arr.push(i);
            }
          }
          if(this.pageNum+3<this.totalPage){
            arr.push(this.pageNum+1);
            arr.push(this.pageNum+2);
            arr.push('...');
            arr.push(this.totalPage);
          }else{
            for(let i=this.pageNum+1;i<this.totalPage+1;i++){
              arr.push(i);
            }
          }
        }else{
          for(let i=1;i<this.totalPage+1;i++){
            arr.push(i);
          }
        }
        return arr;
      }
    },
    methods:{
      selectPage(num){
        if(num=="..."){
          return ;
        }
          this.setPageNum(num);
          let {keyword,selectBrand,selectCateLog,selectAttrs,attrsText,order,pageNum,pageSize}=this;
          let obj={keyword,order,pageNum:num,pageSize};
          if(selectBrand[0]){
            obj.brand=selectBrand;
          }
          if(selectCateLog[0]){
            obj.catelog3=selectCateLog;
          }
          if(selectAttrs[0]){
            obj.props=attrsText;
          }
          this.$store.dispatch('getSearch',obj);
      }
    }
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
          cursor default
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
          &.disable
            color: #ccc;
            background: #fff;
            cursor default
          &.omit
            border 0
            font-size 20px
            color #999
            background #fff
            cursor default
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
