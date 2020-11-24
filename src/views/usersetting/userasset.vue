<template>
  <div>
    <div>
      <navbar-head
        title="个人信息"
        rightText="保存"
        to="/usersetting"
        @on-save="onSave">
      </navbar-head>
    </div>
    <div>
      <checkbox
        :title="apple.title"
        :switchChecked="apple.switchChecked"
        :typeSelected="apple.typeSelected"
        :typeList="apple.typeList"
        :typeTitle="apple.typeTitle"
        :typeValue="apple.typeValue"
        :typeLabel="apple.typeLabel"
        @switchChecked="switchChecked"
        @typeSelected="typeSelected">
      </checkbox>
      <checkbox
        :title="cherry.title"
        :switchChecked="cherry.switchChecked"
        :typeSelected="cherry.typeSelected"
        :typeList="cherry.typeList"
        :typeTitle="cherry.typeTitle"
        :typeValue="cherry.typeValue"
        :typeLabel="cherry.typeLabel"
        @switchChecked="switchChecked"
        @typeSelected="typeSelected">
      </checkbox>
    </div>
  </div>
</template>

<script>
import NavbarHead from '@/components/navbar-head'
import Checkbox from '@/components/checkbox'
import { appleTypeList, cherryTypeList } from '@/common/config'
export default {
  name: 'index',
  components: { Checkbox, NavbarHead },
  data () {
    return {
      apple: {
        title: '苹果',
        switchChecked: false,
        typeSelected: [],
        typeList: appleTypeList,
        typeTitle: '苹果种类',
        typeValue: '',
        typeLabel: '勾选种植苹果的种类'
      },
      cherry: {
        title: '樱桃',
        switchChecked: false,
        typeSelected: [],
        typeList: cherryTypeList,
        typeTitle: '樱桃种类',
        typeValue: '',
        typeLabel: '勾选种植樱桃的种类'
      }
    }
  },
  methods: {
    switchChecked (value, title) {
      if (title === '苹果') {
        this.apple.switchChecked = value
      } else if (title === '樱桃') {
        this.cherry.switchChecked = value
      }
    },
    typeSelected (value, title) {
      if (title === '苹果') {
        this.apple.typeSelected = value
      } else if (title === '樱桃') {
        this.cherry.typeSelected = value
      }
    },
    onSave () {
      const that = this
      const appleList = []
      const cherryList = []
      this.apple.typeList.forEach((item, index, array) => {
        if (that.apple.typeSelected.includes(item.id)) {
          appleList.push({ selectId: item.id, selectName: item.value })
        }
      })
      this.cherry.typeList.forEach((item, index, array) => {
        if (that.cherry.typeSelected.includes(item.id)) {
          cherryList.push({ selectId: item.id, selectName: item.value })
        }
      })
      const data = [{
        isChecked: that.apple.switchChecked,
        name: that.apple.title,
        list: appleList
      }, {
        isChecked: that.cherry.switchChecked,
        name: that.cherry.title,
        list: cherryList
      }]
      const model = {
        data: data,
        userId: localStorage.getItem('userId')
      }
      this.$Api.UserAsset.insert(model).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
