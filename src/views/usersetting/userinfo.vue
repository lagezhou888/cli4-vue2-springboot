<template>
  <div class="content-cell">
    <navbar-head
      title="个人信息"
      to="/usersetting">
    </navbar-head>
    <van-cell-group>
      <van-cell title="昵称修改" is-link to="usermodify" icon="new-o" color="yellow" />
      <van-cell title="资产设置" is-link to="userasset" icon="setting-o" color="blue" />
    </van-cell-group>
  </div>
</template>

<script>

import NavbarHead from '@/components/navbar-head'
export default {
  name: 'userinfo',
  components: { NavbarHead },
  methods: {
    onClickLeft () {

    }
  }
}
</script>

<style lang="less" scoped>
.content-cell {
  text-align: left;
}
</style>
