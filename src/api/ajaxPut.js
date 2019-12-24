import axios from 'axios'
// const baseUrl = "http://localhost:8080"
const baseUrl = ""
// const baseUrl = "http://localhost:8089"

export default function ajaxPut(url, data) {
    axios({
        method: "put",
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
