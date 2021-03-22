<template>
  <div id="shopcart">
    <nav-bar class="shopcart-nav border-1px-bottom">
      <div slot="center">购物车({{$store.getters.cartListLength}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-nav />
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import CartList from './childComps/CartList'
import CartBottomNav from './childComps/CartBottomNav'

export default {
  name: 'shopcart',
  components: {
    NavBar,
    CartList,
    CartBottomNav
  }
}
</script>

<style scoped>
#shopcart {
  /* position: relative; */
  /* height: 100vh; */
  background: #eee;
}
.shopcart-nav {
  background: var(--color-tint);
  color: white;
}
.test {
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 30px;
  color: #000;
  z-index: 9999999;
}
</style>