<template>
  <div>
    <van-cell center :title="cellTitle" class="content-switch">
      <template #right-icon>
        <van-switch v-model="cellSwitchChecked" size="24" />
      </template>
    </van-cell>
    <div v-if="cellSwitchChecked">
      <van-cell center :title="typeTitle" :value="typeValue" :label="typeLabel" :arrow-direction="arrowDirection" is-link @click="arrowDirectionClick"/>
      <div v-show="arrowDirectionFlag">
        <van-checkbox-group v-model="cellTypeSelected">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in typeList"
              clickable
              :key="item.id"
              :title="`${item.value}`"
              @click="toggle(index)"
            >
              <template #right-icon>
                <van-checkbox :name="item.id" ref="checkboxes" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      cellTitle: '不种植' + this.title,
      cellSwitchChecked: false,
      cellTypeSelected: [],
      arrowDirection: 'down',
      arrowDirectionFlag: true
    }
  },
  watch: {
    cellSwitchChecked (newValue) {
      this.$emit('switchChecked', newValue, this.title)
    },
    switchChecked (newValue) {
      if (!this.switchChecked) {
        this.cellTypeSelected = []
      }
      this.cellTitle = (this.switchChecked === true ? '种植' : '不种植') + this.title
      this.cellSwitchChecked = this.switchChecked
    },
    cellTypeSelected (newValue) {
      this.$emit('typeSelected', this.cellTypeSelected, this.title)
    },
    typeSelected (newValue) {
      this.cellTypeSelected = newValue
    }
  },
  methods: {
    init () {
    },
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    },
    arrowDirectionClick () {
      this.arrowDirectionFlag = !this.arrowDirectionFlag
      this.arrowDirection = this.arrowDirectionFlag ? 'down' : 'up'
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    switchChecked: {
      type: Boolean,
      default: true
    },
    typeSelected: {
      type: Array,
      default () {
        return []
      }
    },
    typeList: {
      type: Array,
      default () {
        return []
      }
    },
    typeTitle: {
      type: String,
      default: ''
    },
    typeValue: {
      type: String,
      default: ''
    },
    typeLabel: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .content-switch {
    text-align: left;
  }
</style>
