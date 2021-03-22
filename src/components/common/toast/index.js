const obj = {}

import Toast from './Toast.vue'

obj.install = function (Vue) {
  // 1 创建构造器
  const ToastContructor = Vue.extend(Toast)
  // 创建toast实例
  const toast = new ToastContructor()
  // 挂载到元素上，没有这一步拿不到组件元素
  toast.$mount(document.createElement('div'))
  // 插到DOM上
  document.body.appendChild(toast.$el)
  // 添加vue全局组件
  Vue.prototype.$toast = toast
  
}

export default obj