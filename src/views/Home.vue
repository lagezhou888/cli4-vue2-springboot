<template>
  <div>
    <van-tabs @click="onClick">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'Home',
  created () {
    console.log('start to enter created ', this.$t('messages.hello'))
  },
  methods: {
    login () {
      const params = {
        account: 'caogzh',
        password: 'pass@word1'
      }
      this.$Api.User.login(params).then((res) => {
        console.log('ok')
      })
    },
    onClick (name, title) {
      Toast(title)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
