<template>
<div>
    <div style='display: flex; justify-content: center; margin-top: 150px'>
      <el-card class='box-card'>
        <div slot='header' class='clearfix'>
          <span>请注册</span>
        </div>
        <table>
          <tr>
            <td>姓名</td>
            <td>
              <el-input
                v-model='user.username'
                placeholder='请输入姓名'
              ></el-input>
            </td>
          </tr>
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
            <td>邮箱</td>
            <td>
              <el-input
                v-model='user.email'
                placeholder='请输入邮箱'
              ></el-input>
            </td>
          </tr>
          <tr>
            <td>设置密码</td>
            <el-input
              v-model='user.password'
              type='password'
              placeholder='请输入密码'
            ></el-input>
          </tr>
          <tr>
            <td>确认密码</td>
            <el-input
              v-model='user.rePassword'
              type='password'
              placeholder='请确认密码'
            ></el-input>
          </tr>
          <tr>
            <td colspan='2'>
              <el-button style='width: 300px' type='primary' @click='doRegister'
                >立即注册</el-button
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
  name: "signup",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        rePassword: ""
      },
      radio: "1"
    };
  },
  methods: {
    doRegister() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.email) {
        this.$message.error("请输入邮箱！");
        return;
      } else if (this.user.email != null) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.user.email)) {
          this.$message.error("请输入有效的邮箱！");
        } else if (!this.user.password || !this.user.rePassword) {
          this.$message.error("请输入密码！");
          return;
        } else if (this.user.password !== this.user.rePassword){
            this.$message.error("两次输入密码不一致")
        }
        else {
          this.$router.push({ path: "/" }); 
        }
      }
    }
  }
}
</script>
