<template>
  <div class="items">
    <a href="javascript:void(0)"
      @touchstart="cellClick"
       :class="{checked:isActived,disabled:isDisabled}">
      <!-- <img src="../../../assets/img/common/top.png"
                     class="prop-img"> -->
      <!--  -->
      <span>{{prop.name}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    prop: {
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
    },
    allSku: {
      type: Array,
      default() {
        return []
      }
    }

  },
  data() {
    return {
      arr: []
    }
  },
  computed: {
    isDisabled() {
      
      for(const k in this.selectedSku) {
        if(k !== this.pid) {
          if(this.selectedSku[k]){
            this.arr = this.allSku.filter(item => item[k] === this.selectedSku[k][k])
          }else {
            this.arr = this.allSku.slice()
          }
        }
      }
      return !this.arr.some(item => item[this.pid] === this.vid)
    },
    pid() {
      return this.prop.type + 'Id'
    },
    vid() {
      return this.prop[this.pid]
    },
    isActived() {
      return this.vid === this.selectedSku[this.pid][this.pid]
    }
  },
  methods: {
    cellClick() {
      if (this.selectedSku[this.pid][this.pid] === this.vid) {
        this.$bus.$emit('changeSelectedSku', this.pid, '')
      } else {
        this.$bus.$emit('changeSelectedSku', this.pid, this.prop)
      }
    }
  }
}
</script>

<style scoped>
.items {
  display: inline-block;
}
.items a {
  position: relative;
  display: inline-block;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  padding: 3px 12px;
  border-radius: 8px;
  font-size: 13px;
  margin: 0 8px 8px 0;
  color: #555;
  line-height: 24px;
}
.sku-list-wrap .items a span {
  line-height: 24px;
}
.items a .prop-img {
  height: 24px;
  width: 24px;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 6px;
  border: none;
}
.items .checked {
  border-color: #ff0036;
  color: #ff0036;
  background-color: #fff5f7;
}
.items .disabled {
  pointer-events: none;
  color: #999999;
  background-color: #f2f2f2;
  white-space: nowrap;
}
</style>