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
  cancelRequest () {
    if (typeof cancel === 'function') {
      cancel()
    }
  }
}
export default UserAsset
