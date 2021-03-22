<template>
  <div class="goods-item"
       @click="itemClick">
    <img :src="showImg"
         alt="goods.title"
         @load="imgLoad"
         >
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="goods_price">{{goods.price}}</span>
      <span class="goods_cfav">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.goods.image || this.goods.img || this.goods.show.img 
    }
  },
  methods: {
    itemClick() {
      this.$router.push({path: '/detail', query:{iid:this.goods.iid}})
    },
    imgLoad() {
      this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
  border-radius: 8px;
}

.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.goods-info > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.2em;
}
.goods-info .goods_price {
  color: var(--color-hign-text);
  margin-right: 20px;
}
.goods-info .goods_cfav {
  position: relative;
}
.goods_cfav::after {
  content: "";
  position: absolute;
  top: -1px;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  /* background-color: violet; */
}
</style>