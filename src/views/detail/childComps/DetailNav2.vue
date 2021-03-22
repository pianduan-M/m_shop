<template>
  <nav-bar class="border-1px-bottom">
    <div class="back" slot="left" @touchstart="navBack"><img src="~assets/img/common/back.svg" alt=""></div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  data() {
    return {
     
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    navBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail-nav {
  display: flex;
  font-size: 14px;
}
.detail-nav > div {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}

</style>