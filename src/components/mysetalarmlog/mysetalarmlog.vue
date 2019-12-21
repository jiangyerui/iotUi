<template>
  <div id="mysetAlarmLog">
    <div class="headerAlarmLog">
      <!-- <button class="btnAddAlarmLog" @click="addAlarmLogBtn">增加设备</button> -->
      <!-- <dlgalarmLog v-if="isDlgAlarmLog" @dlgConfirmDlgAlarmLog="confirmDlgAlarmLog" @dlgCloseDlgAlarmLog="closeDlgAlarmLog"></dlgalarmLog> -->
      <div class="searchAlarmLog">
        <!-- <input type="text" placeholder="输入设备手机号" v-model="alarmLogPhone" /> -->
        <input type="text" placeholder="输入设备名称" v-model="alarmlogName" />
        <button @click="pageHandler(1)">查询</button>
      </div>
    </div>
    <div class="divTabAlarmLog">
      <table class="tabAlarmLog">
        <tr>
          <td>报警时间</td>
          <td>报警设备</td>
          <td>报警类型</td>
          <td>报警状态</td>
          <td>处理意见</td>
          <td>处理时间</td>
          <td>安全经理编号</td>
          <td>管理报警</td>
        </tr>
        <tr v-for="item in alarmLogs.rows" :key="item.alarmId">
          <td v-if="item.alarmTime">{{item.alarmTime | dateFormat('yyyy-mm-DD hh:mm:ss')}}</td>
          <td v-else>未填写报警时间</td>
          <td v-if="item.alarmDeviceId">{{item.alarmDeviceId}}</td>
          <td v-else>未填写报警设备</td>
          <td v-if="item.alarmtypId">{{item.alarmtypId}}</td>
          <td v-else>未填写报警类型</td>
          <td
            :class="alarmLogStatusList[item.alarmStatus].class"
            v-if="item.alarmStatus"
          >{{alarmLogStatusList[item.alarmStatus].name}}</td>
          <td v-else>未填写报警状态</td>
          <td v-if="item.alarmSolveResult">{{item.alarmSolveResult}}</td>
          <td v-else>未处理</td>
          <td
            v-if="item.alarmSolveTime"
          >{{ item.alarmSolveTime | dateFormat("yyyy-MM-dd hh:mm:ss")}}</td>
          <!-- <td v-if="item.alarmSolveTime">{{ item.alarmSolveTime | dateFormat('yyyy-mm-DD')}}</td> -->
          <td v-else>未处理</td>
          <td v-if="item.alarmUserId">{{item.alarmUserId}}</td>
          <td v-else>未处理</td>
          <td>
            <a href="#" @click.prevent="urgeAlarmLog(item.alarmId)">督促</a>
            <!-- <a href="#" @click.prevent="deleteAlarmLog(item.alarmId)">删除</a> -->
            <a href="#" @click.prevent="sloveAlarmLog(item.alarmId)">处理</a>
          </td>
        </tr>
      </table>
      <div class="wrap" id="wrap">
        <zpagenav
          v-bind:page="page"
          v-bind:page-size="5"
          v-bind:total="alarmLogs.total"
          v-bind:max-page="alarmLogs.total"
          v-on:pagehandler="pageHandler"
        ></zpagenav>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
