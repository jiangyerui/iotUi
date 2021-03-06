import axios from 'axios'
// const baseUrl = "http://localhost:8080"
const baseUrl = ""
// const baseUrl = "http://192.168.0.200:8089"

export default function ajaxGet(url = '', data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        let promise
        if (type === 'GET') {
            // 准备url query 参数数据
            let dataStr = '' // 数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                // url = url + '?' + dataStr
                url = url + '?' + dataStr
            }
            // 发送get 请求
            // promise = axios.get(baseUrl + url)
            promise = axios.get(baseUrl + url)
        } else {
            // 发送post 请求
            // promise = axios.post(url, data)
        }
        promise.then(response => {
            resolve(response.data)
        })
            .catch(error => {
                reject(error)
            })
    })
}
