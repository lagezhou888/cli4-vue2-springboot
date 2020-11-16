<template>
  <div class="content-data-show">
    <div class="content-title"><div class="content-title-icon"></div><div class="content-title-font">种类汇总</div></div>
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
      legend: { show: false },
      extend: {
        series: {
          label: { show: true, position: 'top' }
        }
      }
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
