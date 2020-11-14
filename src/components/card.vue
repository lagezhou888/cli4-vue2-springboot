<template>
  <div class="content-data-show">
    <div class="content-title"><div class="content-title-icon"></div><div class="content-title-font">数据详情</div></div>
    <div class="content-data">
      <table class="content-data-table">
        <tr class="content-data-table-tr">
          <td class="content-data-table-td">
            <div class="content-data-type"><van-icon name="chat-o" color="red" size="40"/>内容一</div>
          </td>
          <td class="content-data-table-td"><div class="content-data-type">
            <van-icon name="like-o" color="green" size="40"/>内容二</div>
          </td>
        </tr>
        <tr class="content-data-table-tr">
          <td class="content-data-table-td">
            <div class="content-data-type">数据1</div>
          </td>
          <td class="content-data-table-td">
            <div class="content-data-type">数据2</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      dataDetails: [{
        icon: '',
        type: '',
        value: ''
      }, {
        icon: '',
        type: '',
        value: ''
      }, {
        icon: '',
        type: '',
        value: ''
      }, {
        icon: '',
        type: '',
        value: ''
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.content-data-show {
  margin-left: 20px;
  margin-top: 10px;
  .content-title {
    display: flex;
    .content-title-icon {
      width: 5px;
      height: 20px;
      background: #00A1BA;
    }
    .content-title-font {
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .content-data {
    .content-data-table {
      text-align: center;
      margin: 0 auto;
      border-collapse: collapse;
      .content-data-table-tr {
        .content-data-table-td {
          height: 44px;
          border: 1px solid #cad9ea;
          .content-data-type {
            justify-content: center;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
