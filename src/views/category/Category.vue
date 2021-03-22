<template>
  <div id="category">
    <!-- 导航 -->
    <nav-bar class="category_nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 内容区 -->
    <div class="category_content">
      <tab-menu :menuList="menuList"
                @tabClick="tabClick" />
      <category-content :subMenuList="subMenuList"
                        ref="categoryContentRef"
                        :miniWallkey="miniWallkey" />
    </div>
  </div>
</template>

<script>
import { getCategoryData, getSubCategory } from 'network/category'

import NavBar from 'components/common/navBar/NavBar'
import TabMenu from './childComps/TabMenu'
import CategoryContent from './childComps/CategoryContent'

export default {
  data() {
    return {
      menuList: [],
      subMenuList: [],
      categoryDetail: {
        'pop': [],
        'new': [],
        'sell': []
      },
      currentType: 'pop',
      miniWallkey: ''
    }
  },
  created() {
    this._getCategoryData()
  },
  methods: {
    // 一级菜单
    /*
    @maitKey 
    
    */
    async _getCategoryData() {
      const res = await getCategoryData()
      this.menuList = res.data.category.list

      const maitKey = this.menuList[0].maitKey
      this.miniWallkey = this.menuList[0].miniWallkey
      this._getSubCategory(maitKey)
    },
    // 二级菜单
    async _getSubCategory(maitKey) {
      const res = await getSubCategory(maitKey)
      this.subMenuList = res.data.list
    },
    // 监听一级菜单点击事件
    tabClick(maitKey, miniWallkey) {
      this.$refs.categoryContentRef.$el.style.opacity = '0'

      this.miniWallkey = miniWallkey

      this._getSubCategory(maitKey)
    }
  },
  components: {
    TabMenu,
    NavBar,
    CategoryContent
  }
}
</script>

<style scoped>
.category_content {
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  background: #fff;
}

.category_nav {
  background: var(--color-tint);
  color: #fff;
}
</style>