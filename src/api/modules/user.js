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
  cancelRequest () {
    if (typeof cancel === 'function') {
      cancel()
    }
  }
}
export default User
