<template>
  <div>
    <van-cell-group>
      <van-field v-model="account" label="输入新用户名" placeholder="请输入用户名" />
    </van-cell-group>
    <van-button round block type="info" @click="submit">
      确认修改
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      account: ''
    }
  },
  methods: {
    submit () {
      const param = {
        id: localStorage.getItem('userId'),
        account: this.account
      }
      this.$Api.User.updateUserInfo(param).then((res) => {
        if (res.data) {
          localStorage.setItem('account', this.account)
          this.$router.push('/usersetting')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
