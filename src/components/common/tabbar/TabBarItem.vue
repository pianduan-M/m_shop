<template>
  <div class="tab-bar-item"
       @touchstart="tabClick"
       :class="{active: $route.path === link}"
       >
    <div class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="item-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    tabClick() {
      if (this.link && this.link !== this.$route.path) {
        this.$router.replace(this.link)
      }
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    color: rgb(88, 88, 88)
  }
  .item-title {
    font-size: 14px;
    margin-top: 0.2em;
    font-weight: 600;
  }
  .active {
    color: red;
  }
</style>