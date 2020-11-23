// src/api/index.js
import axios from 'axios'
// import router from '../router'
// import qs from 'qs'

import { Toast } from 'vant'
// import { getStorage } from '@/js/util'
import Vue from 'vue'

const $vm = new Vue()
// 请求成功参数
export const ERR_OK = 200

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    case 401:
      Toast('获取用户信息失败，请重新登录')
      // toLogin()
      break
    // 403 token过期, 清除token并跳转登录页
    case 403:
      Toast('登录信息过期，请重新登录')
      localStorage.removeItem('TOKEN')
      // toLogin()
      break
    case 404:
      Toast('网络请求不存在')
      break
    case 500:
      Toast('服务器内部错误')
      break
    case 504:
      Toast('服务器连接超时')
      break
    default:
      Toast(other)
      break
  }
}

// 跳转到登录页
// const toLogin = () => {
//   router.replace({
//     path: '/'
//   })
// }

const HTTP = axios.create({
  baseURL: '',
  // 设置超时时间
  timeout: 1000 * 1000
})
/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
HTTP.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8 '
HTTP.interceptors.request.use(
  config => {
    // if (config.url !== 'http://172.20.30.44:8081/system/v1/user') {
    //   const token = `Bearer ${getStorage('USER_INFO').token}`
    //   token && (config.headers.Authorization = token)
    //   // if (!token) toLogin()
    // }
    // const token =
    //   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0ODA3ZjE1YS1mYWM4LTQwYWUtYmFiMi0xYTFkZGY5NjNjZTciLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwiYmluZ29hZG1cIn0iLCJpc3MiOiJ1c2VyIiwiaWF0IjoxNTk5MjAyMTM2fQ.5abad4IH837Sa9Yxy1eiTqIVyrwjQ0agLQkdIXVWmYw'
    // token && (config.headers.Authorization = token)
    // 序列化post请求
    // if (config.method === 'post') config.data = qs.stringify(config.data)
    config.headers.Authorization = document.cookie.substring(6)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
HTTP.interceptors.response.use(
  res => {
    if (res.status === 200) {
      const dataAxios = res.data
      // 这个状态码是和后端约定的
      const { code } = dataAxios
      // 根据 code 进行判断
      if (code === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口
        return dataAxios
      } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
          case ERR_OK: // code === 200 请求成功
            return dataAxios
          case 500:
            if ($vm.$loading) {
              $vm.$loading.hide()
            }
            Toast(dataAxios.msg)
            return Promise.reject(res.data)
          case 401:
            if ($vm.$loading) {
              $vm.$loading.hide()
            }
            // [ 示例 ] 其它和后台约定的 code
            // toLogin()
            break
          default:
            break
        }
      }
    } else {
      return Promise.reject(res.data)
    }
  },
  error => {
    if ($vm.$loading) {
      $vm.$loading.hide()
    }
    // if ($vm.$indicator) {
    //   $vm.$indicator.hide()
    // }
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      if (error.message.includes('timeout')) {
        Toast('请求超时，请检查网络是否连接正常')
      } else {
        Toast('请求失败，请检查网络是否已连接')
      }
      // toLogin()
    }
  }
)

export default HTTP
