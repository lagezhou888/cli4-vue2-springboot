<template>
  <div class="content-data-show">
    <div class="content-title">
      <div class="content-title-icon"></div><div class="content-title-font">种类汇总</div>
      <div class="content-title-select">
        <van-popover v-model="showPopover" :actions="actions" @select="onSelect" placement="left" theme="dark">
          <template #reference>
            <van-button type="primary" @click="showPopover = true" color="#00A1BA">
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
import { FRUIT_APPLE, FRUIT_CHERRY } from '@/common/config'
export default {
  name: 'echarts',
  data () {
    return {
      popoverTitle: FRUIT_APPLE,
      showPopover: false,
      actions: [
        { text: FRUIT_APPLE },
        { text: FRUIT_CHERRY }
      ],
      legend: { show: false },
      extend: {
        series: {
          label: { show: true, position: 'top' }
        },
        xAxis: {
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              const str = value.split('')
              return str.join('\n')
            }
          }
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
      this.popoverTitle = action.text
      this.$emit('popoverOnSelect', this.popoverTitle)
    }
  },
  watch: {
    chartData (newValue) {
      console.log(newValue)
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
