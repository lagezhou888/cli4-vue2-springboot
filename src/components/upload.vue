<template>
  <div>
    <van-uploader v-model="fileList" max-count="1" result-type="file">
      <template #preview-cover="{ file }">
        <div class="preview-cover van-ellipsis">{{ file.name }}</div>
      </template>
    </van-uploader>
    <van-button round block type="info" @click="saveImg()">
      保存
    </van-button>
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
  methods: {
    saveImg () {
      if (this.fileList.length > 0) {
        console.log(this.fileList)
      }
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
