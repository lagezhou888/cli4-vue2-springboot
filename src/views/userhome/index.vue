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
    <card></card>
  </div>
</template>

<script>
import Card from '@/components/card'
export default {
  name: 'index',
  components: {
    Card
  },
  created () {
    this.$Api.Config.getAllConfig().then((res) => {
      this.time = res.data
    })
  },
  data () {
    return {
      time: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
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
