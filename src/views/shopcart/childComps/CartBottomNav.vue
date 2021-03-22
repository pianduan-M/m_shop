<template>
  <div class="cart-bottom-nav border-1px-top">
    <div class="nav-check-box">
      <div class="check-box"
           :class="{checked: allCheck}"
           @click="allChecked"></div>
      <div>全选</div>
    </div>
    <div class="nav-btn-wrap">
      <div class="totle-price">合计: <span class="totle">￥{{totlePrice}}</span></div>
      <div class="price-btn">结算<span v-show="checkedLenth">({{checkedLenth}})</span></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allCheck() {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => {
        return !item.checked
      })
    },
    totlePrice() {
      if (this.$store.state.cartList.length === 0) return 0
      return this.$store.state.cartList.filter(item => item.checked).reduce((totle, item) => {
        
        return  (totle += item.price * item.count)

      }, 0)
      // return this.$store.state.cartList.reduce((totle, item)=>{
      //   if(item.checked) {
      //     return totle +=  (parseInt(item.price) * item.count)
      //   }
      // },0) || 0
    },
    checkedLenth() {
      return this.$store.state.cartList.filter(item => item.checked).length
    }
  },
  methods: {
    allChecked() {
      this.$store.commit('allChecked', this.allCheck)
    }
  }
}
</script>

<style scoped>
.cart-bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99999;

  height: 44px;
  padding: 0 10px;
  background: #fff;
/* 
  -webkit-transform: translateZ(1px);
  transform: translate(1px); */
}
.nav-check-box {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.nav-check-box .check-box {
  width: 18px;
  height: 18px;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 50%;
  margin: 0 10px;
}

.nav-btn-wrap {
  display: flex;
  align-items: center;
}
.totle-price {
  font-size: 14px;
  color: #333;
}
.totle-price .totle {
  color: var(--color-high-text);
}
.nav-btn-wrap .price-btn {
  width: 80px;
  height: 30px;
  line-height: 30px;
  border-radius: 30px;
  margin-left: 10px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  background: linear-gradient(90deg, #fdc830, #f37335);
}
.checked {
  background: url("~assets/img/common/checked.png") no-repeat center;
}
</style>