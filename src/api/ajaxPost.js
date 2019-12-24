import axios from 'axios'
// const baseUrl = "http://localhost:8080"
const baseUrl = ""
// const baseUrl = "http://192.168.0.200:8089"

export default function ajaxPost(url, data) {
  // axios({
  this.axios({
        method: "post",
        url: baseUrl + url,
        data: JSON.stringify(data),
        // data: data,
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
        .then(response => {
            // console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}
// let base = '';
export const postRequest = (url, params) => {
  // return axios({
  return axios({
    method: 'post',
    // url: `${base}${url}`,
    url: `${baseUrl}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      // "withCredentials": true
    }
  });
  }
