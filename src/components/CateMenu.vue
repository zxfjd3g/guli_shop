<template>
  <div id="cate_menu" class="fl">
    <ul>
      <li v-for="(item,index) in homeCates" :key="index" @mouseenter="curIndex=index" v-if="index<10">
        <a href="">{{item.name}}</a>
      </li>
      <li v-if="homeCates.length">
        <ul class="pop">
          <li class="clearfix" v-for="cate in cateList" :key="cate.id">
            <div class="title">
              {{cate.name}}
              <i class="iconfont icon-jiantou_xiangyou"></i>
            </div>
            <ul class="list">
              <li v-for="(small,index) in cate.subs" :key="small.id">
                <a href="javascript:;">
                  {{small.name}}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    data(){
      return {
        curIndex:0
      };
    },
    computed:{
      ...mapState(["homeCates"]),
      cateList(){
        let data=this.homeCates[this.curIndex].subs;
        if(data){
          return data;
        }else{
          this.$store.dispatch('getHomeCateList',{id:this.homeCates[this.curIndex].id,curIndex:this.curIndex});
        }
      }
    },
    mounted(){
      this.$store.dispatch('getHomeCates');
    }
  }
</script>

<style lang="stylus" scoped>
  #cate_menu
    width: 234px
    height: 100%
    background-color: #0c0c13
    box-sizing: border-box
    position: relative
    & > ul
      position relative
      padding: 20px 0
      &:hover
        li:last-of-type
          display block
      & > li
        display: flex
        align-items: center
        height: 40px
        padding: 0 30px
        font-size: 14px
        &:last-of-type
          display: none
          padding: 0
          width: 800px
          height: 461px
          z-index: 2
          position: absolute
          left 100%
          top 0
        &:hover
          background-color: #ff6700
        a
          color: #fff
          margin-left: 10px
        .pop
          box-shadow: 2px 3px 5px #ccc
          width: 800px
          height: 461px
          background-color: #fff
          padding: 20px 0 0 20px
          font-size 12px
          box-sizing border-box
          & > li
            margin-bottom: 10px
            white-space nowrap
            .title
              float: left
              width 70px
              height 20px
              line-height 20px
              font-weight bold
              .iconfont
                font-size 12px
            .list
              float: left
              max-width 700px
              li
                float: left
                margin-top 2px
                margin-bottom 5px
                a
                  display block
                  height 16px
                  margin-left: 0
                  line-height 16px
                  white-space nowrap
                  padding 0 10px
                  text-align center
                  color #666
                  border-left 1px solid #e0e0e0
                  &:hover
                    color: #ff6700

</style>
