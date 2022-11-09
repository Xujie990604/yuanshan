/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-10 07:54:07
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \yuanshan\src\common\formValidator.js
 * @Description: 表单验证规则的文件
 */
export default function (params) {
  const validator = []

  //
  if (params.required) {
    validator.push({
      required: true, message: '这是必填项', trigger: 'blur'
    })
  }
}
