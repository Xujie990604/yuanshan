<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-11-05 17:04:25
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \yuanshan\src\views\login\userLogin.vue
 * @Description: 登录页面
-->
<template>
  <div class="user-login">
    <!-- 用户的登录表单 -->
    <login-form />
  </div>
</template>

<script>
import loginForm from './loginComponent/loginForm.vue'
export default {
  name: 'UserLogin',
  components: { loginForm }
}
</script>

<style scoped lang="scss">
/* 登录页面 */
.user-login{
  position: relative;
  height: 100vh;
  background-image: url("../../assets/img/login_bg.jpg");
  background-repeat: no-repeat;

  // 登录表单
  .login-form {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

}

</style>
