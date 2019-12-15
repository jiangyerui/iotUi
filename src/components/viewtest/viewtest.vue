<template>
  <div>
    <div>测试数据:{{ msg }}</div>
  </div>
</template>

<script>
import mqtt from 'mqtt'
import { MQTT_SERVICE, MQTT_USERNAME, MQTT_PASSWORD } from '../../common/sysconstant.js'
var client
const options = {
  // connectTimeout: 40000,
  connectTimeout: 10,
  clientId: 'mqttjs_e8022a4d0b111',
  username: MQTT_USERNAME,
  password: MQTT_PASSWORD,
  clean: true
}
client = mqtt.connect(MQTT_SERVICE, options)
export default {
  name: 'viewtest',
  data() {
    return {
      msg: '',
      path: MQTT_SERVICE,
      socket: ""
    }
  },
  created() {
    this.init()
    this.mqttMSG()
  },
  methods: {
    init: function () {
      if (typeof (WebSocket) === "undefined") {
        alert("您的浏览器不支持socket")
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    mqttMSG() {
      // mqtt连接
      client.on('connect', (e) => {
        console.log('连接成功:')
        client.subscribe('jiangTopic', { qos: 0 }, (error) => {
          if (!error) {
            console.log('订阅成功')
          } else {
            console.log('订阅失败')
          }
        })
      })
      // 接收消息处理
      client.on('message', (topic, message) => {
        console.log('收到来自', topic, '的消息', message.toString())
        this.msg = message.toString()
      })
      // 断开发起重连
      client.on('reconnect', () => {
        console.log('正在重连:', error)
      })
      // 链接异常处理
      client.on('error', (error) => {
        console.log('连接失败:', error)
      })
    }
  }
}
</script>
