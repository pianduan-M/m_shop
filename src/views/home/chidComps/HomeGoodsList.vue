<template>
  <grid-view>
    <goods-item v-for="(item, index) in goodsList" :key="index" :goods="item" />
  </grid-view>
</template>

<script>
import GridView from 'components/common/gridView/GridView'
import GoodsItem from 'components/content/goods/GoodsItem'

export default {
  props : {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GridView,
    GoodsItem
  }
}
</script>

<style>
</style>