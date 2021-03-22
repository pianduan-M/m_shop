<template>
  <div class="detail-tab-bar border-1px-top">
    <div class="tab-bar-left">
      <div class="tab-shop">
        <i class="iconfont icon-dianpu "></i>
        <div class="tab-title">店铺</div>
      </div>
      <div class="tab-service">
        <i class="iconfont icon-kefu"></i>
        <div class="tab-title">客服</div>
      </div>
      <div class="tab-Favorites">
        <i class="iconfont icon-shoucang"></i>
        <div class="tab-title">收藏</div>
      </div>
    </div>
    <div class="tab-bar-right">
      <div class="shopcart-btn"
          @touchstart="addCart">加入购物车</div>
      <div class="buy-btn"
          @touchstart="addCart">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$bus.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.detail-tab-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 55px;
  background: #fff;
  display: flex;
}
/* 左侧icon */
.tab-bar-left {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
.icon-shoucang {
  font-size: 20px;
  line-height: 0.5;
  position: relative;
  top: 2px;
}
.tab-title {
  font-size: 12px;
  margin-top: 8px;
  color: #333;
}

/* 右侧大按钮 */
.tab-bar-right {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.tab-bar-right > div {
  width: 48%;
  height: 36px;
  line-height: 36px;
  color: #fff;
  font-size: 14px;
}
.tab-bar-right .shopcart-btn {
  border-radius: 36px 0 0 36px;
  background: linear-gradient(90deg, #fdc830, #f37335);
}
.tab-bar-right .buy-btn {
  border-radius: 0 36px 36px 0;
  background: linear-gradient(90deg, #fd4f30, #f37335);
}
</style>