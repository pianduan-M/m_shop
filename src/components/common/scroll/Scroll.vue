<template>
  <div class="wrapper"
       ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// BScroll.use(ObserveImage)

export default {
  props: {
    // 滚动边缘回弹动画 上
    bounceTop: {
      type: Boolean,
      default: true
    },
    // 滚动边缘回弹动画 下
    bounceBottom: {
      type: Boolean,
      default: true
    },
    // 滚动边缘回弹动画 左
    bounceLeft: {
      type: Boolean,
      default: true
    },
    // 滚动边缘回弹动画 右
    bounceRight: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.$nextTick(() => {

      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          pullUpLoad: true,
          observeImage: true,
          observeDOM: true,
          click: true,
          // momentum: false,
          useTransition: false,
          bounce: {
            top: this.bounceTop,
            bottom: this.bounceBottom,
            left: this.bounceLeft,
            right: this.bounceRight
          },
          pullUpLoad: true,
          disableMouse: false,
          probeType: 1,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          }
        })
        // 滚动事件
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
        //  上拉事件
        this.scroll.on('pullingUp', () => {
          this.refresh()
          this.$emit('pullingUp')
        })
      } else {
        // 复用Bscroll
        console.log('复用');
        this.scroll.refresh()
      }
    })

  },
  methods: {
    scrollTo(x, y, time = 200) {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    scrollY() {
      return this.scroll.y
    },
    scrollToElement(el, time, offsetX, offsetY) {
      this.scroll && this.scroll.scrollToElement(el, time, offsetX, offsetY)
    },

    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.content {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.wrapper {
  overflow: hidden;
}

</style>