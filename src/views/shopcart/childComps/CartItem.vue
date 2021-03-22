<template>
  <div class="cart-item"
       @click="itemClick">
    <div class="shop-info">
      <span class="shop-check"
            :class="{checked: data.checked}"
             @click="checkboxClick"
            ></span>
      <span class="shop-logo iconfont icon-dianpu"></span>
      <span class="shop-name">{{data.shopName}}</span>
    </div>
    <div class="goods-info">
      <div class="goods-check"
           :class="{checked: data.checked}"
           @click="checkboxClick"
           ></div>
      <div class="goods-img"><img :src="data.image"
             :alt="data.title"></div>
      <div class="goods-params">
        <div class="params-title">
          {{data.title}}
        </div>
        <div class="params-desc">
          {{data.desc}}
        </div>
        <div class="params-price">
          <div class="price">{{nowPrice}}</div>
          <div class="count">
            <span class="priceBtn decrement"
                  v-show="isShow"
                  @click.stop="decrement"
                  :class="{lose: data.count <= 1 }">-</span>
            <span class="num"
                  :class="{change:isShow}"
                  @click.stop="countClick">×{{data.count}}</span>
            <span class="priceBtn increment"
                  v-show="isShow"
                  @click.stop="increment">+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      // 商品数量加减按钮的显示隐藏
      isShow: false
    }
  },
  computed: {
    nowPrice() {
      return '￥' + this.data.price
    }
  },
  methods: {
    countClick() {
      this.isShow = true
    },
    itemClick() {
      this.isShow = false
    },
    decrement() {
      if (!this.isShow) return false
      this.$store.dispatch('decrement', this.data.iid)
    },
    increment() {
      if (!this.isShow) return false
      this.$store.dispatch('increment', this.data.iid)
    },
    checkboxClick() {
      this.$store.dispatch('changeCheckBox', this.data.iid)
    }
  }
}
</script>

<style scoped>
.cart-item {
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */

  width: 100%;
  /* height: 150px; */
  background: #fff;
  padding: 10px 0;
  border-radius: 8px;
  margin: 10px 0;
}
.cart-item:first-child {
  margin-top: 0;
}
.cart-item:last-child {
  margin-bottom: 0;
}
.shop-info {
  height: 40px;
  line-height: 40px;
  color: #000;
}
.shop-logo {
  margin-right: 6px;
  width: 20px;
  height: 20px;
}

.shop-check {
  display: inline-block;
  /* margin-top: 2px; */
  position: relative;
  top: 3px;
  width: 18px;
  height: 18px;
  border: 1px solid #eee;
  border-radius: 50%;
  margin: 0 10px;
}
.goods-info {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* height: 150px; */
  margin-top: 10px;
}

.goods-check {
  width: 18px;
  height: 18px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 50%;
  margin: 0 10px;
}
.goods-img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: rgb(231, 231, 231);
  overflow: hidden;
  margin-right: 10px;
}
.goods-img img {
  width: 100%;
}

.goods-params {
  width: 54vw;
  height: 100px;
  /* height: 100%; */
  position: relative;
}
.params-title,
.params-desc {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.params-title {
  font-size: 16px;
  /* font-weight: bold; */
  color: #333;
}
.params-desc {
  margin-top: 15px;
  font-size: 12px;
}
.params-price {
  display: flex;
  justify-content: space-between;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.checked {
  background: url("~assets/img/common/checked.png") no-repeat center;
}
.params-price .price {
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bold;
  color: var(--color-high-text);
}
.params-price .count {
  border: 1px solid rgb(129, 129, 129);
  padding: 2px 0;
  border-radius: 6px;
  margin-right: 10px;
  color: #333;
}
.params-price .priceBtn {
  padding: 0 5px;
  width: 20px;
}
.count .num {
  /* border-left: ; */
  /* display: inline-block; */
  padding: 4px 6px;
  font-size: 13px;
  position: relative;
  top: -1px;
}
.num.change {
  border-right: 1px solid rgb(129, 129, 129);
  border-left: 1px solid rgb(129, 129, 129);
}
.params-price .decrement {
  padding: 4px 6px;
}

.priceBtn.lose {
  color: #eee;
}
</style>