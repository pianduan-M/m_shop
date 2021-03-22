<template>
  <div class="profile_body">
    <div class="info_tpl">
      <div class="user_order">
        <div class="order_head border-1px-bottom">
          <div class="order_head_item">
            <h2>我的订单</h2>
          </div>
          <div class="order_head_item"><a href="javascript:void(0)">查看全部订单 ></a></div>
        </div>
        <div class="order_body">
          <div class="order_body_item">
            <div class="item_icon"><i></i><span class="item_num">2</span></div>
            <div class="item_text">待付款</div>
          </div>
          <div class="order_body_item">
            <div class="item_icon"><i></i><span class="item_num">22</span></div>
            <div class="item_text">待发货</div>
          </div>
          <div class="order_body_item">
            <div class="item_icon"><i></i><span class="item_num">22</span></div>
            <div class="item_text">待收货</div>
          </div>
          <div class="order_body_item">
            <div class="item_icon"><i></i><span class="item_num">22</span></div>
            <div class="item_text">评价</div>
          </div>
          <div class="order_body_item">
            <div class="item_icon"><i></i><span class="item_num">22</span></div>
            <div class="item_text">退款/售后</div>
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

.order_head {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding-bottom: 0.7rem;
}

.order_body {
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: nowrap;
  padding: 0.7rem 0;
}
.order_body .item_icon {
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
.order_body_item:nth-child(1) .item_icon {
  background-image: url(~assets/img/profile/maill_icon/待付款.png) ;
}
.order_body_item:nth-child(2) .item_icon {
  background-image: url(~assets/img/profile/maill_icon/待发货.png) ;
}
.order_body_item:nth-child(3) .item_icon {
  background-image: url(~assets/img/profile/maill_icon/待收货.png) ;
}
.order_body_item:nth-child(4) .item_icon {
  background-image: url(~assets/img/profile/maill_icon/评价.png) ;
}
.order_body_item:nth-child(5) .item_icon {
  background-image: url(~assets/img/profile/maill_icon/售后_退款.png) ;
}
.item_icon .item_num{
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.1em 0.5em;
  color: #ff5500;
  font-size: 11px;
  background-color: #fff;
  border: 1px solid #ff5500;
  border-radius: 1em;
  transform: translate(40%, -10%);
}
</style>