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
        ref="appleRef"
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
        ref="cherryRef"
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
const FRUIT_APPLE = '苹果'
const FRUIT_CHERRY = '樱桃'
export default {
  name: 'index',
  components: { Checkbox, NavbarHead },
  created () {
    this.userId = localStorage.getItem('userId')
    this.init()
  },
  data () {
    return {
      apple: {
        title: FRUIT_APPLE,
        switchChecked: false,
        typeSelected: [],
        typeList: appleTypeList,
        typeTitle: FRUIT_APPLE + '种类',
        typeValue: '',
        typeLabel: '勾选种植' + FRUIT_APPLE + '的种类'
      },
      cherry: {
        title: FRUIT_CHERRY,
        switchChecked: false,
        typeSelected: [],
        typeList: cherryTypeList,
        typeTitle: FRUIT_CHERRY + '种类',
        typeValue: '',
        typeLabel: '勾选种植' + FRUIT_CHERRY + '的种类'
      }
    }
  },
  methods: {
    init () {
      const that = this
      this.$Api.UserAsset.getList(that.userId).then((res) => {
        res.data && res.data.length > 0 && res.data.forEach((item, index, arr) => {
          if (item.name === FRUIT_APPLE) {
            that.apple.typeSelected.push(item.selectId)
          } else if (item.name === FRUIT_CHERRY) {
            that.cherry.typeSelected.push(item.selectId)
          }
        })
        that.apple.switchChecked = that.apple.typeSelected.length > 0
        that.cherry.switchChecked = that.cherry.typeSelected.length > 0
      })
    },
    switchChecked (value, title) {
      if (title === FRUIT_APPLE) {
        this.apple.switchChecked = value
      } else if (title === FRUIT_CHERRY) {
        this.cherry.switchChecked = value
      }
    },
    typeSelected (value, title) {
      if (title === FRUIT_APPLE) {
        this.apple.typeSelected = value
      } else if (title === FRUIT_CHERRY) {
        this.cherry.typeSelected = value
      }
    },
    onSave () {
      const that = this
      if (that.apple.switchChecked && that.apple.typeSelected.length === 0) {
        that.$toast.fail('请选择' + FRUIT_APPLE + '种类')
        return
      }
      if (that.cherry.switchChecked && that.cherry.typeSelected.length === 0) {
        that.$toast.fail('请选择' + FRUIT_CHERRY + '种类')
        return
      }
      this.$dialog.confirm({
        title: '提示',
        message: '确认保存吗？'
      })
        .then(() => {
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
            userId: that.userId
          }
          that.$Api.UserAsset.insert(model).then((res) => {
            if (res.data) {
              that.$router.push('/usersetting')
            } else {
              that.$toast.fail('保存失败！')
            }
          })
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
