<template>
  <div>
    <van-cell-group>
      <van-field v-model="nickName" label="输入新昵称" placeholder="请输入昵称" />
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
      nickName: ''
    }
  },
  created () {
    this.userId = localStorage.getItem('userId')
    this.name = localStorage.getItem('name')
  },
  methods: {
    submit () {
      if (this.name === this.nickName) {
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

<style scoped>

</style>
