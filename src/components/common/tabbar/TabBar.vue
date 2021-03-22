<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    text-align: center;
    align-items: center;
    padding: 6px 0;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: #fff;
  }
</style>