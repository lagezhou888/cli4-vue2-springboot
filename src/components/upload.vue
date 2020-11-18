<template>
  <div>
    <van-uploader v-model="fileList" :after-read="onRead" max-count="1" result-type="file" @delete="deleteIcon()"></van-uploader>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      file: null,
      fileList: []
    }
  },
  created () {
    const that = this
    that.$Api.Config.getHeadIcon(localStorage.getItem('userId')).then((res) => {
      if (res.data != null && res.data.length !== 0) {
        that.fileList = [{ url: res.data }]
      } else {
        that.fileList = []
      }
    })
  },
  methods: {
    onRead (file) {
      const that = this
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('url', 'http://localhost:8080')
      formData.append('userId', localStorage.getItem('userId'))
      this.$Api.Config.uploadImg(formData).then((res) => {
        that.fileList = [{ url: res.data }]
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
  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
