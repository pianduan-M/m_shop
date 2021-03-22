<template>
  <div class="base-info" v-if="Object.keys(GoodsInfo).length !== 0">
    <div class="info-title">{{GoodsInfo.title}}</div>
    <div class="info-price">
      <span class="new-price">{{GoodsInfo.newPrice}}</span>
      <span class="old-price">{{GoodsInfo.oldPrice}}</span>
      <span class="discount" v-if="GoodsInfo.discountDesc" :style="{background:GoodsInfo.discountBgColor}">{{GoodsInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <span>{{GoodsInfo.columns[0]}}</span>
      <span>{{GoodsInfo.columns[1]}}</span>
      <span>{{GoodsInfo.services[0].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in GoodsInfo.services.length-1" :key="index">
       <img :src="GoodsInfo.services[index].icon">
       <span>{{GoodsInfo.services[index].name}}</span>
      </span>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GoodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 20px 8px;
  border-bottom: 6px solid #eee;
}

.base-info .info-title {
  line-height: 1.4;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(20, 20, 20);
}
.info-price {
  margin-bottom: 10px;
}
.new-price {
  color: var(--color-high-text);
  font-size: 25px;
  margin-right: 0.3em;
}
.old-price {
  text-decoration: line-through;
  margin-right: 0.3em;
}
.discount {
  display: inline-block;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 15px;
  background-color: var(--color-tint);

  transform: translateY(-10px);
}

.columns {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  color: rgb(131, 131, 131);
  border-bottom: 1px solid rgb(226, 226, 226);
}

.services {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding-top: 20px;
  color: rgb(43, 43, 43);
  /* line-height: 60px; */
}
.services img {
  margin-right: 0.1em;
  width: 14px;
  vertical-align: text-top;
}
</style>