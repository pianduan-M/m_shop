<template>
  <div class="sku">
    <div class="header border-1px-bottom">
      <div class="img-wrap"><img :src="skuImg"
             alt=""></div>
      <div class="main">
        <div>{{skuPrice}}</div>
        <div>库存：{{skuStock}}</div>
        <div>{{selectText}}</div>
      </div>
    </div>
    <scroll class="body">
      <fence :allSku="allSku"
             :selectedSku="selectedSku"
             :data="skuInfo.props" />
    </scroll>
    <div class="footer">

      <div class="sku-quantity">
        <h2>购买数量</h2>
        <p class="btn-minus"
           @touchstart="goodsCount--"
           :class="{disable:goodsCount <= 1}">-</p>
        <p class="btn-input">
          <input type="tel"
                 v-model="goodsCount">
        </p>
        <p class="btn-plus"
           @touchstart="goodsCount++"
           :class="{disable:goodsCount >= skuStock}">+</p>
      </div>

      <div class="btns">
        <div class="add-cart-btn"
             @touchstart="addToCart">加入购物车</div>
        <div class="buy-btn"
             @touchstart="addToCart">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from '../../../../components/common/scroll/Scroll.vue'
import Fence from './Fence'

export default {
  props: {
    skuInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    selectedSku: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      allSku: [],
      isShow: true,
      goodsCount: 1

    }
  },
  components: {
    Fence,
    Scroll
  },
  mounted() {
    this._initAllSku()
  },
  methods: {

    _initAllSku() {
      this.allSku = this.skuInfo.skus.filter(item => item.stock > 0)
    },
    addToCart() {
      for (const key in this.selectedSku) {
        if (Object.hasOwnProperty.call(this.selectedSku, key)) {
          if (this.selectedSku[key] === '') {
            this.$toast.show(this.$store.state.selectedText)
            return false
          }
        }
      }

      this.$bus.$emit('addToCart', this.goodsCount)
    }
  },
  computed: {
    // 单个颜色图片
    skuImg() {
      return this.selectedSku.styleId && this.allSku.length > 0 ? this.allSku.find(item => item.styleId === this.selectedSku.styleId.styleId).img : this.skuInfo.defaultPic
    },
    // sku价格
    skuPrice() {
      if (this.selectedSku.styleId && this.selectedSku.sizeId) {
        return '￥' + this.skuInfo.skus.find(item => {
          return item.styleId === this.selectedSku.styleId.styleId && item.sizeId === this.selectedSku.sizeId.sizeId
        }).nowprice
      } else {
        return this.skuInfo.defaultPrice
      }
    },
    // sku 库存
    skuStock() {
      if (this.selectedSku.styleId && this.selectedSku.sizeId) {
        return this.skuInfo.skus.find(item => {
          return item.styleId === this.selectedSku.styleId.styleId && item.sizeId === this.selectedSku.sizeId.sizeId
        }).stock
      } else {
        return this.skuInfo.totalStock
      }
    },

    selectText() {
      const skuText = []
      const chooseText = []
      for (const key in this.selectedSku) {
        if (Object.hasOwnProperty.call(this.selectedSku, key)) {
          if (this.selectedSku[key]) {
            skuText.push(this.selectedSku[key].name)
          } else {
            const type = key.split('I')[0] + 'Key'
            chooseText.push(this.skuInfo[type])
          }

        }
      }
      if (skuText.length === Object.keys(this.selectedSku).length) {
        const val = '已选: ' + skuText.join(' ')
        this.$store.commit('handleSelectedText', val)
        return val

      } else {
        const val = '请选择: ' + chooseText.join(' ')
        this.$store.commit('handleSelectedText', val)
        return val
      }
    }

  },
  watch: {
    goodsCount() {
      if (this.goodsCount > this.skuStock) {
        this.goodsCount = this.skuStock
      } else if (this.goodsCount <= 0) {
        this.goodsCount = 1
      }
    }
  }
}
</script>

<style scoped>
.detai-sku-info {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  position: absolute;
  left: 0;
  top: 0;
}
.sku {
  padding: 0 10px;
}
.body {
  height: 70vh;
}

.header {
  display: flex;
}
.header .img-wrap {
  width: 100px;
  height: 100px;
  background: #eee;
  overflow: hidden;

  transform: translateY(-20%);
}
.img-wrap img {
  width: 100%;
}
.header .main {
  color: #051b28;
  font-size: 13px;
  line-height: 18px;
  margin: 10px 0 0 20px;
}
.main div:first-child {
  color: red;
  font-size: 20px;
  margin-bottom: 4px;
}

/* 底部 */
.footer {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
}
.footer .sku-quantity {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 0;

  color: rgb(75, 75, 75);
}
.footer .sku-quantity h2 {
  flex: 2;

  font-size: 16px;
  font-weight: normal;
}
.footer .sku-quantity .btn-minus,
.footer .sku-quantity .btn-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #f6f6f6;
}
.footer .sku-quantity .btn-input {
  width: 30px;
  height: 30px;
  margin: 0 0.2rem;
  position: relative;
}
.btn-minus.disable,
.btn-plus.disable {
  color: #999;
  pointer-events: none;
}
.footer .sku-quantity .btn-input input {
  font-size: 0.14rem;
  background-color: #f6f6f6;
  border: 0;
  width: 30px;
  height: 30px;
  text-align: center;
  outline: none;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
}

.btns > div {
  width: 48%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
}
.add-cart-btn {
  border-radius: 36px 0 0 36px;
  background: linear-gradient(90deg, #fdc830, #f37335);
}
.buy-btn {
  border-radius: 0 36px 36px 0;
  background: linear-gradient(90deg, #fd4f30, #f37335);
}
</style>