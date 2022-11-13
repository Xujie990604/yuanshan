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
import validator from './common/formValidator'

Vue.use(ElementUI)

// 将表单验证的规则添加到原型上
Vue.prototype.validator = validator

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
