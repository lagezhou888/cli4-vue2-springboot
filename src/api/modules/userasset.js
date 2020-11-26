import HTTP from '../http'
import axios from 'axios'

let cancel
const CancelToken = axios.CancelToken
const UserAsset = {
  insert (data) {
    return HTTP.post('/api/userasset', data, {
      cancelToken: new CancelToken(function executor (c) {
        cancel = c
      })
    })
  },
  getList (userId) {
    return HTTP.get(`/api/userasset/${userId}`, {
      cancelToken: new CancelToken(function executor (c) {
        cancel = c
      })
    })
  },
  getChartData (data) {
    return HTTP.post('/api/userasset/getChartData', data, {
      cancelToken: new CancelToken(function executor (c) {
        cancel = c
      })
    })
  },
  cancelRequest () {
    if (typeof cancel === 'function') {
      cancel()
    }
  }
}
export default UserAsset
