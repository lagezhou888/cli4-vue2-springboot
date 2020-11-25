<template>
  <div>
    <navbar-head
      title="个人信息"
      to="/usersetting">
    </navbar-head>
    <div class="content-cell">
      <van-cell-group>
        <van-field v-model="nickName" label="输入新昵称" placeholder="请输入昵称" />
      </van-cell-group>
    </div>
    <div class="content-button">
      <van-button round block type="info" @click="submit">
        确认修改
      </van-button>
    </div>
  </div>
</template>

<script>
import NavbarHead from '@/components/navbar-head'
export default {
  name: 'index',
  components: { NavbarHead },
  data () {
    return {
      nickName: ''
    }
  },
  created () {
    this.userId = localStorage.getItem('userId')
    this.name = localStorage.getItem('name')
  },
  methods: {
    submit () {
      if (this.nickName === '') {
        this.$router.push('/usersetting')
      } else if (this.name === this.nickName) {
        this.$toast('不能和原昵称一样')
      } else {
        const param = {
          id: this.userId,
          name: this.nickName
        }
        this.$Api.User.updateUserInfo(param).then((res) => {
          if (res.data) {
            localStorage.setItem('name', this.nickName)
            this.$router.push('/usersetting')
          }
        })
      }
    }
  }
}
</script>

<style lagn="less" scoped>
  .content-cell {

  }
  .content-button {
    margin-top: 20px;
    margin-left: 36px;
    margin-right: 36px;
  }
</style>
