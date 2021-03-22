<template>
  <div class="goods-info">
    <div class="goods-des">
      <div class="des-start"></div>
      <div class="des"> {{detailInfo.desc}}</div>
      <div class="des-end"></div>
    </div>
    <div class="info-list" v-for="item in detailInfo.detailImage" :key="item.key">
      <div class="list-key">{{item.key}}</div>
      <img v-lazy="src" alt="" v-for="(src, index) in item.list" :key="index" @load="goodsImgLoad" >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsImgLoad() {
      this.$emit('goodsImgLoad')
    }
  }
}
</script>

<style scoped>
  .goods-info {
    padding: 20px 8px;
    position: relative;
  }
  .goods-des{
    padding: 0 15px ;
  }
.goods-des .des-start, 
.goods-des .des-end{
  width: 90px;
  height: 1px;
  background-color: rgb(58, 58, 58);
  /* transform: scaleY(0.5); */
  position: relative;
}
.des-end {
  float: right;
}
.des-start::after,
.des-end::after{
  content: "";
  position: absolute;
  top: -10px;
  width: 10px;
  height: 10px;
  background-color: #333;
}
.des-end::after{
  right: 0;
}
.des{
  padding: 15px 0;
  font-size: 14px;
}
.list-key {
  color: #333;
  line-height: 60px;
}
.info-list img {
  width: 100%;
}
</style>