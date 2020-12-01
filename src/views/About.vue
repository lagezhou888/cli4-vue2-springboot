<template>
  <div>
<!--    <van-sticky>-->
<!--      <van-notice-bar v-if="show"-->
<!--        left-icon="volume-o"-->
<!--        text="枣园村苹果收购价5块一斤，5块一斤，贩子的需求量5万斤，抓紧摘苹果卖呀"-->
<!--      />-->
<!--      <div v-else>-->
<!--        <van-nav-bar-->
<!--          title="个人中心"-->
<!--          left-arrow-->
<!--          @click-left="onClickLeft"-->
<!--        />-->
<!--      </div>-->
<!--    </van-sticky>-->
    <router-view />
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route placeholder>
      <van-tabbar-item replace to="/userhome" icon="home-o" name="home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/business" icon="friends-o" name="business">收购商家</van-tabbar-item>
      <van-tabbar-item replace to="/usersetting" icon="setting-o" name="setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      active: 'home'
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
