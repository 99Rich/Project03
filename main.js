import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import uView from 'uview-ui'
Vue.use(uView)

// import 'ant-design-vue/dist/antd.css';
// import {StarOutlined} from 'ant-design-vue';
// Vue.use(StarOutlined)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
// Surely Vue
// import { createApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif