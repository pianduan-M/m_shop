<template>
  <ul class="sku-list-wrap">
    <li v-for="(prop) in data"
        :key="prop.label">
      <h2>{{prop.label}}</h2>
      <cell v-for="(item) in prop.list"
            :key="item.name"
            :allSku="allSku"
            :prop="item"
            :selectedSku="selectedSku"
            />
    </li>

  </ul>
</template>

<script>
import Cell from './Cell'

export default {
  props: {
    data:{
      type:Array,
      default() {
        return []
      }
    },
    selectedSku: {
      type: Object,
      default() {
        return {}
      }
    },
    allSku: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Cell
  }
 
}
</script>

<style scoped>
.sku-list-wrap li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
}
.sku-list-wrap h2 {
  font-size: 16px;
  font-weight: 500;
  line-height: 50px;
  color: #333;
}
</style>