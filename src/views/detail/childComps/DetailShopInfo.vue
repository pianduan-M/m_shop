<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo"
           :alt="shopInfo.name">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="shop-sells">
          <div class="count">{{shopInfo.cSells | sellCountFilter}}</div>
          <div>销量</div>
        </div>
        <div class="shop-goods">
          <div class="count">{{shopInfo.cGoods | sellCountFilter}}</div>
          <div>全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-right">
        <table>
          <tr v-for="item in shopInfo.score" :key="item.name">
            <td>{{item.name}}</td>
            <td :style="{color: item.isBetter?'red':'green'}">{{item.score}}</td>
            <td :style="{color:'#fff'}"><span :style="{background: item.isBetter?'red':'green'}">{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if(value < 10000) return value
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 20px 8px;
  border-bottom: 6px solid #eee;
}
.shop-logo {
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  font-size: 16px;
  color: rgb(95, 95, 95);
}
.shop-logo img {
  width: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
  margin-right: 10px;
}

.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.shop-middle > div {
  flex: 1;
}
.shop-middle-left {
  text-align: center;
  display: flex;
  font-size: 12px;
  border-right: 1px solid #eee;
}
.shop-middle-left > div {
  flex: 1;
}
.count {
  font-size: 20px;
  color: #000;
  margin-bottom: 10px;
}
.shop-middle-right {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  
  font-size: 13px;
  color: rgb(78, 78, 78);
}

.shop-middle-right td {
  padding: 5px;
}
.shop-bottom {
  padding: 20px 0;
  text-align: center;
}
.shop-bottom a{
  background-color: rgb(243, 243, 243);

  padding: 8px 40px;
  border-radius: 10px;
  font-size: 14px;
}
</style>