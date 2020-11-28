<template>
  <div>
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
                :tag="item.isAcquisition?'收':''"
                class="goods-card"
                :thumb="item.imgUrl">
                <template #tags>
                  <div class="template-tags">
                    <div class="template-tags-content">
                      <div>姓名：{{ item.name }}</div>
                      <div>电话：{{ item.phone }}</div>
                      <div><van-tag plain type="danger" class="template-tags-content-tag">{{ item.tag }}</van-tag></div>
                    </div>
                    <div class="template-tags-button">
                      <div class="template-tags-button-left"><van-icon class="iconfont" class-prefix='icon-message2' name="" color="blue" size="25"/></div>
                      <div class="template-tags-button-right"><van-icon class="iconfont" class-prefix='icon-phone' name="" color="green" size="25"/></div>
                    </div>
                  </div>
                  <div class="template-tags-progress" v-if="item.isAcquisition">
                    <div class="template-tags-progress-text">收购进度：</div>
                    <div class="template-tags-progress-div"><van-progress :percentage="50" track-color="grey" stroke-width="8" /></div>
                  </diV>
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
export default {
  name: 'indexbar',
  data () {
    return {
      loading: false,
      finished: false
    }
  },
  watch: {
    // list (newValue) {
    //   console.log(newValue)
    // }
  },
  methods: {
    onLoad () {
      this.loading = false
      this.finished = true
    }
  },
  props: {
    list: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page-bar-anchor {
  text-align: left;
}
.page-bar-swipe-cell {
  width: ~"calc(100%-20px)";
  .template-tags {
    display: flex;
    flex-direction: row;
    align-items: center;
    .template-tags-content {
      justify-content: center;
      .template-tags-content-tag {
        font-weight: bold;
      }
    }
    .template-tags-button {
      display: flex;
      flex-direction: row;
      margin-right: 20px;
      margin-left: auto;
      .template-tags-button-left {
        margin-right: 25px;
      }
      .template-tags-button-right {
      }
    }
  }
  .template-tags-progress {
    display: flex;
    margin-top: 20px;
    margin-right: 20px;
    align-items: center;
    .template-tags-progress-text {
      flex-shrink: 0;
    }
    .template-tags-progress-div {
      align-items: center;
      width: 100%;
      flex-shrink: 1;
    }
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
  justify-content: center;
}
/deep/ .van-card__title {
  margin-left: 10px;
}
/deep/ .van-card__desc {
  margin-top: 8px;
  margin-left: 10px;
}
/deep/ .van-card__content .van-tag{
}
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
</style>
