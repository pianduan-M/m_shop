<template>
  <div class="toast"
       ref="toastRef"
       :class="{isOpacity: isShow}"
       >
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'message',
      isShow: false
    }
  },
  methods: {
    show(message, duration = 1500) {
      this.$refs.toastRef.style.display = 'block'
      this.message = message
      this.isShow = true
      setTimeout(() => {
         this.isShow = false
        this.$refs.toastRef.addEventListener('transitionend', () => {
          this.$refs.toastRef.style.display = 'none'
        })
      }, duration);
    }
  }
}
</script>

<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;

  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 14px 20px;
  border-radius: 6px;
  transition: opacity 0.5s;
  opacity: 0;
  display: none;
}
.isOpacity {
  opacity: 1;
}
</style>