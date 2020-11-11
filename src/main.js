import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins'
import 'vant/lib/index.less'

import 'amfe-flexible/index.js'
import inject from '@/plugins/inject'
import { i18n, vantLocales } from '@/lang'
vantLocales(i18n.locale)
Vue.use(inject)
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
