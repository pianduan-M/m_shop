<template>
  <div id="home"
       class="clear-fix">

    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-controla :titles="['流行','新款','精选']"
                  class="border-1px-top tab-controla"
                  @tabClick="tabClick"
                  v-show="isShowTabControl" 
                  ref="tabControlRef1"
                  />

    <scroll class="home-content"
            ref="scrollRef"
            @pullingUp="pullingUp"
            @scroll="scroll">
      <swiper :data="banners" />
      <recommend :data="recommend" />
      <div class="recommend"><img src="~assets/img/home/recommend_bg.jpg"
             alt=""></div>
      <tab-control :titles="['流行','新款','精选']"
                   class="border-1px-top"
                   @tabClick="tabClick"
                   ref="tabControlRef" />

      <home-goods-list :goodsList="goodsList" />
      <div v-show="loading"
           class="loading">加载更多</div>
    </scroll>
    <back-top @backTopClick="backTopClick"
              v-show="isShowBackTop" />

  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import Recommend from './chidComps/Recommend'
import TabControl from 'components/content/tabControl/TabControl'
import TabControla from 'components/content/tabControl/TabControl'
import HomeGoodsList from './chidComps/HomeGoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'

import { getHomeMultidata, getHomeData } from 'network/home.js'

export default {
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop': { page: 1, list: [] },
        'new': { page: 1, list: [] },
        'sell': { page: 1, list: [] }
      },
      currentType: 'pop',
      loading: false,
      isShowBackTop: false,
      scrollY: 0,
      isShowTabControl: false,
      isShow: false
    }
  },
  components: {
    NavBar,
    Swiper,
    Recommend,
    TabControl,
    HomeGoodsList,
    Scroll,
    BackTop,
    TabControla,
  },
  created() {
    this._getHomeMultidata()
    this._getHomeData('pop')
    this._getHomeData('new')
    this._getHomeData('sell')
  },
  methods: {
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    _getHomeData(type) {
      const page = this.goods[type].page
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.loading = false
        this.$refs.scrollRef.finishPullUp()
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControlRef.currentIndex = index
      this.$refs.tabControlRef1.currentIndex = index
    },
    backTopClick() {
      // console.log(this.$refs.scrollRef);
      this.$refs.scrollRef.scrollTo(0, 0, 500)
    },
    pullingUp() {
      this.loading = true
      this._getHomeData(this.currentType)
    },
    scroll(pos) {
      if (-pos.y > 500) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
      if (!this.isShowTabControl && this.$refs.tabControlRef.$el.offsetTop <= -pos.y) {
        this.isShowTabControl = true
      } else if(this.isShowTabControl && this.$refs.tabControlRef.$el.offsetTop >= -pos.y){
        this.isShowTabControl = false

      }
    }
  },
  computed: {
    goodsList() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    this.$refs.scrollRef.refresh && this.$refs.scrollRef.refresh()
    this.$refs.scrollRef.scrollTo(0, this.scrollY, 0)
  },
  deactivated() {
    this.scrollY = this.$refs.scrollRef.scrollY()
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.home-content {
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.recommend img {
  width: 100%;
}
.loading {
  text-align: center;
  line-height: 60px;
}
.tab-controla {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 1;
  background: #fff;
}
</style>