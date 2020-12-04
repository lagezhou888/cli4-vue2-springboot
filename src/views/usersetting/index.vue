<template>
  <div class="content">
    <div class="head">
      <van-sticky>
        <van-nav-bar class="head"
          :border="false"
          title="个人中心"
          @click-left="onClickLeft"
        />
      </van-sticky>
      <div class="content-title">
        <div class="content-title-icon">
<!--          <van-uploader-->
<!--            :after-read="onRead"-->
<!--            max-count="1"-->
<!--            :max-size="10 * 1024 * 1024"-->
<!--            result-type="file"-->
<!--            @delete="deleteIcon()">-->
<!--            <van-image-->
<!--              round-->
<!--              width="80"-->
<!--              height="80"-->
<!--              fit="cover"-->
<!--              :src="url"-->
<!--            />-->
<!--          </van-uploader>-->
                  <van-image
                    round
                    width="80"
                    height="80"
                    fit="cover"
                    :src="url"
                    @click="imgClick"
                  />
                  <div class="content-image-preview">
                    <van-image-preview ref="imagePreview" v-model="showPreview" :get-container="getContainer" :images="images" @change="showPreviewChange" :show-index="false">
                      <template #cover>
                        <div class="preview">
                          <div class="preview-left">
                            <&nbsp;头像
                          </div>
                          <div class="preview-right">
                            ...
                          </div>
                        </div>
                      </template>
                    </van-image-preview>
                  </div>
        </div>
        <!--显示昵称-->
        <div class="content-title-font">
          <div class="content-title-font-name">
            <div>{{name}}</div>
            <van-button type="primary" round color="red" size="mini" disabled>有资产</van-button>
          </div>
          <div class="content-title-font-phone">
            <van-icon name="phone-circle-o" size="20px"/>
            <div>15543257561</div>
          </div>
        </div>
        <van-button class="content-title-button" round type="info" @click="toUserInfo">编辑资料</van-button>
      </div>
      <div class="integral">
        <div class="right-border">
          <div>123</div>
          <div>分红积分</div>
        </div>
        <div class="right-border">
          <div>123</div>
          <div>分享积分</div>
        </div>
        <div class="integral-content ">
          <div>123</div>
          <div>现金积分</div>
        </div>
      </div>
    </div>
    <div class="card">
      <img src="../../assets/login.png" class="card-img"/>
    </div>
    <!--功能列表-->
    <div class="list">
      <h4 class="list-font">应用列表</h4>
      <div class="function-list">
        <div class="function-item">
          <div class="function-item-icon">
            <van-icon class="iconfont" class-prefix="icon-fabu" name color="#FCAF23" size="40" />
          </div>
          <div class="function-item-font">
            发布
          </div>
        </div>
        <div class="function-item">
          <div class="function-item-icon">
            <van-icon class="iconfont" class-prefix="icon-guanzhukehu" name color="#FF616F" size="40" />
          </div>
          <div class="function-item-font">
            关注
          </div>
        </div>
        <div class="function-item">
          <div class="function-item-icon">
            <van-icon class="iconfont" class-prefix="icon-jilu" name color="#FC41AC" size="40" />
          </div>
          <div class="function-item-font">
            记录
          </div>
        </div>
      </div>
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
    getContainer () {
      return document.querySelector('.my-container')
    },
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
    .head {
      background: #96B97D;
      .content-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 8px;
        .content-title-icon {
          flex: 1;
        }
        .content-title-font {
          flex: 3;
          align-self: flex-start;
          justify-content: left;
          text-align: left;
          padding: 5px;
          .content-title-font-name {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            margin-top: 8px;
          }
          .content-title-font-phone {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .content-title-font-phone div{
            font-size: 13px;
          }
        }
        .content-title-button {
          flex: 1;
          height: 30px;
        }
      }
      .integral {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        padding-bottom: 20px;
        .integral-content {
          flex: 1;
          font: normal bold 12px "宋体",sans-serif;
        }
        .right-border {
          flex: 1;
          font: normal bold 12px "宋体",sans-serif;
          border-right: 2px solid #1989FA;
        }
      }
    }
    .card {
      padding: 20px 10px;
      .card-img {
        height: 80px;
        width: 100%;
        border-radius: 8px;
      }
    }
    .list {
      border: 10px solid #F7F8FA;
      .list-font {
        text-align: left;
        margin-left: 10px;
        margin-bottom: 20px;
      }
      .function-list {
        font: normal bold 12px "宋体",sans-serif;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .function-item {
          .function-item-icon {

          }
          .function-item-font {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  .content-image-preview {
    .preview {
      display: flex;
      width: 300px;
      flex-direction: row;
      justify-content: space-between;
      .preview-left {
        flex: 1;
        color: white;

      }
      .preview-right {
        flex: 1;
        color: white;
        margin-right: 0;
        margin-left: auto;
      }
    }
  }
</style>
