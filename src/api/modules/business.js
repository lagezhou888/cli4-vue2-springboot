import HTTP from '../http'
import axios from 'axios'

let cancel
const CancelToken = axios.CancelToken
const Business = {
  getBusinessList (data) {
    return HTTP.post(
      `/api/business/listPage?pageNum=${data.pageNum}&pageSize=${data.pageSize}`, data.business,
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
export default Business
