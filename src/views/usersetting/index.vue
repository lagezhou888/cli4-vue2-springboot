<template>
  <div class="content">
    <div class="content-title">
      <div class="content-icon"><upload :url="url"></upload></div>
      <div class="content-font">{{name}}</div>
    </div>
    <div class="content-cell">
      <van-cell-group>
        <van-cell title="个人信息" is-link to="userinfo" />
<!--        <van-cell title="昵称修改" is-link to="usermodify" />-->
<!--        <van-cell title="资产设置" is-link to="userasset" />-->
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/upload'
export default {
  name: 'index',
  data () {
    return {
      url: '',
      name: localStorage.getItem('name')
    }
  },
  created () {
    this.userId = localStorage.getItem('userId')
    this.init()
  },
  methods: {
    init () {
      const that = this
      that.$Api.Config.getHeadIcon(that.userId).then((res) => {
        if (res.data != null && res.data.length !== 0) {
          that.url = res.data
        } else {
          that.url = ''
        }
      })
    }
  },
  components: {
    Upload
  }
}
</script>

<style lang="less" scoped>
  .content {
    .content-title {
      display: flex;
      flex: 1 1 auto;
      flex-direction: row;
      text-align: center;
      height: 100px;
      .content-font {
        font-size: 14px;
        font-weight: bold;
        width: 50%;
        line-height: 100px;
        text-align: left;
      }
      .content-icon {
        text-align: left;
        padding-top: 10px;
        padding-left: 30px;
        width: 50%;
      }
    }
    .content-cell {
      text-align: left;
    }
  }
</style>
