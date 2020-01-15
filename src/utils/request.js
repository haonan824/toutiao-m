import axios from 'axios'
import jsonBig from 'json-bigint'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})
// 定制转换后端数据的API
request.defaults.transformResponse = [function (data) {
  try {
    // JSON.parse(data)和jsonBig.parse(data)一样
    return jsonBig.parse(data)
  } catch (err) {
    // console.log('转换失败', err)
    return {}
  }
}]
// 请求拦截器
request.interceptors.request.use(function (config) {
  // config 请求配置对象，我们可以通过修改 config 来实现统一请求数据处理
  const { user } = store.state
  // 统一添加 token
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default request
