/*
* 插件挂在Vue
* */

import Api from '@/api'

export default {
  install: (Vue) => {
    Vue.prototype.$Api = Api
  }
}
