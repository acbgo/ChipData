<template>
  <el-container>
    <el-header>
      <span style="margin-top: 13px">Register User</span>
    </el-header>
    <el-main>
      <el-form :model="userForm"
               :rules="rules"
               ref="userForm"
               label-position="right"
               label-width="115px"
               style="width: 500px; margin-left: 480px; margin-top: 50px; height: 400px">

        <el-form-item label="User Name" placeholder="用户名" prop="username">
          <el-input :rows="1" v-model="userForm.username"></el-input>
        </el-form-item>

        <el-form-item label="Password" placeholder="密码" prop="password">
          <el-input :rows="1" v-model="userForm.password"></el-input>
        </el-form-item>

        <el-form-item label="Email" placeholder="邮箱" prop="email">
          <el-input :rows="1" v-model="userForm.email"></el-input>
        </el-form-item>

      </el-form>
      <el-button @click="submit" type="primary" >Submit</el-button>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      userForm: {
        username: '',
        password: '',
        email: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {
            validator: function (rule, value, callback) {
              if (value === '' || value === null) {
                callback(new Error('请输入用户名'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        password: [{required: true, message: '请设置密码', trigger: 'blur'},
          {
            validator: function (rule, value, callback) {
              if (value === '' || value === null) {
                callback(new Error('请设置密码'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        email:
          [{required: true, message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'},
            {
              validator: function (rule, value, callback) {
                if (value === '' || value === null) {
                  callback(new Error('请输入邮箱'))
                } else {
                  callback()
                }
              },
              trigger: 'blur'
            }
          ]
      }
    }
  },
  methods: {
    submit () {
      this.$message({
        message: '注册成功',
        type: 'success'
      })
      this.$router.push('/mainPage')
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: coral;
  display: flex;
  justify-content: center;
  font-size: 30px;
}
</style>
