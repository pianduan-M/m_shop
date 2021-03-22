<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="item in data"
           :key="item.title">
        <a :href="item.link">
          <img :src="item.image"
               :alt="item.title"
               >
        </a>
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
      swiperInit: null
    }
  },
  components: {
  },
  mounted() {
    // this.swiperInit = debounce(() => {

    // })
    this.$nextTick(() => {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },

      })
    })
  },
  methods: {
    // imgLoad() {
    //   this.swiperInit()
    // }
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