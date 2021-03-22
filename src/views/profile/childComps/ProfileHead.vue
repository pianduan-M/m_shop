<template>
  <div class="profile_head">
    <div class="user_head">
      <div class="user_portrait"></div>
      <div class="user_name">
        <div>用户姓名</div>
      </div>
    </div>
    <div class="info_tpl">
      <div class="tpl_item">
        <div class="item_number">
          <span>165</span>
        </div>
        <div class="item_name">
          <span>收藏夹</span>
        </div>
      </div>
      <div class="tpl_item">
        <div class="item_number">
          <span>16</span>
        </div>
        <div class="item_name">
          <span>关注店铺</span>
        </div>
      </div>
      <div class="tpl_item">
        <div class="item_number">
          <span>66</span>
        </div>
        <div class="item_name">
          <span>足迹</span>
        </div>
      </div>
      <div class="tpl_item">
        <div class="item_number">
          <span>550</span>
        </div>
        <div class="item_name">
          <span>红包卡券</span>
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
.profile_head {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(to right, #FD9126, #FF5000);
  padding: 10px;

  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
.profile_head > div {
  width: 100%;
}
/* 头像 */
.user_head {
  display: flex;
  padding-top: 20px;
}
.user_head .user_portrait {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  background: url(~assets/img/profile/maill_icon/sns_logo.jpg) no-repeat;
  background-position: center center;
  background-size: contain;
}
.user_name {
  margin-left: 0.8rem;
  font-weight: bold;
}

/* 功能栏 */
.info_tpl {
  display: flex;
  justify-content: space-around;
  text-align: center;
  
  padding: 1rem 0;
  font-size: 12px;
}
.tpl_item .item_number{
  margin-bottom: 0.5rem;
}
</style>