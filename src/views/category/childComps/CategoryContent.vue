<template>
  <div class="sub_category"
       ref="subCategoryRef">
    <scroll class="sub_category1" ref="scrollRef">
      <grid-view :cols="3"
                 :vMargin="20"
                 :hMargin="20"
                 :itemSpace="20"
                 :lineSpace="20">
        <a :href="item.link"
           v-for="(item, index) in subMenuList"
           :key="index"
           class="sub_item">
          <img :src="item.image"
               :alt="item.title">
          <span>{{item.title}}</span>
        </a>
      </grid-view>

      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick" />
      <grid-view>
        <goods-item v-for="(item, index) in currentDetailList"
                    :key="index"
                    :goods="item" />
      </grid-view>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import GridView from 'components/common/gridView/GridView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsItem from 'components/content/goods/GoodsItem'

import { getSubCategoryData } from 'network/category'

export default {
  props: {
    subMenuList: {
      type: Array,
      default() {
        return []
      }
    },
    miniWallkey: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      categoryDetail: {
        'pop': [],
        'new': [],
        'sell': []
      },
      currentType: 'pop',
    }
  },
  components: {
    Scroll,
    GridView,
    TabControl,
    GoodsItem
  },
  updated() {
    this.$refs.scrollRef.scrollTo && this.$refs.scrollRef.scrollTo(0, 0, 0)
    this.$refs.subCategoryRef.style.opacity = '1'
  },
  methods: {
    tabClick(index) {
      console.log(index);
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
    },
    // 二级菜单下的推荐商品
    async _getSubCategoryData(type) {
      const res = await getSubCategoryData(this.miniWallkey, type)
      this.categoryDetail[type] = res
    }
  },
  watch: {
    miniWallkey() {
      this._getSubCategoryData('pop')
      this._getSubCategoryData('new')
      this._getSubCategoryData('sell')
    }
  },
  computed: {
    currentDetailList() {
      return this.categoryDetail[this.currentType]
    }
  },
  activated() {
    this.$refs.scrollRef && this.$refs.scrollRef.refresh()
  }

}
</script>

<style scoped>
.sub_category {
  width: 100%;
  height: 100%;
  transition: opacity 0.2s;
}
.sub_category1 {
  height: 100%;
  margin-left: 26vw;
}
.sub_item {
  text-align: center;
  color: #000;
}
.sub_item img {
  width: 100%;
  margin-bottom: 6px;
}
.sub_item span {
  font-size: 14px;
}
</style>