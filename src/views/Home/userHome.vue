<template>
  <div class="user-home">
    <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-success="handleChange"
        :file-list="fileList"
        class="el-upload"
      >
    </el-upload>
  </div>
</template>

<script>
import { read, utils } from 'xlsx'
export default {
  name: 'UserHome',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
