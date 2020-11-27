<template>
  <div class="page">
    <van-sticky :offset-top="40">
      <van-search v-model="searchValue" placeholder="搜索商家"/>
    </van-sticky>
    <van-index-bar :sticky="false">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <div v-for="(value, key) in list" :key="key">
          <van-index-anchor class="page-bar-anchor" :index="key"></van-index-anchor>
            <div v-for="(item, index) in value" :key="index">
              <van-swipe-cell class="page-bar-swipe-cell">
                <van-card
                  tag="⭐"
                  :desc="item.phone"
                  :title="item.name"
                  class="goods-card"
                  thumb="https://img.yzcdn.cn/vant/cat.jpeg">
                  <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                  </template>
                  <template #footer>
                    <van-button size="mini">发消息</van-button>
                  </template>
                </van-card>
                <template #right>
                  <van-button square text="拉黑" type="danger" class="delete-button" />
                  <van-button square text="关注" type="primary" class="delete-button" />
                </template>
              </van-swipe-cell>
            </div>
        </div>
      </van-list>
    </van-index-bar>
  </div>
</template>

<script>
import { FIRST_PIN } from '@/common/config'
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
      list: {},
      loading: false,
      finished: false,
      searchValue: '',
      page: 0,
      size: 5
    }
  },
  methods: {
    onLoad () {
      // const list = {
      //   A: [{ name: '王五', age: 33 }, { name: '王六', age: 33 }],
      //   B: [{ name: '张三', age: 33 }, { name: '张四', age: 33 }],
      //   C: [{ name: '赵六', age: 33 }, { name: '赵七', age: 33 }],
      //   D: [{ name: '王五', age: 33 }, { name: '王六', age: 33 }],
      //   E: [{ name: '张三', age: 33 }, { name: '张四', age: 33 }],
      //   F: [{ name: '赵六', age: 33 }, { name: '赵七', age: 33 }],
      //   G: [{ name: '王五', age: 33 }, { name: '王六', age: 33 }],
      //   H: [{ name: '张三', age: 33 }, { name: '张四', age: 33 }],
      //   I: [{ name: '赵六', age: 33 }, { name: '赵七', age: 33 }],
      //   J: [{ name: '王五', age: 33 }, { name: '王六', age: 33 }],
      //   K: [{ name: '张三', age: 33 }, { name: '张四', age: 33 }],
      //   L: [{ name: '赵六', age: 33 }, { name: '赵七', age: 33 }]
      // }

      this.loading = false
      this.finished = true
      setTimeout(() => {
        const list = [
          { name: '王五', age: 33, pinyin: 'W', phone: '13333333333' },
          { name: '王六', age: 33, pinyin: 'W', phone: '13333333333' },
          { name: '张三', age: 33, pinyin: 'Z', phone: '13333333333' },
          { name: '张四', age: 33, pinyin: 'Z', phone: '13333333333' },
          { name: '赵六', age: 33, pinyin: 'Z', phone: '13333333333' },
          { name: '赵七', age: 33, pinyin: 'Z', phone: '13333333333' }
        ]
        const listName = {}
        FIRST_PIN.forEach(item => {
          listName[item] = []
          list.forEach(model => {
            if (model.pinyin === item) {
              listName[item].push(model)
            }
          })
        })
        this.$nextTick(() => {
          this.list = listName
        })
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1)
        // }

        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        this.finished = true
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
  /deep/ .van-card__content {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  /deep/ .van-card__title {
    margin-left: 10px;
    flex: 1;
  }
  /deep/ .van-card__desc {
    margin-top: 8px;
    margin-left: 10px;
    flex: 1;
  }
  /deep/ .van-tag{
    margin-top: 8px;
    margin-left: 10px;
    flex: 1;
  }
  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>
