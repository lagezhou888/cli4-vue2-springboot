<template>
  <div class="page">
    <van-tabs v-model="activeName">
      <van-tab title="所有" name="all">
        <van-sticky :offset-top="40">
          <van-search v-model="searchValue" placeholder="搜索商家" @search="onSearch"/>
        </van-sticky>
        <index-bar :list="list" @onLoad="onLoad" ref="indexBar"></index-bar>
      </van-tab>
      <van-tab title="收购中" name="part">
        <van-sticky :offset-top="40">
          <van-search v-model="searchValue" placeholder="搜索商家"/>
        </van-sticky>
        <index-bar :list="listPart" @onLoad="onLoad" ref="indexBar"></index-bar>
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
      tempList: [],
      listPart: {},
      pageSetting: {
        pageSize: 2,
        pageNum: 0
      }
    }
  },
  methods: {
    onLoad () {
      this.pageSetting.pageNum++
      this.init()
    },
    init () {
      const that = this
      const params = {
        business: { },
        pageNum: that.pageSetting.pageNum,
        pageSize: that.pageSetting.pageSize
      }
      that.$Api.Business.getBusinessList(params).then((res) => {
        that.tempList = that.tempList.concat(res.data.records)
        if (that.searchValue !== '') {
          that.tempList = that.tempList.filter(item => item.name.indexOf(that.searchValue) !== -1)
        }
        const listName = {}
        const listPartName = {}
        FIRST_PIN.forEach(item => {
          listName[item] = []
          listPartName[item] = []
          that.tempList.forEach(model => {
            if (model.pinyin === item) {
              model.percentage = Math.round(model.receivedNum / model.advanceNum * 100)
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
        that.$refs.indexBar.loading = false
        if (this.tempList.length >= res.data.total) {
          that.$refs.indexBar.finished = true
        }
      })
    },
    onSearch () {
      this.pageSetting.pageNum = 0
      this.list = {}
      this.listPart = {}
      this.onLoad()
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
