<template>
  <nav-bar class="border-1px-bottom">
    <div slot="left" @touchstart="navBack"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center"
         class="detail-nav">
      <div v-for="(item, index) in titles"
           :key="item"
           @touchstart="navClick(index)"
           :class="{active: currentIndex === index}">{{item}}</div>
    </div>
    <div slot="right" @touchstart="navCartClick"><i class="iconfont icon-gouwuche"></i></div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    navClick(index) {
      this.currentIndex = index
      this.$emit('navClick', index)
    },
    navBack() {
      this.$router.back()
    },
    navCartClick() {
      this.$router.push('/shopcart')
    }
  }
}
</script>

<style scoped>
.detail-nav {
  display: flex;
  font-size: 14px;
}
.detail-nav > div {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>