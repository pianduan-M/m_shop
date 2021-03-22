<template>
  <div class="detail-comment"
       v-if=" Object.keys(commentInfo).length !== 0 ">
    <div class="comment-header">
      <div class="header.title">宝贝评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="comment-user">
      <img :src="commentInfo.user.avatar"
           alt="">
      <div>
        <span>
          {{commentInfo.user.uname}}
        </span>
        <div class="extra">
          <span v-for="(extra, index) in commentInfo.extraInfo"
                :key="index">{{extra}}</span>
        </div>
      </div>
    </div>
    <div class="comment-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | dateFormat }}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs"
           v-if="commentInfo.images">
        <div class="imgs-title">买家秀</div>
        <span v-for="img in commentInfo.images"
              :key="img">
          <img :src="img"
               @touchstart="enlargedView(img)" />
        </span>
      </div>
    </div>
    <div class="rax-view rax-modal-mask"
         ref="raxModalMaskRef"
         @touchstart.stop="maskClick"
         >
      <div class="rax-view rax-modal-main">
        <img src=""
             alt=""
             ref="largeImgRef"
             >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isFixed: false
    }
  },
  filters: {
    dateFormat(value) {
      const date = new Date(value * 1000)

      const yy = date.getFullYear()
      const MM = (date.getMonth() + 1 + '').padStart(2, '0')
      const dd = (date.getDate() + '').padStart(2, '0')

      const hh = (date.getHours() + '').padStart(2, '0')
      const mm = (date.getMinutes() + '').padStart(2, '0')
      const ss = (date.getSeconds() + '').padStart(2, '0')

      return yy + '-' + MM + '-' + dd + '    ' + hh + ':' + mm + ':' + ss
    }
  },
  mounted() {
    this.$nextTick(() => {
      const body = document.querySelector("body");
      if (body.append) {
        body.append(this.$refs.raxModalMaskRef);
      } else {
        body.appendChild(this.$refs.raxModalMaskRef);
      }
    });
  },
  methods: {
    enlargedView(src) {
      this.$refs.raxModalMaskRef.style.visibility = 'visible'
      this.$refs.raxModalMaskRef.style.display = 'flex'
      this.$refs.largeImgRef.src = src
    },
    maskClick() {
       this.$refs.raxModalMaskRef.style.visibility = 'hidden'
      this.$refs.raxModalMaskRef.style.display = 'none'
      this.$refs.largeImgRef.src = ''
    }
  },
  beforeDestroy() {
    document.body.removeChild(this.$refs.raxModalMaskRef)
  }
}
</script>

<style scoped>
.detail-comment {
  box-sizing: border-box;
  padding: 20px;
  border-bottom: 5px solid #eee;
  background-color: #fff;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  color: #333;
  font-weight: bold;
}
.header-more {
  font-size: 14px;
  color: rgb(138, 138, 138);
  position: relative;
  right: 20px;
  font-weight: 500;
}
.header-more i {
  position: absolute;
  top: 2px;
  width: 10px;
  height: 10px;
  border: 1px solid #333;
  border-left: none;
  border-bottom: none;
  transform: rotate(45deg);
}
.comment-user {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #333;
}
.comment-user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
  margin-right: 6px;
}
.comment-detail p {
  font-size: 14px;
  padding: 10px 0;
}
.info-other {
  font-size: 12px;
}
.info-other .date {
  margin-right: 6px;
}
.imgs-title {
  line-height: 40px;
  color: #333;
  font-weight: bold;
}
.info-imgs img {
  height: 100%;
}
.info-imgs span {
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 3px;
  overflow: hidden;
}
.extra {
  font-size: 12px;
  margin-top: 6px;
}
.extra span {
  padding: 2px 3px;
  background-color: var(--color-high-text);
  color: #fff;
  margin-right: 2px;
}
.rax-view {
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  align-content: flex-start;
  border: 0 solid #000;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.rax-modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: auto;
  display: none;
}
.rax-modal-main {
  width: 100vw;
  max-height: 80vh;
  background-color: #fff;
  overflow: auto;
}
.rax-modal-main img{
  width: 100%;
}
</style>