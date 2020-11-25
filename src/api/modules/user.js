import HTTP from '../http'
import axios from 'axios'

let cancel
const CancelToken = axios.CancelToken
const User = {
  login (data) {
    return HTTP.post('/api/userController/login', data, {
      cancelToken: new CancelToken(function executor (c) {
        cancel = c
      })
    })
  },
  getVerifyCode () {
    return HTTP.get(
      '/api/userController/getVerifyCode?url=' + window.location.protocol + '//' + window.location.host,
      {
        cancelToken: new CancelToken(function executor (c) {
          cancel = c
        })
      }
    )
  },
  updateUserInfo (data) {
    return HTTP.put(
      '/api/userController/modify', data,
      {
        cancelToken: new CancelToken(function executor (c) {
          cancel = c
        })
      }
    )
  },
  registerUser (data) {
    return HTTP.post('/api/userController/register', data, {
      cancelToken: new CancelToken(function executor (c) {
        cancel = c
      })
    })
  },
  getUserList () {
    return HTTP.get(
      '/api/userController/list',
      {
        cancelToken: new CancelToken(function executor (c) {
          cancel = c
        })
      }
    )
  },
  cancelRequest () {
    if (typeof cancel === 'function') {
      cancel()
    }
  }
}
export default User
