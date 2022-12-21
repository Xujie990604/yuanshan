<!--
 * @Author: x09898 coder_xujie@163.com
 * @Date: 2022-12-21 16:55:43
 * @LastEditors: x09898 coder_xujie@163.com
 * @FilePath: \yuanshan\src\views\Home\userHome.vue
 * @Description:
-->
<template>
  <div class="user-home">
    home页面
  </div>
</template>

<script>
export default {
  name: 'UserHome',
  data () {
    return {
    }
  },
  created () {
    this.$axios
      .post(
        '/api/posts',
        {
          title: 'xujie',
          body: 'baby',
          userId: 1
        },
        {
          timeout: 50000
        })
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped lang="scss">

</style>
