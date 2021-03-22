<template>
  <tab-bar class="border-1px-top">
    <tab-bar-item title="主页" link="/home">
      <i class="iconfont icon-zhuye" slot="icon"></i>
    </tab-bar-item>
    <tab-bar-item title="分类" link="/category">
      <i class="iconfont icon-xianxingtubiaozhizuomoban-36" slot="icon"></i>
    </tab-bar-item>
    <tab-bar-item title="购物车" link="/shopcart">
      <i class="iconfont icon-gouwuche" slot="icon"></i>
    </tab-bar-item>
    <tab-bar-item title="我的" link="/profile">
      <i class="iconfont icon-wode" slot="icon"></i>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../tabbar/TabBar'
import TabBarItem from '../tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style >
  .iconfont {
    font-size: 20px;
    font-weight: 600;
  }
</style>