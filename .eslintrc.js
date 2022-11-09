/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-05 18:54:09
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \yuanshan\.eslintrc.js
 * @Description: Eslint 插件的配置规则
 */

module.exports = {
  root: true,
  env: {
    node: true
  },
  // 这两条规则，每个都对应着一个Eslint的规则合集
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser' // 指定哪个插件作为Eslint的解析器
  },
  // error: 报错 warn: 警告 off: 关闭
  rules: {
  }
}
