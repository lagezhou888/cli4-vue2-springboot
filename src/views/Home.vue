<template>
  <div class="page">
    <div class="page-tabs">
      <van-tabs swipeable title-active-color="white" background="#333333" v-model="activeName">
        <van-tab title="账号登录" name="account">
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
              <div class="logo-left"><van-icon class="iconfont" class-prefix='icon-weibo' name="" color="#d81e06" size="50"/></div>
              <div class="logo-center"><van-icon class="iconfont" class-prefix='icon-sign_wechat' name="" color="#07c160" size="50"/></div>
              <div class="logo-right"><van-icon class="iconfont" class-prefix='icon-qq' name="" color="#1296db" size="50"/></div>
            </div>
          </div>
        </van-tab>
        <van-tab title="快捷登录" name="code">
          <van-field
            v-model="verifycode"
            center
            clearable
            label="验证码"
            placeholder="请输入验证码"
          >
            <div slot="button">
              <img class="validate-code" src="../assets/validateCode/line.png"  @click="getVerifyCode"/>
            </div>
          </van-field>
          <div class="form-button-login">
            <van-button round block type="info" @click="codeSubmit()">
              登录
            </van-button>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    // console.log('start to enter created ', this.$t('messages.hello'))
    this.getVerifyCode()
  },
  data () {
    return {
      account: '',
      password: '',
      verifycode: '',
      rightCode: '',
      activeName: 'account'
    }
  },
  methods: {
    codeSubmit () {
      if (this.verifycode === '') {
        this.$toast('请输入验证码')
      } else {
        if (this.verifycode === this.rightCode) {
          this.$router.push('/userhome')
        } else {
          this.$toast('验证码错误')
          this.getVerifyCode()
        }
      }
    },
    getVerifyCode () {
      const that = this
      this.$Api.User.getVerifyCode().then((res) => {
        that.rightCode = res.data
      }).catch((err) => {
        this.$toast(err.msg)
      })
    },
    onSubmit () {
      const that = this
      const params = {
        account: this.account,
        password: this.password
      }
      this.$Api.User.login(params).then((res) => {
        localStorage.setItem('userId', res.data.id)
        that.$router.push('/about')
      }).catch((err) => {
        this.$toast(err.msg)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    .page-tabs {
      position: absolute;
      bottom: 0px;
      top:0px;
      left:0px;
      right:0px;
      //background-image:url(../assets/login.png);
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
  }
  .validate-code{
    width: 60px;
    height: 30px;
  }
</style>
