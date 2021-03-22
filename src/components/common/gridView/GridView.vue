<template>
  <div class="grid-view"
       ref="gridRef">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      type: Number,
      default: 2
    },
    vMargin: {
      type: Number,
      default: 8
    },
    hMargin: {
      type: Number,
      default: 8
    },
    itemSpace: {
      type: Number,
      default: 8
    },
    lineSpace: {
      type: Number,
      default: 8
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._autoLayout()
    })
    window.onresize = ()=> {
       this._autoLayout()
    }
  },
  updated() {
    this._autoLayout()
  },
  methods: {
    _autoLayout() {
      // 1获取元素
      let gridEl = this.$refs.gridRef
      let children = gridEl.children

      //  2. 设置gridEl 内边距
      gridEl.style.padding = `${this.hMargin}px ${this.vMargin}px`

      // 3 计算 item 宽度
      let itemWidth = (gridEl.clientWidth - this.vMargin * 2 - (this.cols - 1) * this.itemSpace) / this.cols -1
      // 4 设置 itme 宽度

      for (let i = 0; i < children.length; i++) {
        // 设置宽度
        let item = children[i]
        item.style.width = itemWidth + "px"
        item.setAttribute('title',i)
        // 设置边距
        if ((i + 1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + 'px'
        }else {
           item.style.marginRight = 0 + 'px'
        }
        // 设置行距
        if (i >= this.cols) {
          item.style.marginTop = this.lineSpace + 'px'
        }
      }
    }
  }
}
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>