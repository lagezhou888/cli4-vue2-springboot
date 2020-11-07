import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { Locale } from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import zhLocale from '../lang/zh_cn'
import enLocale from '../lang/en_us'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enUS,
    ...enLocale
  },
  zh: {
    ...zhCN,
    ...zhLocale
  }
}

function vantLocales (lang) {
  console.log(window.navigator.language)
  if (lang === 'en') {
    Locale.use(lang, enUS)
  } else if (lang === 'zh') {
    Locale.use(lang, zhCN)
  }
}

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'zh', // 语言标识
  messages: messages
})

export { i18n, vantLocales }
