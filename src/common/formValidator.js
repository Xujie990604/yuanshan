/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-10 07:54:07
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \yuanshan\src\common\formValidator.js
 * @Description: 表单验证规则的文件
 */
export default function (params) {
  // 被函数返回的验证规则数组
  const validatorList = []
  // 默认的验证时机为 blur
  let trigger = 'blur'

  // 字段是否为必填
  if (params.required) {
    validatorList.push({
      required: true, message: '这是必填项', trigger: 'blur'
    })
  }

  // 验证方式默认为 blur,使用时可以传入参数进行更改
  if (params.trigger) {
    trigger = params.trigger
  }

  // 验证长度是否为 3-8
  // TODO:使用正则进行校验
  if (params.lengthRange) {
    const validator = (rule, value, callback) => {
      if (value.length > 8 || value.length < 3) {
        callback(new Error('密码长度需要在3-8'))
      }
      callback()
    }
    validatorList.push({
      validator,
      trigger
    })
  }

  // 将最终的验证规则数组返回出去
  return validatorList
}
