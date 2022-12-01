/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-05 16:18:47
 * @LastEditors: x09898 coder_xujie@163.com
 * @FilePath: \yuanshan\src\router\index.js
 * @Description: 路由页面
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/userHome.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/userLogin.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
