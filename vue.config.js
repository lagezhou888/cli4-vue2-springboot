const path = require('path')
console.log('path:' + path)
module.exports = {
  publicPath: '/',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true, // 解决内网穿透Invalid Host header的问题
    proxy: {
      '/api': {
        target: 'http://192.168.31.94:8888',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // hack: `true @import
          // './src/style/var-reset.less'`
        }
      }
    }
  }
}
