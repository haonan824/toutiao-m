import axios from 'axios'
import jsonBig from 'json-bigint'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})
// 定制转换后端数据的API
request.defaults.transformResponse = [function (data) {
  try {
    // JSON.parse(data)和jsonBig.parse(data)一样
    return jsonBig.parse(data)
  } catch (err) {
    console.log('转换失败', err)
    return {}
  }
}]
export default request
