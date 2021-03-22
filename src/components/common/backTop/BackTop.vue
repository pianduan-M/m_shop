<template>
  <div class="back-top" @click="backTopClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  methods: {
    backTopClick() {
      this.$emit('backTopClick')
    }
  }
}
</script>

<style scoped>
  .back-top{
    position: absolute;
    bottom: 10vh;
    right: 5vw;

    width: 50px;
    height: 50px;
    opacity: 0.8;
  }
  .back-top img{
    width: 100%;
  }
</style>