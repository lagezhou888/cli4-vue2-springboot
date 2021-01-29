<template>
  <div class="page">
    <div :class="{'head-content': isShowHeadFoot,'content-hide': !isShowHeadFoot}">头</div>
    <div :class="{'content': isShowHeadFoot, 'content-content-hide': !isShowHeadFoot}" :style="{height: contentHeight}">
      <div class="inner-content">
        <van-button round type="primary" @click="hideFoot">隐藏</van-button>
        <van-button round type="primary" @click="showFoot">显示</van-button>
        <ul>
          <li v-for="(item, index) in list" :key='index'>{{item}}</li>
        </ul>
      </div>
    </div>
    <transition name="fade">
      <div :class="{'foot-content': isShowHeadFoot,'content-hide': !isShowHeadFoot}">尾</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      isShowHeadFoot: true
    }
  },
  computed: {
    contentHeight () {
      return this.isShowHeadFoot ? 'calc(100% - 100px)' : '100%'
    }
  },
  methods: {
    showFoot (e) {
      this.isShowHeadFoot = true
    },
    hideFoot (e) {
      this.isShowHeadFoot = false
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    height: 100%;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 5.5s;
    }
    .fade-enter,
    .fade-leave-to
    {
      opacity: 0;
    }
  }
  .head-content {
    position: fixed;
    top: 0px;
    height: 50px;
    width: 100%;
    background-color: lightseagreen;
    color: white;
    line-height: 50px;
  }
  .content {
    padding-top: 50px;
    width: 100%;
    margin: 0 auto;
    //height: ~"calc(100% - 100px)";
    background-color: #c3c3c3;
    //opacity: 0.2;
    .inner-content {
      height: ~"calc(100% - 16px)";
      overflow-y: auto;
      background-color: #39a9ed;
      margin: 8px;
    }
  }
  .content-content-hide {
    width: 100%;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    background-color: #c3c3c3;
    .inner-content {
      height: 100%;
      overflow-y: auto;
      background-color: #39a9ed;
    }
  }
  .foot-content {
    position: fixed;
    bottom: 0px;
    height: 50px;
    width: 100%;
    background-color: lightseagreen;
    color: white;
    line-height: 50px;
  }
  .content-hide {
    display: none;
  }
</style>
