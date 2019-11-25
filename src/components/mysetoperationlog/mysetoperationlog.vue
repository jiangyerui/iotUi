<template>
  <div id="mysetOperationLog">
    <div class="headerOperationLog">
      <!-- <button class="btnAddOperationLog" @click="addOperationLogBtn">增加设备</button> -->
      <!-- <dlgoperationLog v-if="isDlgoperationLog" @dlgConfirmDlgoperationLog="confirmDlgoperationLog" @dlgCloseDlgoperationLog="closeDlgoperationLog"></dlgoperationLog> -->
      <div class="searchOperationLog">
        <!-- <input type="text" placeholder="输入设备手机号" v-model="operationLogPhone" /> -->
        <input type="text" placeholder="输入设备名称" v-model="operationLogName" />
        <button @click="pageHandler(1)">查询</button>
      </div>
    </div>
    <div class="divTabOperationLog">
      <table class="tabOperationLog">
        <tr>
          <!-- <td>操作编号</td> -->
          <td>操作时间</td>
          <td>操作设备</td>
          <td>操作人员</td>
          <td>操作结果</td>
          <td>管理操作</td>
        </tr>
        <tr v-for="item in operationLogs.rows" :key="item.id">
          <td v-if="item.operationTime">{{item.operationTime}}</td>
          <td v-else>未填写操作时间</td>
          <td v-if="item.operationType">{{item.operationType}}</td>
          <td v-else>未填写操作类型</td>
          <td v-if="item.operationDeviceId">{{item.operationDeviceId}}</td>
          <td v-else>未填写操作设备</td>
          <td v-if="item.operationUserId">{{item.operationUserId}}</td>
          <td v-else>未填写操作人员</td>
          <td>
            <a href="#" @click.prevent="deleteOperationLog(item.operationLogId)">删除</a>
          </td>
        </tr>
      </table>
      <div class="wrap" id="wrap">
        <zpagenav
          v-bind:page="page"
          v-bind:page-size="5"
          v-bind:total="operationLogs.total"
          v-bind:max-page="operationLogs.total"
          v-on:pagehandler="pageHandler"
        ></zpagenav>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
// import dlgoperationLog from "../dlgoperationLog/dlgoperationLog.vue";
// import dlgconfirm from "../dlgConfirm/dlgConfirm.vue";
import zpagenav from "../../components/zpageNav/zpageNav.vue";
import { mapState } from "vuex";
import { reqAddOperationLog, reqDeleteOperationLogById, reqUpdateOperationLog } from "../../api";
export default {
  name: "mysetOperationLog",
  components: {
    // dlgconfirm,
    // dlgoperationLog,
    zpagenav
  },
  data() {
    return {
      operationLogName: "",
      isDlgoperationLog: false,
      page: 1, //  显示的是哪一页
      pageSize: 5, //  每一页显示的数据条数
      total: 0, //  记录总数
      maxPage: 9 // 最大页数
    };
  },
  created: function() {
    //  created  表示页面加载完毕，立即执行
    this.pageHandler(1);
  },
  mounted() {
    this.$store.dispatch("selectOperationLogById", 1);// 初始化vuex中的operationLog
  },
  computed: {
    ...mapState(["operationLog", "operationLogs", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    selectOperationLogByIf() {},
    addOperationLogBtn() {
      var operationLogTemp = {
        operationLogId: "",
        operationLogCode: "",
        operationLogName: "",
        operationLogIp: "",
        operationLogApiKey: "",
        operationLogSecret: "",
        operationLogSerialNumber: "",
        operationLogRemark: "",
        operationLogStatus: ""
      };
      this.$store.dispatch("clearOperationLogVal", operationLogTemp);
      this.isDlgOperationLog = true;
    },
    async updateOperationLog(operationLogId) {
      await this.$store.dispatch("selectOperationLogById", operationLogId);// 等待异步执行完成
      this.isDlgOperationLog = true;
    },
    deleteOperationLog(operationLogId) {
      reqDeleteOperationLogById(operationLogId);
      this.pageHandler(this.page);
    },
    confirmDlgOperationLog(operationLog) {
      if (operationLog.operationLogId !== "") {
        reqUpdateOperationLog(operationLog); // 修改一个设备
      } else {
        reqAddOperationLog(operationLog); // 增加一个设备
      }
      this.pageHandler(this.page);
      this.isDlgOperationLog = false;
    },
    closeDlgOperationLog() {
      this.isDlgOperationLog = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function(page) {
      // here you can do custom state update
      this.page = page;
      // this.$store.dispatch("selectoperationLogByPage", page, this.operationLogName);
      this.$store.dispatch("selectOperationLogByPage", {
        pageNum: page,
        operationLogName: this.operationLogName
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetOperationLog
  background-color red
  .headerOperationLog
    background-color red
    display inline
    .btnAddOperationLog
      position absolute
      top 30px
      left 50px
      width 80px
      height 30px
      border-radius 3px
    .searchOperationLog
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
  .divTabOperationLog
    position absolute
    left 50px
    // width 1100px
    margin-top 120px
    // background-color green
    .tabOperationLog
      tr
        td
          padding 10px 25px
          border 1px solid #000
          color #E7EAED
      tr:nth-child(odd)
        background-color #131313
      tr:nth-child(even)
        background-color #383838
</style>
