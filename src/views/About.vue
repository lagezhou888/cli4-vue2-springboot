<template>
  <div>
    <van-notice-bar
      left-icon="volume-o"
      text="枣园村苹果收购价5块一斤，5块一斤，贩子的需求量5万斤，抓紧摘苹果卖呀"
    />
    <router-view />
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" @change="onChange" route>
      <van-tabbar-item replace to="/userhome" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/business" icon="friends-o">收购商家</van-tabbar-item>
      <van-tabbar-item replace to="/usersetting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onChange (index) {
      // this.$toast({ type: 'primary', message: index })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
