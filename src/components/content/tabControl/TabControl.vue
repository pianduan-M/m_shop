<template>
  <div class="tab-control">
    <div class="tab-item"
         v-for="(item, index) in titles"
         :key="item"
         @click="tabClick(index)">
         <span :class="{active: currentIndex === index}">{{item}}</span>
         </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
   return {
      currentIndex: 0
   }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 10px 8px;
}
.tab-item {
  flex: 1;
}
.tab-item span{
  padding: 4px 2px;
}
.active{
  border-bottom: solid 3px var(--color-tint);
}
</style>