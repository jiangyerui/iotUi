<template>
  <div id="mqttws">
    <input type="text" id="msg" v-model="msg" />
    <input type="button" value="Send" @click="send" />
    <input type="button" value="Start" @click="start" />
    <input type="button" value="Stop" @click="stop" />
  </div>
</template>
<style>
</style>
<script>
import { mapState } from "vuex";
export default {
  name: 'mqttws',
  data() {
    return {
      topic: 'currentdevdata',
      client: {},
      options: {},
      msg: 'jiangMsgVsCode',
      count: 0,
      user: {}
    }
  },
  mounted: function () {
    this.client = new Paho.MQTT.Client('192.168.0.200', 8083, 'mqttjs_e8022a4d0b112');
    var _client = this.client;
    var opt = this.options =
      {
        invocationContext: {
          host: '192.168.0.200',
          port: 8083,
          path: _client.path,
          clientId: 'mqttjs_e8022a4d0b112'
        },
        timeout: 5,
        keepAliveInterval: 50,
        cleanSession: false,
        useSSL: false,
        userName: 'admin',
        password: 'public',
        onSuccess: function () {
          // console.log("onConnected");
          _client.subscribe('currentalarmlog');// 订阅主题
        },
        onFailure: function (e) {
          // console.log(e);
        }
      };
    this.client.connect(opt);// 连接服务器并注册连接成功处理事件
    this.client.onConnectionLost = this.onConnectionLost;// 注册连接断开处理事件
    this.client.onMessageArrived = this.onMessageArrived;// 注册消息接收处理事件
    this.client.onSuccess = this.onConnect;
  },
  methods: {
    onConnectionLost: function (responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage)
        console.log("连接已断开")
      }
    },
    // 监听消息
    onMessageArrived: function (message) {
      let obj = JSON.parse(message.payloadString);
      // console.log("收到实时数据消息"+obj.alarmCompanyId);
      if (obj.hasOwnProperty("no")) {
        // console.log("收到实时数据消息"+JSON.stringify(obj));
        this.$store.dispatch("updatedevicedatafrommqtt", obj);// 更新设备实时数据
      }
      if (obj.hasOwnProperty("alarmProjectId")) {
        // console.log("收到报警消息"+JSON.stringify(obj));
        var is = []
        this.indexdevpros.forEach(item => {
          if (item.project.projectId === obj.alarmProjectId) {
            var as = this.alarmLogs
            as.push(obj)
            console.log("监听到一条报警,mac=" + obj.alarmExtend1);
            this.$store.dispatch("updateCurrentAlarmLogs", as);// 更新报警
            item.project.projectDeviceStatus = 2
            is.push(item)
          } else {
            is.push(item)
          }
        })
        this.$store.dispatch("updateDeviceProjects", is);// 更新项目信息
        this.$emit("emitdeviceitem")
      }
    },
    // onConnect: function () {
    //   console.log("onConnected");
    //   this.client.subscribe("currentdevdata/aeb8e77b8209001");// 订阅主题
    // },
    changeTopic(topic) {
      let opt = {
        onSuccess() {
          // console.log("退订成功")
        },
        onFailure(error) {
          console.log("退订失败")
          console.log(error)
        }
      }
      // console.log("退订topic=" + 'currentdevdata/' + this.devicedata.no)
      this.client.unsubscribe('currentdevdata/' + this.devicedata.no, opt);
      // console.log('定阅topic = ' + 'currentdevdata/' + topic)
      this.client.subscribe('currentdevdata/' + topic);// 订阅主题
    },
    send: function () {
      var s = this.msg;
      if (s) {
        s = "{time:" + new Date() + ", content:" + (s) + ", from: web console}";
        var message = new Paho.MQTT.Message(s);
        message.destinationName = this.topic;
        this.client.send(message);
        this.msg = '';
      }
    },
    start: function () {
      window.tester = window.setInterval(function () {
        if (this.client.isConnected) {
          var s = "{time:" + new Date() + ", content:" + (this.count++) + ", from: web console}";
          var message = new Paho.MQTT.Message(s);
          message.destinationName = this.topic;
          this.client.send(message);
        }
      }.bind(this), 1000);
    },
    stop: function () {
      window.clearInterval(window.tester);
    }
  },
  computed: {
    ...mapState([
      "usercurrent",
      "indexdevpros",
      "alarmLogs",
      "devicedata"
    ])
  }
}
</script>
