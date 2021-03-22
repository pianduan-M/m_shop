<template>
  <div class="popup-container" ref="popupRef">
    <transition name="fade">
      <div class="popup-mask"
          @touchstart="changShowStat"
           v-if="isShow">
      </div>

    </transition>

    <!-- 内容 -->
    <transition :name="'slide-'+position" @after-leave="afterLeave"  @before-enter="beforeEnter">
      <div class="popup-content"
           :style="getPosition"
           v-if="isShow"
           >

        <i @touchstart="changShowStat"
           class="closeBtn"
           v-if="closeable">

        </i>
      <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
     
    }
  },
  mounted() {
    this.$nextTick(() => {
      const body = document.querySelector("body");
      if (body.append) {
        body.append(this.$el);
      } else {
        body.appendChild(this.$el);
      }
      this.$refs.scrollRef && this.$refs.scrollRef.refresh()
    });
    
  },
  computed: {
    getPosition() {
      return this.position === 'top' ? 'top:0' : 'bottom: 0'
    }
  },
  methods: {
    changShowStat() {
      this.$emit('changShowStat')
    },
    afterLeave() {
      this.$refs.popupRef.style.width = '0'
    },
    beforeEnter() {
      this.$refs.popupRef.style.width = '100%'
    }
  }
}
</script>

<style scoped>
.popup-container {
  position: absolute;
  top: 0;
  left: 0;
  /* right: 0; */
  bottom: 0;

  overflow: hidden;
}
.effective{
  width: 100%;
}
/* 遮罩层 */
.popup-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

/* 内容 */
.popup-content {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9999;

  max-height: 80%;
  background: #fff;
}

/* 关闭按钮 */
.closeBtn {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;

  width: 18px;
  height: 18px;
  padding: 2px;
  border: 1px solid rgb(27, 27, 27);
  border-radius: 50%;
}
.closeBtn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);

  width: 70%;
  height: 1px;
  background: rgb(27, 27, 27);
}
.closeBtn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);

  width: 70%;
  height: 1px;
  background: rgb(27, 27, 27);
}


/* css 动画样式 */

.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.slide-bottom-enter,.slide-bottom-leave-to/* .fade-leave-active below version 2.1.8 */ {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

.slide-top-enter-active,
.slide-top-leave-active {
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.slide-top-enter,.slide-top-leave-to/* .fade-leave-active below version 2.1.8 */ {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
</style>