<template>
  <div class="content-data-show">
    <div class="content-title"><div class="content-title-icon"></div><div class="content-title-font">数据详情</div></div>
    <div class="content">
      <van-row class="content-row" v-for="(item, index) in dataDetails" :key="index">
        <van-col span="24" class="content-col">
          <van-icon class="content-col-icon" :name="item.icon" :color="item.iconColor" size="30"/>
          <div class="content-col-type">{{item.type}}</div>
          <div class="content-col-value">{{item.value}}</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
    }
  },
  props: {
    dataDetails: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.content-data-show {
  margin-left: 20px;
  margin-right: 20px;
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
  .content {
    padding-top: 12px;
    .content-row {
      height: 30px;
      .content-col {
        display: flex;
        .content-col-icon {
          flex: 0;
        }
        .content-col-type {
          flex: 1;
          text-align: left;
          padding-left: 10px;
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          font-weight: bold;
        }
        .content-col-value {
          flex: 1;
          text-align: left;
          padding-left: 10px;
          font-size: 14px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
