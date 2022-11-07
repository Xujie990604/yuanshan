<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-05 18:27:00
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \yuanshan\src\views\login\loginForm.vue
 * @Description: 用户登录页面的表单
-->
<template>
  <div class="login-form">
    <!-- 登录表单 -->
    <el-form ref="login-form" model="formData" label-width="100px">
      <!-- 欢迎语 -->
      <div class="welcome">
        <div class="welcome-text">
          <span>欢迎登录</span>
        </div>
      </div>
      <!-- 用户名 -->
      <el-form-item label="用户名">
        <el-input  v-model="username"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码">
        <el-input  v-model="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  data () {
    return {
      formData: {
        // 表单中的数据
        username: '', // 用户名
        password: '' // 密码
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {
  width: 400px;
  height: 300px;
  border: 1px solid #eee;
  background-color: #ffffff;
}
</style>
