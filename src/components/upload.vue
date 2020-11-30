<template>
  <div>
    <van-uploader
      v-model="fileList"
      :after-read="onRead"
      max-count="1"
      :max-size="10 * 1024 * 1024"
      result-type="file"
      ref="vanUploader"
      @delete="deleteIcon()">
    </van-uploader>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      file: null,
      imgSrc: '',
      fileList: []
    }
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  watch: {
    url (newValue) {
      if (newValue !== '') {
        this.fileList = [{ url: newValue }]
        // this.imgSrc = newValue
      } else {
        this.fileList = []
        // this.imgSrc = ''
      }
    }
  },
  methods: {
    onRead (file) {
      const that = this
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('url', window.location.protocol + '//' + window.location.host)
      formData.append('userId', localStorage.getItem('userId'))
      this.$Api.Config.uploadImg(formData).then((res) => {
        that.fileList = [{ url: res.data }]
        that.$emit('uploadImgUrl', res.data)
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
  /*.upload-img {*/
  /*  width: 100px;*/
  /*  height: 100px;*/
  /*}*/
</style>
