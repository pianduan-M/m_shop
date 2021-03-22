<template>
  <grid-view :cols = "4" :hMargin="20" class="home-recommend">
    <a :href="item.link"
       class="recommend-item"
       v-for="item in data"
       :key="item.link">
      <img :src="item.image"
           alt="item.title">
      <div>{{item.title}}</div>
    </a>

  </grid-view>
</template>

<script>
import GridView from 'components/common/gridView/GridView'

export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GridView
  }
}
</script>

<style scoped>
.home-recommend{
  border-bottom: 8px solid #eee;
}

.recommend-item {
  text-align: center;
  font-size: 14px;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 10px;
}

</style>