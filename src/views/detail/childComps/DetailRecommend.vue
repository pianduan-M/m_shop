<template>
  <div class="detail-recommend">
    <div class="recommend-header">商品推荐</div>
    <grid-view>
      <goods-item v-for="item in recommend" :key="item.iid" :goods="item" />
    </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView'
import GoodsItem from 'components/content/goods/GoodsItem'


export default {
  props: {
    recommend: {
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

<style scoped>

.recommend-item {
  text-align: center;
  font-size: 14px;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 10px;
}

.recommend-header{
  line-height: 60px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 0 20px;
}
</style>