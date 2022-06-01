// 导出一个 axios 实例
import axios from 'axios'
const service = axios.create() // 创建一个 axios 的实例
service.interceptors.request.use() // 请求拦截器
service.interceptors.response.use() // 相应拦截器
export default service // 导出 axios 实例