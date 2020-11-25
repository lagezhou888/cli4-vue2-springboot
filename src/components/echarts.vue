<template>
  <div class="content-data-show">
    <div class="content-title">
      <div class="content-title-icon"></div><div class="content-title-font">种类汇总</div>
      <div class="content-title-select">
        <van-popover v-model="showPopover" :actions="actions" @select="onSelect">
          <template #reference>
            <van-button type="primary" @click="showPopover = true">
              {{ popoverTitle }}
            </van-button>
          </template>
        </van-popover>
      </div>
    </div>
    <div class="chart">
      <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend"></ve-histogram>
    </div>
  </div>
</template>

<script>
export default {
  name: 'echarts',
  data () {
    return {
      popoverTitle: '苹果',
      showPopover: false,
      actions: [
        { text: '苹果' },
        { text: '樱桃' }
      ],
      legend: { show: false },
      extend: {
        series: {
          label: { show: true, position: 'top' }
        }
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
    },
    onSelect (action) {
      // this.$toast(action.text)
      this.popoverTitle = action.text
    }
  },
  props: {
    chartData: {
      type: Object,
      default () {
        return {}
      }
    },
    chartSettings: {
      type: Object,
      default () {
        return {}
      }
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

    .content-title-select {
      font-size: 14px;
      flex: 1;
      text-align: right;
      .van-button--normal {
        padding: 0 0.4rem;
        font-size: 0.37333rem;
        height: 20px;
      }
    }

    .content-title-font {
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>
