<template>
  <div class="goods-params"
       v-if="Object.keys(detailParams).length !== 0">
    <div class="rule">
      <div class="params-key">
        {{detailParams.rule.key}}
      </div>
      <table>
        <tr v-for="item in detailParams.rule.tables[0]"
            :key="item[0]">
          <td v-for="(item2, index) in item"
              :key="index">{{item2}}</td>
        </tr>
      </table>

    </div>
    <div class="info">
      <div class="params-key">
        {{detailParams.info.key}}
      </div>
      <table>
        <tr v-for="item in detailParams.info.set"
            :key="item.key">
          <td class="info-key">{{item.key}}</td>
          <td class="info-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-params {
  padding: 10px 15px;
  font-size: 14px;
}
.params-key {
  line-height: 60px;
}
.goods-params table {
  width: 100%;
  border-collapse: collapse;
}
.rule td{
  text-align: center;
}
.goods-params table tr {
  height: 42px;
  margin-bottom: 6px;
}
.goods-params table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-key {
  width: 95px;
}
.info-value {
  color: var(--color-high-text);
}
.info-img img{
  width: 100%;
}
</style>