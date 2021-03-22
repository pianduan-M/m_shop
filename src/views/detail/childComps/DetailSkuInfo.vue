<template>
  <div class="DetailSkuInfo">
    <div class="detail-sku"
         @touchstart="showSku">选择: <span>{{selectText}}</span><i class="sku-icon"></i></div>
    <div class="detail-info"
         @touchstart="showParams">参数: <span>{{paramsText}}</span><i class="sku-icon"></i></div>

    <popup :isShow="isShowPopup"
           @changShowStat="isShowPopup = false "
           closeable
           ref="popupRef">
      <sku :skuInfo="skuInfo"
           v-if="showInfo === 'sku' "
           :selectedSku="selectedSku" />

      <scroll style="height: 80vh" v-else-if="showInfo === 'params' ">
        <detail-goods-params :detailParams="detailParams"
                              />
      </scroll>
    </popup>
  </div>
</template>

<script>
import Popup from 'components/common/popup/Popup'
import Scroll from 'components/common/scroll/Scroll'

import DetailGoodsParams from './DetailGoodsParams'

import Sku from './sku/Sku'
export default {
  props: {
    skuInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    detailParams: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isShowPopup: false,
      showInfo: '',
      selectedSku: {
        'styleId': '',
        'sizeId': ''
      },
    }
  },
  components: {
    Sku,
    Popup,
    DetailGoodsParams,
    Scroll
  },
  computed: {
    selectText() {
      return this.$store.state.selectedText ? this.$store.state.selectedText : '请选择：颜色 尺码'
    },
    paramsText() {
      const paramsText = []
      this.detailParams.info.set.forEach(item => {
        paramsText.push(item.key)
      });
      return paramsText.join(" ")
    }
  },
  mounted() {
    this.$bus.$on('addCart', () => {
      this.isShowPopup = true
      this.showInfo = 'sku'
    })

  },
  methods: {
    showSku() {
      this.showInfo = 'sku'
      this.isShowPopup = true
    },
    showParams() {
      this.showInfo = 'params'
      this.isShowPopup = true

    }
  },
  watch: {
    isShowPopup() {
      if (this.isShowPopup) {
        this.$bus.$on('changeSelectedSku', (pid, cell) => {
          this.selectedSku[pid] = cell
        })
      } else {
        this.$bus.$off('changeSelectedSku')
      }
    }
  },
  beforeDestroy() {
    this.isShowPopup = false
    this.$refs.popupRef.$el.style.display = "none"
  }

}
</script>

<style scoped>
.DetailSkuInfo {
  position: relative;

  padding: 8px 10px;
  border-bottom: 6px solid #eee;
}
.DetailSkuInfo > div {
  position: relative;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.DetailSkuInfo span {
  display: inline-block;
  color: #000;
  margin-left: 1em;

  width: 60%;
  vertical-align: bottom;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detail-info {
  width: 100%;
}
.detail-sku {
  margin-bottom: 10px;
}
.sku-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgb(206, 206, 206);
  border-bottom-color: transparent;
  border-left-color: transparent;

  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) scaleY(0.8) rotate(45deg);
}
</style>