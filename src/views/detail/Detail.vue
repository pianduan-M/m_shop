<template>
  <div id="detail">
    <detail-nav class="detail-nav"
                @navClick="navClick"
                ref="detaiNavRef" />

    <scroll class="content"
            ref="scrollRef"
            @scroll="scroll"
            v-if="topImages.length">
      <detail-swiper :data="topImages"
                     class="detail-swiper" />
      <detail-base-info :GoodsInfo="GoodsInfo" />

      <detail-sku-info :skuInfo="skuInfo" :detailParams="detailParams" :isShowPopup="isShowPopup" />

      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info :detailInfo="detailInfo"
                         @goodsImgLoad="goodsImgLoad" />
      <detail-goods-params :detailParams="detailParams"
                           ref="paramsRef" />
      <detail-comment :commentInfo="commentInfo"
                      ref="commentRef" />
      <detail-recommend :recommend="recommend"
                        ref="recommendRef" />
    </scroll>
    <detail-tab-bar />

    <back-top @backTopClick="backTopClick"
              v-show="isShowBackTop" />

    

  </div>
</template>

<script>
import { getDetailData, GoodsInfo, getRecommend } from 'network/detail'

import DetailNav from './childComps/DetailNav'
import DetailNavBack from './childComps/DetailNav2'
import Scroll from 'components/common/scroll/Scroll'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailGoodsParams from './childComps/DetailGoodsParams'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'
import BackTop from 'components/common/backTop/BackTop'
import DetailTabBar from './childComps/DetailTabBar'
import DetailSkuInfo from './childComps/DetailSkuInfo'


export default {
  name: 'detail',
  data() {
    return {
      topImages: [],
      GoodsInfo: {},
      shopInfo: {},
      skuInfo: {},
      detailInfo: {},
      detailParams: {},
      commentInfo: {},
      recommend: [],
      isShowBackTop: false,
      offsetTops: [],
      isShowPopup: false
    }
  },
  components: {
    DetailNav,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailComment,
    DetailRecommend,
    BackTop,
    DetailNavBack,
    DetailTabBar,
    DetailSkuInfo,
  },
  created() {
    this._getDetailData()
    this._getRecommend()
  },
  updated() {
    this._getOffsetTops()
  },
  // mounted() {
  //   this.$bus.$on('imgLoad', () => {
  //     console.log('------------');
  //     this._getOffsetTops()
  //   })
  // },
  // destroyed() {
  //   console.log('++++++++++++++');
  //   this.$bus.$off('imgLoad')
  // },
  methods: {
    _getDetailData() {
      const iid = this.$route.query.iid
      getDetailData(iid).then(res => {
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.GoodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = data.shopInfo
        this.detailInfo = data.detailInfo
        this.detailParams = data.itemParams
        this.commentInfo = data.rate.list && data.rate.list[0]
        data.skuInfo.skus[0].stock = 0
        this.skuInfo = data.skuInfo
        this.skuInfo.defaultPic = this.topImages[0]
      })
    },
    _getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    backTopClick() {
      // console.log(this.$refs.scrollRef);
      this.$refs.scrollRef.scrollTo(0, 0, 500)
    },
    scroll(pos) {
      if (-pos.y > 500) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
      for (let i = 0; i < this.offsetTops.length; i++) {
        if (this.offsetTops[i] <= -pos.y && this.offsetTops[i + 1] >= -pos.y) {
          this.$refs.detaiNavRef.currentIndex = i
        }
      }
      if (-pos.y > 0) {
        this.isShowNav = true
      } else {
        this.isShowNav = false
      }
    },
    _getOffsetTops() {
      this.offsetTops = []
      this.offsetTops.push(0)
      this.offsetTops.push(this.$refs.paramsRef.$el.offsetTop)
      this.offsetTops.push(this.$refs.commentRef.$el.offsetTop)
      this.offsetTops.push(this.$refs.recommendRef.$el.offsetTop)
      this.offsetTops.push(Number.MAX_VALUE)
    },
    navClick(index) {
      // this._getOffsetTops()
      // this.$refs.scrollRef.scrollTo(0, -this.offsetTops[index], 500)
      let el = null
      switch (index) {
        case 0:
          this.$refs.scrollRef.scrollTo(0, 0, 200)
          el = null
          break;

        case 1:
          el = this.$refs.paramsRef.$el
          break;

        case 2:
          el = this.$refs.commentRef.$el
          break;

        case 3:
          el = this.$refs.recommendRef.$el
          break;

      }
      if (el) this.$refs.scrollRef.scrollToElement(el, 200)
    },
    goodsImgLoad() {
      this._getOffsetTops()
    },
    addCart(goodsCount) {
      const product = {
        iid: this.$route.query.iid,
        image: this.topImages[0],
        title: this.GoodsInfo.title,
        desc: this.detailInfo.desc,
        price: this.GoodsInfo.nowPrice,
        shopName: this.shopInfo.name,
        shopLogo: this.shopInfo.shopLogo,
        count:goodsCount
      }
      !Object.values(product).find(item => {
        return !item
      }) && this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res)
      })


    }
  },
  mounted() {
    this.$bus.$on('addToCart', (goodsCount)=> {
      this.addCart(goodsCount)
    })
  },
  beforeDestroy() {
    this.$bus.$off('addToCart')
  }
}
</script>

<style scoped>
#detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
}
.detail-nav {
  z-index: 2;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 55px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.detail-swiper {
  height: 100vw;
}
</style>