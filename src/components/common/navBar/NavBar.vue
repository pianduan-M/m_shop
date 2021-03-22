<template>
  <div class="nav-bar border-1px-bottom">
    <div class="nav-bar-left"><slot name="left" /></div>
    <div class="nav-bar-center"><slot name="center" /></div>
    <div class="nav-bar-right"><slot name="right" /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .nav-bar-left, .nav-bar-right {
    width: 80px;
  }
  .nav-bar-center {
    flex: 1;
  }
</style>