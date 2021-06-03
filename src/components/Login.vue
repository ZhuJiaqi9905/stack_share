<template>
  <div>
    <div style='display: flex; justify-content: center; margin-top: 150px'>
      <el-card class='box-card'>
        <div slot='header' class='clearfix'>
          <span>请登录</span>
        </div>
        <table>
          <tr>
            <td>昵称</td>
            <td>
              <el-input
                v-model='user.nickname'
                placeholder='请输入昵称'
              ></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <el-input
              v-model='user.password'
              type='password'
              placeholder='请输入密码'
            ></el-input>
          </tr>
          <tr>
            <td colspan='2'>
              <el-button style='width: 300px' type='primary' @click='login'
                >登录</el-button
              >
            </td>
          </tr>
          <tr>
            <td colspan='2'>
            <el-radio v-model='radio' label='1'>用户</el-radio>
            <el-radio v-model='radio' label='2'>极客</el-radio>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        nickname: '',
        password: ''
      },
      radio: '1'
    }
  },
  methods: {
    login () {
      alert(JSON.stringify(this.user))
    }
  }
}

</script>
