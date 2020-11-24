<template>
  <div class="content-cell">
    <navbar-head
      title="个人信息"
      to="/usersetting">
    </navbar-head>
    <van-cell-group>
      <van-cell title="昵称修改" is-link to="usermodify" />
      <van-cell title="资产设置" is-link to="userasset" />
    </van-cell-group>
  </div>
</template>

<script>

import NavbarHead from '@/components/navbar-head'
export default {
  name: 'userinfo',
  components: { NavbarHead },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.content-cell {
  text-align: left;
}
</style>
