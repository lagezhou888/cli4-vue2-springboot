<template>
  <div class="page">
    <van-tabs v-model="activeName">
      <van-tab title="所有" name="all">
        <van-sticky :offset-top="40">
          <van-search v-model="searchValue" placeholder="搜索商家" @search="onSearch"/>
        </van-sticky>
        <index-bar :list="list"></index-bar>
      </van-tab>
      <van-tab title="收购中" name="part">
        <van-sticky :offset-top="40">
          <van-search v-model="searchValue" placeholder="搜索商家"/>
        </van-sticky>
        <index-bar :list="listPart"></index-bar>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import IndexBar from '@/components/indexbar'
import { FIRST_PIN } from '@/common/config'
export default {
  name: 'index',
  components: {
    IndexBar
  },
  data () {
    return {
      activeName: 'all',
      searchValue: '',
      list: {},
      listPart: {},
      pageSetting: {
        pageSize: 20,
        pageNum: 0
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const that = this
      setTimeout(() => {
        let tempList = [
          { name: '王五', age: 33, pinyin: 'A', phone: '13333333333', tag: '靠谱', isAcquisition: true, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { name: '王六', age: 33, pinyin: 'A', phone: '13333333333', tag: '黑心', isAcquisition: false, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { name: '张三', age: 33, pinyin: 'Z', phone: '13333333333', tag: '温柔', isAcquisition: true, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { name: '张四', age: 33, pinyin: 'Z', phone: '13333333333', tag: '给力', isAcquisition: false, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { name: '赵六', age: 33, pinyin: 'Z', phone: '13333333333', tag: '火爆', isAcquisition: false, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { name: '赵七', age: 33, pinyin: 'Z', phone: '13333333333', tag: '热心', isAcquisition: false, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg' }
        ]
        if (that.searchValue !== '') {
          tempList = tempList.filter(item => item.name.indexOf(that.searchValue) !== -1)
        }
        const listName = {}
        const listPartName = {}
        FIRST_PIN.forEach(item => {
          listName[item] = []
          listPartName[item] = []
          tempList.forEach(model => {
            if (model.pinyin === item) {
              listName[item].push(model)
              if (model.isAcquisition) {
                listPartName[item].push(model)
              }
            }
          })
        })
        that.$nextTick(() => {
          that.list = listName
          that.listPart = listPartName
        })
      })
    },
    onSearch () {
      this.pageSetting.pageNum = 0
      this.list = {}
      this.listPart = {}
      this.onLoad()
    },
    onLoad () {
      this.pageSetting.pageNum++
      this.init()
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    width: 100%;
    height: 100%;
  }
</style>
