import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
// import uView from 'uview-ui'
// Vue.use(uView)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
// main.js，注意要在use方法之后执行

// 如此配置即可
uni.$u.config.unit = 'rpx'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif