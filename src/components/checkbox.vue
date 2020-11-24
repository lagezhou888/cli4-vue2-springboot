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
        <van-checkbox-group v-model="typeSelected">
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
      typeSelected: [],
      arrowDirection: 'down',
      arrowDirectionFlag: true
    }
  },
  watch: {
    cellSwitchChecked (newValue) {
      if (this.switchChecked) {
        this.typeSelected = []
      }
      this.cellTitle = (this.switchChecked === true ? '不种植' : '种植') + this.title
      this.$emit('switchChecked', newValue, this.title)
    },
    typeSelected (newValue) {
      this.$emit('typeSelected', this.typeSelected, this.title)
    }
  },
  methods: {
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
