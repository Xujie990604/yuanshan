/*
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-12-21 17:14:34
 * @LastEditors: x09898 coder_xujie@163.com
 * @FilePath: \yuanshan\src\mock\index.js
 * @Description:
 */
import Mock from 'mockjs'

Mock.setup({
  timeout: '200-500'
})

Mock.mock('/api/posts', () => {
  const mock = 'test数据'
  return mock
})
