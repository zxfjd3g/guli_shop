<template>
  <div class="classify">
    <div class="ipone">
      <div class="ipone_bar">
        <div class="ipone_one a">
          <a href="javascript:;">手机</a>
        </div>
        <i><img src="/static/image/search/right-@1x.png" alt=""></i>
        <div class="ipone_one b">
          <a href="javascript:;" class="qqq">手机通讯录 <img src="/static/image/search/down-@1x.png" alt=""></a>
          <div>
            <a href="javascript:;">手机通讯</a>
            <a href="javascript:;">运营商</a>
            <a href="javascript:;">手机配件</a>
            <a href="javascript:;">手机服务</a>
          </div>
        </div>
        <i><img src="/static/image/search/right-@1x.png" alt=""></i>
        <div class="ipone_one c">
          <a href="javascript:;" class="qqq">手机 <img src="/static/image/search/down-@1x.png" alt=""></a>
          <div>
            <a href="javascript:;">手机</a>
            <a href="javascript:;">老人机</a>
            <a href="javascript:;">对讲机</a>
            <a href="javascript:;">女性手机</a>
            <a href="javascript:;">超续航手机</a>
            <a href="javascript:;">全面屏手机</a>
            <a href="javascript:;">拍照手机</a>
            <a href="javascript:;">游戏手机</a>
          </div>
        </div>
        <i><img src="/static/image/search/right-@1x.png" alt=""></i>
        <ul class="ipone_one d">
          <li class="select_item" v-for="item in selectList" :key="item.name">
            <a href="javascript:;">
              <span class="title">{{item.type}}:</span>
              <span class="select" v-for="name in item.value">{{name}}</span>
              <span class="iconfont icon-quxiao" @click="resend(item)"></span>
            </a>
          </li>
        </ul>
        <i><img src="/static/image/search/right-@1x.png" alt=""></i>
        <div class="findword">"{{keyword}}"</div>
      </div>
    </div>
    <div class="selector">
      <!--手机商品筛选-->
      <div class="title">
        <h3><b>手机</b><em>商品筛选</em></h3>
        <div class="st-ext">共&nbsp;<span>10135</span>个商品</div>
      </div>
      <div class="nav_logo">
        <!--品牌-->
        <div class="nav_wrap">
          <div class="sl_key">
            <span>{{brand.name}}：</span>
          </div>
          <div class="sl_value">
            <div class="sl_value_logo">
              <ul>
                <li v-for="prop in brand.value" :key="brand.name+prop" @click="setSelectInfo('selectBrand',prop,brand.name)">
                  <a href="javascript:;">
                    <img :src="prop.img" alt="" v-if="prop.img">
                    <span v-else>{{prop}}</span>
                    <div>
                      {{prop}}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="sl_ext">
            <a href="javascript:;" class="sl_ext_show" v-if="brand.value.length>5">
              更多
              <i style='background: url("/static/image/search/search.ele.png")no-repeat 3px 7px'></i>
              <b style='background: url("/static/image/search/search.ele.png")no-repeat 3px -44px'></b>
            </a>
            <a href="javascript:;" v-else></a>
            <a href="javascript:;" class="moreCheck">
              多选
              <i>+</i>
              <!-- <span>+</span> -->
            </a>
          </div>
        </div>
        <div class="pre">
          <div class="sl_key">
            <span>{{catelog.name}}：</span>
          </div>
          <div class="sl_value">
            <ul class="nomore">
              <li v-for="prop in catelog.value" :key="catelog+prop" @click="setSelectInfo('selectCatelog',prop,catelog.name)">
                <input type="checkbox">
                <a href="javascript:;">{{prop}}</a>
              </li>
            </ul>
            <div class="select">
              <button class="confirm" disabled>确定</button>
              <button class="cancel">取消</button>
            </div>
          </div>
          <div class="sl_ext">
            <a href="javascript:;" class="sl_ext_show" v-if="catelog.value.length>7">
              更多
              <i style='background: url("/static/image/search/search.ele.png")no-repeat 3px 7px'></i>
              <b style='background: url("/static/image/search/search.ele.png")no-repeat 3px -44px'></b>
            </a>
            <a href="javascript:;" v-else></a>
            <a href="javascript:;" class="moreCheck">
              多选
              <i>+</i>
              <!-- <span>+</span> -->
            </a>
          </div>
        </div>
        <div v-for="classify in attrs" class="pre" :key="classify.name">
          <div class="sl_key">
            <span>{{classify.name}}：</span>
          </div>
          <div class="sl_value">
            <ul class="nomore">
              <li v-for="prop in classify.value" :key="classify+prop" @click="setSelectInfo('selectAttrs',{productAttributeId:classify.productAttributeId,prop},classify.name)">
                <input type="checkbox">
                <a href="javascript:;">{{prop}}</a>
              </li>
            </ul>
            <div class="select">
              <button class="confirm" disabled>确定</button>
              <button class="cancel">取消</button>
            </div>
          </div>
          <div class="sl_ext">
            <a href="javascript:;" class="sl_ext_show" v-if="classify.value.length>6">
              更多
              <i style='background: url("/static/image/search/search.ele.png")no-repeat 3px 7px'></i>
              <b style='background: url("/static/image/search/search.ele.png")no-repeat 3px -44px'></b>
            </a>
            <a href="javascript:;" v-else></a>
            <a href="javascript:;" class="moreCheck">
              多选
              <i>+</i>
              <!-- <span>+</span> -->
            </a>
          </div>
        </div>
        <!--热点-->
        <!-- <div class="pre">
          <div class="sl_key">
            <span>热点：</span>
          </div>
          <div class="sl_value">
            <ul class="nomore">
              <li>
                <input type="checkbox">
                <a href="javascript:;">以旧换新</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">功能机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">儿童手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">合约机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">全面屏</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">直板键盘</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">翻盖</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">商务手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">安全手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">键盘手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">以旧换新</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">功能机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">儿童手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">合约机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">全面屏</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">直板键盘</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">翻盖</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">商务手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">安全手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">键盘手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">以旧换新</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">功能机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">儿童手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">合约机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">全面屏</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">直板键盘</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">翻盖</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">商务手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">安全手机</a>
              </li>
              <li>
                <input type="checkbox">
                <a href="javascript:;">键盘手机</a>
              </li>
            </ul>
            <div class="select">
              <button class="confirm" disabled>确定</button>
              <button class="cancel">取消</button>
            </div>
          </div>
          <div class="sl_ext">
            <a href="javascript:;" class="sl_ext_show">
              更多
              <i style='background: url("/static/image/search/search.ele.png")no-repeat 3px 7px'></i>
              <b style='background: url("/static/image/search/search.ele.png")no-repeat 3px -44px'></b>
            </a>
            <a href="javascript:;" class="moreCheck">
              多选
              <i>+</i>
              <span>+</span>
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    data(){
      return {
        order:"0:desc",
        selectList:[]
      };
    },
    props:{
        brand:Object,
        catelog:Object,
        attrs:Array,
        pageSize:Number,
        selectBrand:Array,
        selectCateLog:Array,
        selectAttrs:Array,
        setSearchData:Function
    },
    methods:{
      setSelectInfo(type,data,name){
        let myData=this[type];
        if(!myData.includes(data)&&!this.attrsText.includes(data.prop)){
          this[type].push(data);
          let {keyword,selectBrand,selectCateLog,selectAttrs,attrsText,selectList,order,pageNum,pageSize}=this;
          let obj={keyword,order,pageSize};
          if(selectBrand[0]){
            obj.brand=selectBrand;
          }
          if(selectCateLog[0]){
            obj.catelog3=selectCateLog;
          }
          if(selectAttrs[0]){
            obj.props=attrsText;
          }
          if(!selectList.includes(myData)&&!selectList.includes(data)){
            if(typeof data=="object"){
              selectList.push({type:name,value:data.prop});
            }else{
              selectList.push({type:name,value:data});
            }
          }
          this.$store.dispatch('getSearch',obj);
        }
      },
      resend(curObj){
        this.selectList=this.selectList.filter((item)=>{
          return item!=curObj;
        });
        let newData1=this.selectBrand.filter((item)=>{
          return item!=curObj.value;
        });
        this.setSearchData('selectBrand',newData1);
        let newData2=this.selectCateLog.filter((item)=>{
          return item!=curObj.value;
        });
        this.setSearchData('selectCateLog',newData2);
        let newData3=this.selectAttrs.filter((item)=>{
          return item.prop!=curObj.value;
        });
        this.setSearchData('selectAttrs',newData3);
        this.$nextTick(()=>{
          let {keyword,selectBrand,selectCateLog,selectAttrs,attrsText,selectList,order,pageNum,pageSize}=this;
          let obj={keyword,order,pageSize};
          if(this.selectBrand[0]){
            obj.brand=selectBrand;
          }
          if(selectCateLog[0]){
            obj.catelog3=selectCateLog;
          }
          if(selectAttrs[0]){
            obj.props=attrsText;
          }
          this.$store.dispatch('getSearch',obj);
        });
        
      }
    },
    computed:{
      ...mapState(["keyword"]),
      searchProps(){
        if(this.searchInfo){
          let list = Object.keys(this.searchInfo);
          return list;
        }
        return [];
      },
      attrsText(){
        let {selectAttrs} = this;
        let str="";
        selectAttrs.forEach((item,index)=>{
          if(index){
            str+="props=";
          }
          str+=`${item.productAttributeId}:${item.prop}`;
        })
        return str;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .classify
    .ipone
      width 1210px
      margin 0 auto 15px
      .ipone_bar
        height 24px
        line-height 24px
        .ipone_one
          float left
          margin-right 5px
          a
            text-decoration none
            background #fff
        .c, .b
          position relative
          &:hover
            div
              display: block
          a
            display inline-block
            height 22px
            padding 0 4px 0 8px
            border 1px solid #ddd
            line-height 22px
            vertical-align top
            font-size 14px
            position relative
          div
            position absolute
            top 23px
            left 0
            width 400px
            padding 10px 0
            border 1px solid #e23a3a
            background #fff
            z-index 20
            display none
            a
              border 0
              display block
              float left
              margin-right 5px
              &:hover
                color #e23a3a
        .b
          &:hover
            .qqq
              border 1px solid #e23a3a
              border-bottom 1px solid #fff
        .c
          &:hover
            .qqq
              border 1px solid #e23a3a
              border-bottom 1px solid #fff
        .a
          font-size 20px
          font-weight 900
        .d
          .select_item
            float left
            margin-right 5px
            a
              display block
              padding-left 8px
              border 1px solid #ddd
              background-color: #f3f3f3;
              &:hover
                background-color: #fff;
                border-color #e4393c
                .iconfont
                  background-color: #e4393c;
                  color: #fff
              .select
                color #e4393c
              .iconfont
                float right
                height: 25px
                width: 25px
                text-align center
                color: #e4393c
                margin 0 0 0 4px
        i
          float left
          margin-right 5px
        .findword
          font-weight: bold;
          color: #666;
          font-size: 15px
    .selector
      border-top 1px solid #ddd
      background #fff
      margin-bottom 10px
      width 1210px
      margin 0 auto
      .title
        border-bottom 1px solid #ddd
        background #f1f1f1
        line-height 34px
        height 34px
        width 100%
        overflow hidden
        zoom 1
        h3
          float left
          padding-left 10px
          font-size 14px
          b
            color #e4393c
            margin-right 5px
          em
            font-style normal
        .st-ext
          float left
          padding-left 20px
          font-size 13px
          color #999
      .nav_logo
        width auto
        height auto
        .nav_wrap
          position relative
          line-height 34px
          border-bottom 1px dashed #eee
          padding 10px 0
          .sl_key
            float left
            width 100px
            padding-left 10px
            color #666
            font-size 14px
          .sl_value
            margin-left 110px
            padding-right 130px
            padding-left 10px
            overflow hidden
            .sl_value_logo
              ul
                padding-top 10px
                margin-bottom 10px
                zoom 1
                height 50px
                li
                  float left
                  width 116px
                  height 48px
                  border 1px solid #ddd
                  margin -1px -1px 0 0
                  text-align center
                  a
                    position relative
                    display block
                    width: 100%;
                    height: 100%
                    line-height 48px
                    img
                      box-sizing border-box
                      padding 7px 6px
                      width: 100%;
                      height: 100%
                    div
                      position absolute
                      top -1px
                      left -2px
                      background #fff
                      border 2px solid #e23a3a
                      width 116px
                      height 46px
                      line-height 48px
                      font-size 12px
                      color #e23a3a
                      display none
                  &:hover
                    div
                      display block
          .sl_ext
            position absolute
            top 6px
            right 10px
            width 120px
            line-height 25px
            overflow hidden
            &.hide
              display: none
            a
              font-size 12px
              text-decoration none
              &:nth-child(1):hover
                color #e23a3a
                i
                  border 1px solid #e23a3a
                b
                  border 1px solid #e23a3a
              &:nth-child(2):hover
                border 1px solid #e23a3a
                color #e23a3a
              &:nth-child(1)
                float left
                position relative
                width 50px
                height 22px
                background #fff
                color #333
                margin-right 10px
                i
                  position absolute
                  top 3px
                  right 0
                  display block
                  width 20px
                  height 20px
                  border 1px solid #ddd
                b
                  position absolute
                  top 24px
                  right 0
                  display block
                  width 20px
                  height 20px
                  border 1px solid #ddd
              &:nth-child(2)
                line-height 20px
                border 1px solid #ddd
                padding 2px 3px 2px 18px
                position relative
                background #f8f8f8
                color #333
                i
                  position absolute
                  display block
                  font-style normal
                  left 3px
                  top -1px
                  width 13px
                  height 20px
                  font-size 20px
                span
                  position absolute
                  display block
                  font-style normal
                  left 3px
                  top 13px
                  font-size 20px
                  width 13px
                  height 20px
                  color #e23a3a
        .pre
          overflow hidden
          position relative
          line-height 34px
          border-bottom 1px dashed #eee
          &.extend
            margin-top -1px
            border 1px solid #AAA
            .sl_value
              .checkbox
                ~ .select
                  display: flex
                  justify-content space-between
                  margin 5px auto;
                  width: 120px
                  height: 25px
                  button
                    display: block
                    width: 52px;
                    height: 100%

          .sl_key
            float left
            width 100px
            padding-left 10px
            color #666
            font-size 14px
          .sl_value
            margin-left 110px
            padding-right 130px
            padding-left 10px
            overflow hidden
            ul
              float left
              overflow hidden
              position relative
              height 30px
              &.more
                height: auto
              &.nomore
                height: 30px
              &.checkbox
                height: auto
                input
                  display: inline-block
              li
                float left
                margin-right 50px
                margin-bottom 4px
                height 26px
                line-height 26px
                a
                  color #666
                  text-decoration none
                  font-size 13px
                  &:hover
                    color red
                input
                  display: none
                  position relative
                  top 2px
              .sl_value_li
                width 135px
                margin-right 0
                p
                  line-height 32px
                  display block
                  float left
                  color #ddd
                a
                  display inline-block
                  line-height 14px
                  border-radius 2px
                  background #f7f7f7
                  text-align center
                  text-decoration none
                  border 1px solid #ddd
                  padding 4px 6px
                  color #666
                  margin-left 5px
                  margin-top 5px
                input
                  width 30px
                  float left
                  height 19px
                  margin-top 7px
                  line-height 19px
                  border 1px solid #ccc
            button
              display none
          .sl_ext
            position absolute
            top 6px
            right 10px
            width 120px
            line-height 25px
            overflow hidden
            &.hide
              display: none
            a
              font-size 12px
              text-decoration none
              &:nth-child(1):hover
                color #e23a3a
                i
                  border 1px solid #e23a3a
                b
                  border 1px solid #e23a3a
              &:nth-child(2):hover
                border 1px solid #e23a3a
                color #e23a3a
              &:nth-child(1)
                float left
                position relative
                width 50px
                height 22px
                background #fff
                color #333
                margin-right 10px
                i
                  position absolute
                  top 3px
                  right 0
                  display block
                  width 20px
                  height 20px
                  border 1px solid #ddd
                b
                  position absolute
                  top 24px
                  right 0
                  display block
                  width 20px
                  height 20px
                  border 1px solid #ddd
              &:nth-child(2)
                line-height 20px
                border 1px solid #ddd
                padding 2px 3px 2px 18px
                position relative
                background #f8f8f8
                color #333
                i
                  position absolute
                  display block
                  font-style normal
                  left 3px
                  top -1px
                  width 13px
                  height 20px
                  font-size 20px
                span
                  position absolute
                  display block
                  font-style normal
                  left 3px
                  top 13px
                  font-size 20px
                  width 13px
                  height 20px
                  color #e23a3a

</style>
