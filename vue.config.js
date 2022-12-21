/*
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-11-14 12:01:29
 * @LastEditors: x09898 coder_xujie@163.com
 * @FilePath: \yuanshan\vue.config.js
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
