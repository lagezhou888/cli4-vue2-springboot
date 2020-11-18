<template>
  <div class="content">
    <div class="content-title">
      <div class="content-icon"><upload></upload></div>
      <div class="content-font">{{account}}</div>
    </div>
    <div class="content-cell">
      <van-cell-group>
        <van-cell title="用户名修改" is-link to="usermodify" />
        <van-cell title="单元格" is-link value="内容" />
        <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
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
      account: localStorage.getItem('account')
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
    }
  }
</style>
