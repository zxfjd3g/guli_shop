<template>
  <div id="recommend">
    <h2>为你推荐</h2>
    <a href="javascript:;" class="more">查看更多>></a>
    <ul>
      <RecommendCard newGood="newGood" name="倍思红外线发射器" price=22.80 src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/TB1VUqFJVXXXXcjXVXXXXXXXXXX_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=1218 />
      <RecommendCard name="第一卫手机指环扣" price=28.00 src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2457203449/O1CN014FJnBX1bLgXaWD53c_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=11907 />
      <RecommendCard newGood="newGood"  name="第一卫手机散热器" price=49.00 src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/2455420587/O1CN011GCsxLOnEtF5RKu_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=54 />
      <RecommendCard name="古尚古手机指环扣" price=19.80 src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/2024058652/O1CN01oHx0yT2DmfF2NPc2z_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=138 />
      <RecommendCard newGood="newGood" name="金属手机防尘塞" price=8.80 src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/TB1i.ZCNXXXXXcJXFXXXXXXXXXX_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=62 />
      <RecommendCard name="手机直播支架" price=16.80 src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2135108826/TB1OUUzsrSYBuNjSspfXXcZCpXa_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=13366 />
      <RecommendCard newGood="newGood" name="手机散热器" price=39.00 src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/693619253/O1CN01eR045u2IDvIg4d63w_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=1780 />
      <RecommendCard name="手机懒人支架" price=4.50 src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2102999778/O1CN01vAXnKo2M6NETjHvZp_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=20922 />
      <RecommendCard name="主播直播补光灯" price=48.00 src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1665792953/TB25.QIzuOSBuNjy0FdXXbDnVXa_!!1665792953-0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=385 />
      <RecommendCard newGood="newGood" name="苹果手机充电支架" price=49.00 src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2835135267/O1CN01yoaTNR1omKZeBifED_!!0-item_pic.jpg_580x580Q90.jpg_.webp" coutner=11 />
    </ul>
  </div>
</template>

<script>
  import RecommendCard from './RecommendCard.vue'
  export default {
    components: {
      RecommendCard
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #recommend
    width: 1226px
    position relative
    flex-shrink: 0
    height: 672px
    margin-top: 20px
    background-color: #f5f5f5
    & > h2
      height: 58px
      line-height: 58px
    .more
      position absolute
      top 18px
      right 30px
      &:hover
        color red
    ul
      display: flex
      height: 614px
      justify-content: space-between
      align-content: space-between
      flex-wrap: wrap
</style>
