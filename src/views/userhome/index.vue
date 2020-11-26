<template>
  <div>
    <!--倒计时-->
    <div class="van-count-down">
      <label class="van-count-down-label">收购剩余时间：</label>
      <van-count-down class="van-count-down-time" :time="time" format="DD 天 HH 时 mm 分 ss 秒" auto-start millisecond />
    </div>
    <!--轮播图-->
    <div class="van-swipe-content">
      <van-swipe :autoplay="3000" class="van-swipe">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--数据展示-->
    <card :dataDetails="dataDetails"></card>
    <!--echarts展示-->
    <echarts :chartData="chartData" :chartSettings="chartSettings" @popoverOnSelect="popoverOnSelect"></echarts>
  </div>
</template>

<script>
import Card from '@/components/card'
import Echarts from '@/components/echarts'
import { appleTypeList, cherryTypeList, FRUIT_APPLE, FRUIT_CHERRY } from '@/common/config'
export default {
  name: 'index',
  components: {
    Echarts,
    Card
  },
  created () {
    this.init()
  },
  data () {
    return {
      userCount: 0,
      chartData: {
        // columns: ['品种', '户数', '成交均价'],
        // rows: [{ 品种: '富士', 户数: 1393, 成交均价: 2.3 },
        //   { 品种: '红', 户数: 3530, 成交均价: 2.3 },
        //   { 品种: '黄', 户数: 2923, 成交均价: 2.5 },
        //   { 品种: '白', 户数: 1723, 成交均价: 2.3 },
        //   { 品种: '果光', 户数: 3792, 成交均价: 2.7 },
        //   { 品种: '次等', 户数: 4593, 成交均价: 2.3 }
        // ]
        columns: ['品种', '户数'],
        rows: []
      },
      chartSettings: {
        splitLine: { show: false },
        axisSite: { right: ['成交均价'] }
        // showLine: ['成交均价']
      },
      time: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      dataDetails: []
    }
  },
  methods: {
    popoverOnSelect (value) {
      const that = this
      const data = {
        type: '',
        list: [],
        columns: this.chartData.columns
      }
      if (value === FRUIT_APPLE) {
        data.list = appleTypeList
        data.type = FRUIT_APPLE
      } else if (value === FRUIT_CHERRY) {
        data.type = FRUIT_CHERRY
        data.list = cherryTypeList
      }
      this.$Api.UserAsset.getChartData(data).then((res) => {
        if (res.data && res.data.length > 0) {
          that.chartData.rows = res.data
        }
      })
    },
    init () {
      this.$Api.Config.getAllConfig().then((res) => {
        this.time = res.data
      })
      this.$Api.User.getUserList().then((res) => {
        this.dataDetails = [{
          icon: 'contact',
          iconColor: 'blue',
          type: '总户数',
          value: res.data
        }, {
          icon: 'flower-o',
          iconColor: 'red',
          type: '果树总量',
          value: '0颗'
        }, {
          icon: 'logistics',
          iconColor: 'green',
          type: '快递点数量',
          value: '0个'
        }, {
          icon: 'bill-o',
          iconColor: 'grey',
          type: '2020年产值',
          value: '0亿'
        }]
      })
      this.popoverOnSelect(FRUIT_APPLE)
    }
  }
}
</script>

<style lang="less" scoped>
  .van-count-down {
    display: flex;
    justify-content: center;
    .van-count-down-label {
      font-size: 14px;
      margin-top: 10px;
      color: red;
      font-weight: bold;
    }
    .van-count-down-time {
      margin-top: 10px;
    }
  }
  .van-swipe-content img{
    padding-top: 10px;
    display: inline-block;
    width: 100%;
    height: 200px;
    .van-swipe .van-swipe-item{
      width: 100%;
      height: 200px;
      color: #fff;
      font-size: 20px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
</style>
