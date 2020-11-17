import HTTP from '../http'
import axios from 'axios'

let cancel
const CancelToken = axios.CancelToken
const config = {
  // login (data) {
  //   return HTTP.post('/api/userController/login', data, {
  //     cancelToken: new CancelToken(function executor (c) {
  //       cancel = c
  //     })
  //   })
  // },
  getAllConfig () {
    return HTTP.get(
      '/api/config/select',
      {
        cancelToken: new CancelToken(function executor (c) {
          cancel = c
        })
      }
    )
  },
  uploadImg (data) {
    return HTTP.post('/api/attachment/upload', data, {
      cancelToken: new CancelToken(function executor (c) {
        cancel = c
      })
    })
  },
  getHeadIcon (userId) {
    return HTTP.get(
      `/api/attachment/select/${userId}`,
      {
        cancelToken: new CancelToken(function executor (c) {
          cancel = c
        })
      }
    )
  },
  deleteHeadIcon (userId) {
    return HTTP.delete(
      `/api/attachment?userId=${userId}`,
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
export default config
