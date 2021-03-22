<template>
  <div class="swiper-container" @touchstart="swiperClick">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(item, index) in data"
           :key="index">
       <img :src="item"
               alt="商品主图"
               @load="imgLoad">
      </div>

    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
function debounce(fn, delay = 300) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
import { Swiper, Autoplay, Pagination, } from 'swiper'
Swiper.use([Autoplay, Pagination])
// Swiper.use(loop)
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperInit: null,
      isEnlarge: false
    }
  },
  components: {
  },
  mounted() {
    this.swiperInit = debounce(() => {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        observer: true,
        observeParents: true,
      })
    })
  },
  methods: {
    imgLoad() {
      this.swiperInit()
    },
    swiperClick() {
      this.isEnlarge = !this.isEnlarge
    }
  }
}
</script>

<style scoped>
/* .swiper-container {
  width: 100%;
  overflow: hidden;
}

.swiper-wrapper {
  display: inline-block;
  white-space: nowrap;
}
.side {
  display: inline-block;
  width: 100vw;
  flex-shrink: 0;
}
.side img {
  width: 100%;
} */

.swiper-slide img {
  width: 100%;
}
</style>