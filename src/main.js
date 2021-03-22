import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


// import PreventDefault from './utils/preventDefault'

// 使用toast插件
import Toast from './components/common/toast'
Vue.use(Toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
