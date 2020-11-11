<template>
  <div class="page">
    <van-tabs>
      <van-tab title="账号登录">
        <van-form @submit="onSubmit">
          <div class="form-input">
            <van-field class="form-van-field"
              v-model="account"
              name="用户名"
              label=""
              placeholder="用户名"
                       input-align="center"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field class="form-van-field"
              v-model="password"
              type="password"
              name="密码"
              label=""
              placeholder="密码"
              input-align="center"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </div>
          <div class="form-button-login">
            <van-button round block type="info" native-type="submit">
              登录
            </van-button>
          </div>
        </van-form>
        <div class="third-login">
          <div class="third-login-label">第三方登录</div>
          <div class="third-login-logo">
            <div class="logo-left"><van-icon class="iconfont" class-prefix='icontixing' name="" color="#1989fa" size="50"/></div>
            <div class="logo-center"><van-icon class="iconfont" class-prefix='iconxinjian' name="" color="#07c160" size="50"/></div>
            <div class="logo-right"><van-icon class="iconfont" class-prefix='iconlishibanben' name="" color="#555555" size="50"/></div>
          </div>
        </div>
      </van-tab>
      <van-tab title="快捷登录">
        手机验证码登录
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    console.log('start to enter created ', this.$t('messages.hello'))
  },
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const that = this
      const params = {
        account: this.account,
        password: this.password
      }
      this.$Api.User.login(params).then((res) => {
        that.$router.push('/demo')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    height: 100%;
    width: 100%;
    background-color: yellow;
    .form-input {
      padding: 36px;
      .form-van-field {
        border:1px solid #BBE1F1;
        border-radius: 30px;
        margin-top: 30px;
      }
    }
    .form-button-login {
      margin-left: 36px;
      margin-right: 36px;
    }
    .third-login {
      margin-top: 50px;
      .third-login-label {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .third-login-logo {
        display: flex;
        margin-top: 30px;
        .logo-left {
          flex: 0 0 10px;
          margin-left: 36px;
        }
        .logo-center {
          flex: 1;
        }
        .logo-right {
          flex: 0 0 10px;
          margin-right: 36px;
        }
      }
    }
  }
</style>
