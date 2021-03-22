<template>
  <div class="profile_tools">
    <div class="info_tpl">
      <div class="user_tools">
        <div class="tools_head">
          <div class="order_head_item">
            <h2>必备工具</h2>
          </div>
          <div class="order_head_item"><a href="javascript:void(0)">查看全部工具 ></a></div>
        </div>
        <div class="tools_body">
          <div class="tools_wrapper">
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                每日反现
              </div>
            </div>
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                领券中心
              </div>
            </div>
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                闲置换钱
              </div>
            </div>
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                客服小蜜
              </div>
            </div>
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                花呗
              </div>
            </div>
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                我的快递
              </div>
            </div>
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                我的评价
              </div>
            </div>
            <div class="tools_item">
              <div class="tools_item_icon">
                <span class="item_num"></span>
              </div>
              <div class="tools_item_text">
                主题换肤
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info_tpl {
  background-color: #fff;
  border-radius: 0.5rem;
  margin: 0.7rem;
  padding: 0.7rem;
  font-size: 12px;
  color: rgb(51, 51, 51);
}

.info_tpl h2 {
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 16.8px;
  white-space: nowrap;
  font-size: 14px;
}

.tools_head {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding-bottom: 0.7rem;
}

.tools_wrapper {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  padding: 0.7rem 0;
}
.tools_wrapper .tools_item {
  flex: 25%;
  padding: 1em 0;
}
.tools_item .tools_item_icon {
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5em;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.tools_item:nth-child(1) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/每日返现.png) ;
}
.tools_item:nth-child(2) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/领券中心.png) ;
}
.tools_item:nth-child(3) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/闲置换钱.png) ;
}
.tools_item:nth-child(4) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/客服小蜜.png) ;
}
.tools_item:nth-child(5) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/花呗.png) ;
}
.tools_item:nth-child(6) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/我的快递.png) ;
}
.tools_item:nth-child(7) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/我的评价.png) ;
}
.tools_item:nth-child(8) .tools_item_icon {
  background-image: url(~assets/img/profile/maill_icon/主题换肤.png) ;
}
</style>