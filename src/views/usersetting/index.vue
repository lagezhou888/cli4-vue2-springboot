<template>
  <div class="content">
    <div class="content-title">
      <div class="content-icon">
<!--        <van-uploader-->
<!--          :after-read="onRead"-->
<!--          max-count="1"-->
<!--          :max-size="10 * 1024 * 1024"-->
<!--          result-type="file"-->
<!--          @delete="deleteIcon()">-->
<!--          <van-image-->
<!--            round-->
<!--            width="80"-->
<!--            height="80"-->
<!--            fit="cover"-->
<!--            :src="url"-->
<!--          />-->
<!--        </van-uploader>-->
        <van-image
          round
          width="80"
          height="80"
          fit="cover"
          :src="url"
          @click="imgClick"
        />
        <van-image-preview ref="imagePreview" v-model="showPreview" :images="images" @change="showPreviewChange">
          <template #index><div>llll页</div></template>
        </van-image-preview>
      </div>
      <div class="content-font">{{name}}</div>
    </div>
    <div class="content-cell">
      <van-cell-group>
        <van-cell title="个人信息" is-link to="userinfo" />
      </van-cell-group>
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
      flex: 1 1 auto;
      flex-direction: row;
      text-align: center;
      height: 100px;
      .content-font {
        font-size: 14px;
        font-weight: bold;
        width: 50%;
        line-height: 100px;
        text-align: left;
      }
      .content-icon {
        text-align: left;
        padding-top: 10px;
        padding-left: 30px;
        width: 50%;
      }
    }
    .content-cell {
      text-align: left;
    }
  }
</style>
