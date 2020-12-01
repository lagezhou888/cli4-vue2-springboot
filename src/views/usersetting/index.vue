<template>
  <div class="content">
    <div>
      <van-sticky>
        <div>
          <van-nav-bar
            title="个人中心"
            @click-left="onClickLeft"
          />
        </div>
      </van-sticky>
    </div>
    <div class="content-title">
      <div class="content-title-icon">
        <van-uploader
          :after-read="onRead"
          max-count="1"
          :max-size="10 * 1024 * 1024"
          result-type="file"
          @delete="deleteIcon()">
          <van-image
            round
            width="80"
            height="80"
            fit="cover"
            :src="url"
          />
        </van-uploader>
<!--        <van-image-->
<!--          round-->
<!--          width="80"-->
<!--          height="80"-->
<!--          fit="cover"-->
<!--          :src="url"-->
<!--          @click="imgClick"-->
<!--        />-->
<!--        <van-nav-bar-->
<!--          title="标题"-->
<!--          left-text="返回"-->
<!--          right-text="按钮"-->
<!--          v-show="showPreview"-->
<!--        />-->
<!--        <div class="content-image-preview">-->
<!--          <van-image-preview ref="imagePreview" v-model="showPreview" :images="images" @change="showPreviewChange">-->
<!--            <template #index>-->
<!--            </template>-->
<!--          </van-image-preview>-->
<!--        </div>-->
      </div>
      <!--显示昵称-->
      <div class="content-title-font">{{name}}</div>
      <div class="content-title-button"><van-button round type="info" @click="toUserInfo">编辑资料</van-button></div>
    </div>
<!--    <div class="content-cell">-->
<!--      <van-cell-group>-->
<!--        <van-cell title="个人信息" is-link to="userinfo" />-->
<!--      </van-cell-group>-->
<!--    </div>-->
    <div class="function-list">
      <van-row type="flex" justify="space-around">
        <van-col span="6" class="function-list-item">
          <van-icon class="iconfont" class-prefix="icon-fabu" name color="#FCAF23" size="40" />发布
        </van-col>
        <van-col span="6" class="function-list-item">
          <van-icon class="iconfont" class-prefix="icon-guanzhukehu" name color="#FF616F" size="40" />关注
        </van-col>
        <van-col span="6" class="function-list-item">
          <van-icon class="iconfont" class-prefix="icon-jilu" name color="#FC41AC" size="40" />记录
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      url: '',
      name: localStorage.getItem('name'),
      file: null,
      imgSrc: '',
      fileList: [],
      showPreview: false,
      images: []
    }
  },
  created () {
    this.userId = localStorage.getItem('userId')
    this.init()
  },
  methods: {
    toUserInfo () {
      this.$router.push('/userinfo')
    },
    onClickLeft () {
    },
    imgClick () {
      this.showPreview = true
      this.images = []
      this.images.push(this.url)
    },
    showPreviewChange () {
      console.log('showPreviewChange')
    },
    init () {
      const that = this
      that.$Api.Config.getHeadIcon(that.userId).then((res) => {
        if (res.data != null && res.data.length !== 0) {
          that.url = res.data
        } else {
          that.url = ''
        }
      })
    },
    onRead (file) {
      const that = this
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('url', window.location.protocol + '//' + window.location.host)
      formData.append('userId', localStorage.getItem('userId'))
      this.$Api.Config.uploadImg(formData).then((res) => {
        that.fileList = [{ url: res.data }]
        that.url = res.data
      })
    },
    deleteIcon () {
      this.$Api.Config.deleteHeadIcon(localStorage.getItem('userId')).then((res) => {
        if (res.data) {
          this.fileList = []
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    .content-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px;
      .content-title-font {

      }
      .content-title-icon {

      }
      .content-title-button {

      }
      .content-image-preview {
      }
      .function-list {
        margin-top: 30px;
        .function-list-item {
          flex-direction: column;
          .function-list-item-font {
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }
    .content-cell {
      text-align: left;
    }
  }
</style>
