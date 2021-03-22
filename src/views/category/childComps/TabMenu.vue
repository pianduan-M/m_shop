<template>
  <scroll class="category_tab"
          :bounceTop="false"
          :bounceBottom="false"
          ref="scrollRef"
          >
    <div class="menu_list">
      <div class="list_item"
           :class="{active:currentIndex===index}"
           v-for="(item,index) in menuList"
           :key="index"
           @click="tabClick(index, item)">{{item.title}}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'


export default {
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,

    }
  },
  components: {
    Scroll
  },
  methods: {

    tabClick(index, item) {
      this.currentIndex = index
      this.$emit('tabClick', item.maitKey, item.miniWallkey)
    },

  },
  activated() {
    this.$refs.scrollRef && this.$refs.scrollRef.refresh()

  }
}
</script>

<style scoped>
.category_tab {
  height: 100%;
  width: 26vw;
  background: #f8f8f8;
  float: left;
}
.menu_list {
  width: 26vw;
  /* transform-style: preserve-3d; */
}
.list_item {
  width: 100%;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  background: #f8f8f8;
}
.list_item.active {
  background: #fff !important;

  z-index: 0;
}
.list_item.active::after {
  content: "";
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
  /* transform: translateZ(-10px); */
  width: 20px;
  height: 80px;
  background: rgb(255, 255, 255);
}
</style>