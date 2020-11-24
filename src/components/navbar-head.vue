<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :right-text="rightText"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: 'navbar-head',
  props: {
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push(this.to)
    },
    onClickRight () {
      this.$emit('on-save')
    }
  }
}
</script>

<style scoped>

</style>
