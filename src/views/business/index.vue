<template>
  <div class="page">
    <van-search v-model="value" placeholder="搜索商家"/>
    <van-index-bar :index-list="indexList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <!--<van-cell v-for="item in list" :key="item" :title="item" />-->
        <van-index-anchor class="page-bar-anchor" index="A">A</van-index-anchor>
        <van-swipe-cell class="page-bar-swipe-cell">
          <van-card
            desc="东北人"
            title="张三"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <template #right>
            <van-button square text="关注" type="primary" class="delete-button" />
          </template>
          <template #left>
            <van-button square text="拉黑" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
        <van-index-anchor class="page-bar-anchor" index="B">B</van-index-anchor>
        <van-swipe-cell>
          <van-card
            desc="山东人"
            title="王五"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <template #right>
            <van-button square text="拉黑" type="danger" class="delete-button" />
            <van-button square text="关注" type="primary" class="delete-button" />
          </template>
        </van-swipe-cell>
        <van-index-anchor class="page-bar-anchor" index="C">C</van-index-anchor>
        <van-cell title="文本C" />
        <van-cell title="文本C" />
        <van-cell title="文本C" />
        <van-index-anchor class="page-bar-anchor" index="D">D</van-index-anchor>
        <van-cell title="文本D" />
        <van-cell title="文本D" />
        <van-cell title="文本D" />
        <van-index-anchor class="page-bar-anchor" index="E">E</van-index-anchor>
        <van-cell title="文本E" />
        <van-cell title="文本E" />
        <van-cell title="文本E" />
        <van-index-anchor class="page-bar-anchor" index="F">F</van-index-anchor>
        <van-cell title="文本F" />
        <van-cell title="文本F" />
        <van-cell title="文本F" />
      </van-list>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    width: 100%;
    height: 100%;
    .page-bar-anchor {
      text-align: left;
    }
    .page-bar-swipe-cell {
      width: ~"calc(100%-20px)";
    }
  }
  /deep/ .van-list__finished-text {
    padding-bottom: 50px;
  }
  /deep/ .van-swipe-cell__right {
    padding-right: 20px;
  }
  /deep/ .van-swipe-cell__left {
    padding-left: 20px;
  }
  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>