// import { formatDate } from "@/common/commonUtil.js";
// import dlgalarmLog from "../dlgalarmLog/dlgalarmLog.vue";
// import dlgconfirm from "../dlgConfirm/dlgConfirm.vue";
import zpagenav from "../../components/zpageNav/zpageNav.vue";
import { mapState } from "vuex";
import {
  reqAddAlarmLog,
  reqDeleteAlarmLogById,
  reqSloveAlarmLogById,
  reqUpdateAlarmLog
} from "../../api";
export default {
  name: "mysetAlarmLog",
  components: {
    // dlgconfirm,
    // dlgalarmLog,
    zpagenav
  },
  data() {
    return {
      classError: "",
      classWarn: "",
      classInfo: "",
      alarmLogStatusList: [
        { class: "", name: "" },
        { class: "classError", name: "报警中" },
        { class: "classWarn", name: "处理中" },
        { class: "classInfo", name: "处理完成" },
        { class: "classInfo", name: "处理完成" }
      ],
      alarmlogName: "",
      isDlgAlarmLog: false,
      page: 1, //  显示的是哪一页
      pageSize: 5, //  每一页显示的数据条数
      total: 0, //  记录总数
      maxPage: 9 // 最大页数
    };
  },
  created: function () {
    //  created  表示页面加载完毕，立即执行
    this.pageHandler(1);
  },
  mounted() {
    this.$store.dispatch("selectAlarmLogById", 1); // 初始化vuex中的alarmLog
  },
  computed: {
    ...mapState([
      "alarmLog",
      "alarmLogs",
      "lcAcsB128",
      "lcAcs",
      "address",
      "categorys"
    ])
  },
  filters: {
    dateFormat: function (dateStr, pattern) {
      var dt = new Date(dateStr)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      // return y + '-' + m + '-' + d
      if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        // return '$(y)-$(m)-$(d)'
        return y + '-' + m + '-' + d
      } else {
        var hh = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()
        if (hh < 10) {
          hh = '0' + hh
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        if (ss < 10) {
          ss = '0' + ss
        }
        // return '$(y)-$(m)-$(d) $(hh):$(mm):$(ss)'
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
      }
    }
  },
  methods: {
    selectAlarmLogByIf() { },
    addAlarmLogBtn() {
      var alarmLogTemp = {
        alarmLogId: "",
        alarmLogTime: "",
        alarmLogDeviceId: "",
        alarmLogtypId: "",
        alarmLogStatus: "",
        alarmLogSolveResult: "",
        alarmLogSolveTime: "",
        alarmLogUserId: ""
      };
      this.$store.dispatch("clearAlarmLogVal", alarmLogTemp);
      this.isDlgAlarmLog = true;
    },
    async updateAlarmLog(alarmLogId) {
      await this.$store.dispatch("selectAlarmLogById", alarmLogId); // 等待异步执行完成
      this.isDlgAlarmLog = true;
    },
    // 督促处理
    urgeAlarmLog(alarmLogId) {
      // alert("将再次给安全经理发送一条督促处理报警的短信！")
      var a = window.confirm("确认要再次给安全经理发送一条督促处理报警的短信吗？")
      if (a) {
        alert("发送成功！")
      } else {

      }
    },
    // 删除报警
    deleteAlarmLog(alarmLogId) {
      var a = window.confirm("确认要删除吗？")
      if (a) {
        reqDeleteAlarmLogById(alarmLogId);
        this.pageHandler(this.page);
      } else {

      }
    },
    // 处理一条报警
    sloveAlarmLog(alarmLogId) {
      var a = window.confirm("确认要处理吗？")
      if (a) {
        reqSloveAlarmLogById(alarmLogId);
        this.pageHandler(this.page);
      } else {

      }
    },
    confirmDlgAlarmLog(alarmLog) {
      if (alarmLog.alarmLogId !== "") {
        reqUpdateAlarmLog(alarmLog); // 修改一个设备
      } else {
        reqAddAlarmLog(alarmLog); // 增加一个设备
      }
      this.pageHandler(this.page);
      this.isDlgAlarmLog = false;
    },
    closeDlgAlarmLog() {
      this.isDlgAlarmLog = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function (page) {
      // here you can do custom state update
      this.page = page;
      // this.$store.dispatch("selectAlarmLogByPage", page, this.alarmLogName);
      this.$store.dispatch("selectAlarmLogByPage", {
        pageNum: page,
        alarmlogName: this.alarmlogName
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetAlarmLog
  background-color red
  .headerAlarmLog
    background-color red
    display inline
    .btnAddAlarmLog
      position absolute
      top 30px
      left 50px
      width 80px
      height 30px
      border-radius 3px
    .searchAlarmLog
      position absolute
      top 30px
      right 50px
      input
        height 30px
        border-radius 3px
        margin-left 10px
        padding-left 15px
      button
        width 80px
        height 30px
        margin-left 10px
        border-radius 3px
  .divTabAlarmLog
    position absolute
    left 50px
    // width 1100px
    margin-top 120px
    // background-color green
    .tabAlarmLog
      tr
        td
          padding 10px 25px
          border 1px solid #000
          color #E7EAED
      .classError
        color red
      .classWarn
        color yellow
      .classInfo
        color green
      tr:nth-child(odd)
        background-color #131313
      tr:nth-child(even)
        background-color #383838
</style>
