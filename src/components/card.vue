<template>
  <div class="content-data-show">
    <div class="content-title"><div class="content-title-icon"></div><div class="content-title-font">数据详情</div></div>
    <div class="content-data">
      <div class="content-data-icon">图标一</div><div class="content-data-text">内容一</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="less" scoped>
.content-data-show {
  margin-left: 20px;
  margin-top: 10px;
  .content-title {
    display: flex;
    .content-title-icon {
      width: 5px;
      height: 20px;
      background: #00A1BA;
    }
    .content-title-font {
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .content-data {
    display: flex;
    .content-data-icon {
      flex: 1
    }
    .content-data-text {
      flex: 1
    }
  }
}
</style>
