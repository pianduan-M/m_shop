<template>
  <scroll class="cart-content"
          ref="scrollRef"
          >
    <div style="padding: 10px 0">
      <cart-item v-for="(item, index) in cartList"
                 :key="index"
                 :data="item" />
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartItem from './CartItem'

export default {
  computed: {
    cartList() {
      return this.$store.state.cartList
    }
  },
  components: {
    Scroll,
    CartItem
  },
  activated() {
    // console.log(this.$refs.scrollRef);
    if (this.$refs.scrollRef) {
      this.$refs.scrollRef.refresh()
    }
  },
}
</script>

<style scoped>
.cart-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 88px;

  overflow: hidden;
  background: #eee;
  padding: 0 10px;
}
</style>