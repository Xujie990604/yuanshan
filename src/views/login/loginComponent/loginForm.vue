<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-05 18:27:00
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \yuanshan\src\views\login\loginComponent\loginForm.vue
 * @Description: 用户登录页面的表单
-->
<template>
  <div class="login-form">
    <!-- 欢迎语 -->
    <div class="welcome">
      <span class="welcome-text">欢迎登录</span>
    </div>

    <!-- 登录表单 -->
    <el-form
      ref="loginForm"
      :model="formData"
      :rules="rules"
      label-width="80px"
      label-position="left"
    >
      <!-- 用户名 -->
      <el-form-item
        class="username-input input"
        label="用户名:"
        prop="username"
      >
        <el-input
          v-model="formData.username"
          placeholder="请输入用户名"
          type="text"
        />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item
        class="password-input input"
        label="密码:"
        prop="password"
      >
        <el-input
          v-model="formData.password"
          placeholder="请输入密码"
          type="password"
          show-password
        />
      </el-form-item>
    </el-form>

    <!-- 登录按钮 -->
    <el-button
      class="login-button"
      type="primary"
      @click="loginMethod"
    >
      登录
    </el-button>
  </div>
</template>

<script>
const passwordValidator = (rule, value, callback) => {
  console.log(rule)
  if (!value) {
    callback(new Error('这是必选项'))
  }
  if (value.length < 10) {
    callback(new Error('密码长度不够'))
  }
  callback()
}
export default {
  name: 'LoginForm',
  data () {
    return {
      formData: {
        // 表单中的数据
        username: '', // 用户名
        password: '' // 密码
      },
      rules: {
        username: [
          {
            required: true,
            message: '这是必填项',
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: passwordValidator,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 点击登录按钮触发的事件
    loginMethod () {

    }
  }
}
</script>

<style scoped lang="scss">
// 登录表单组件的样式
.login-form {
  width: 400px;
  height: 300px;
  border: 1px solid #eee;
  border-radius: 6px 6px 0 0;
  background-color: #ffffff;

  // 欢迎语的样式
  .welcome {
    height: 50px;
    margin-bottom: 20px;
    border-bottom: 3px solid #eee;
    text-align: center;
    line-height: 50px;
    .welcome-text {
      font-size: 24px;
      color: #409EFF;
    }
  }

  // 表单的样式
  .el-form {
    margin-left: 20px;
    // 用户名和密码的样式
  .input {
    width: 320px;
    margin-bottom: 40px;
  }
  }

  // 登录按钮的样式
  .login-button{
    width: 300px;
    margin-left: 50px;
  }
}
</style>
