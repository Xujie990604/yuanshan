/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-05 16:18:47
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \yuanshan\src\main.js
 * @Description: 项目的 JS 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
