import Upload from '@/components/upload'

export const uploadMixin = {
  component: {
    Upload
  },
  data () {
    return {
      file: null,
      imgSrc: '',
      fileList: []
    }
  },
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
  },
  created () {
    console.log('mixins created')
  }
}
