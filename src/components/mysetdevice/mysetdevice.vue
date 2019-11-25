<template>
  <div id="mysetDevice">
    <div class="headerDevice">
      <button class="btnAddDevice" @click="addDeviceBtn">增加设备</button>
      <dlgdevice
        v-if="isDlgDevice"
        @dlgConfirmDlgDevice="confirmDlgDevice"
        @dlgCloseDlgDevice="closeDlgDevice"
      ></dlgdevice>
      <div class="searchDevice">
        <!-- <input type="text" placeholder="输入设备手机号" v-model="devicePhone" /> -->
        <input type="text" placeholder="输入设备名称" v-model="deviceName" />
        <button @click="pageHandler(1)">查询</button>
      </div>
    </div>
    <div class="divTabDevice">
      <table class="tabDevice">
        <tr>
          <td>设备编号</td>
          <td>设备名称</td>
          <td>所属系列</td>
          <td>所属集团</td>
          <td>所属项目</td>
          <td>关联相机</td>
          <td>设备状态</td>
          <td>操作设备</td>
        </tr>
        <tr v-for="item in devices.rows" :key="item.id">
          <td v-if="item.deviceNo">{{item.deviceNo}}</td>
          <td v-else>—</td>
          <td v-if="item.deviceName">{{item.deviceName}}</td>
          <td v-else>—</td>
          <td v-if="item.devicePermission">{{devicePermissionList[item.devicePermission]}}</td>
          <td v-else>—</td>
          <td v-if="item.deviceCompanyId">{{item.deviceCompanyId}}</td>
          <td v-else>—</td>
          <td v-if="item.deviceProjectId">{{item.deviceProjectId}}</td>
          <td v-else>—</td>
          <td v-if="item.deviceCameraId">{{item.deviceCameraId}}</td>
          <td v-else>—</td>
          <td
            :class="deviceStatusList[item.deviceStatus].class"
            v-if="item.deviceStatus"
          >{{deviceStatusList[item.deviceStatus].name}}</td>
          <td v-else>—</td>
          <td>
            <a href="#" @click.prevent="updateDevice(item.deviceId)">修改</a>
            <a href="#" @click.prevent="deleteDevice(item.deviceId)">删除</a>
          </td>
        </tr>
      </table>
      <div class="wrap" id="wrap">
        <zpagenav
          v-bind:page="page"
          v-bind:page-size="5"
          v-bind:total="devices.total"
          v-bind:max-page="devices.total"
          v-on:pagehandler="pageHandler"
        ></zpagenav>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import dlgdevice from "../dlgdevice/dlgdevice.vue";
// import dlgconfirm from "../dlgConfirm/dlgConfirm.vue";
import zpagenav from "../../components/zpageNav/zpageNav.vue";
import { mapState } from "vuex";
import { reqAddDevice, reqDeleteDeviceById, reqUpdateDevice } from "../../api";
export default {
  name: "mysetDevice",
  components: {
    // dlgconfirm,
    dlgdevice,
    zpagenav
  },
  data() {
    return {
      classError: "",
      classWarn: "",
      classInfo: "",
      devicePermissionList: [
        "",
        "智慧用电",
        "电气火灾",
        "消防电源",
        "双电源",
        "智能照明",
        "智能电涌",
        "智能配电",
        "智能过欠"
      ],
      deviceStatusList: [
        { class: "", name: "" },
        { class: "classError", name: "试用" },
        { class: "classInfo", name: "运行" },
        { class: "classWarn", name: "停用" }
      ],
      deviceName: "",
      isDlgDevice: false,
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
    this.$store.dispatch("selectDeviceById", 1); // 初始化vuex中的device
  },
  computed: {
    ...mapState([
      "device",
      "devices",
      "lcAcsB128",
      "lcAcs",
      "address",
      "categorys"
    ])
  },
  methods: {
    selectDeviceByIf() {},
    addDeviceBtn() {
      var deviceTemp = {
        deviceId: "",
        deviceNo: "",
        deviceName: "",
        devicePermission: "",
        deviceCompanyId: "",
        deviceProjectId: "",
        deviceIntroduce: "",
        deviceCameraId: "",
        deviceStatus: ""
      };
      this.$store.dispatch("clearDeviceVal", deviceTemp);
      this.isDlgDevice = true;
    },
    async updateDevice(deviceId) {
      await this.$store.dispatch("selectDeviceById", deviceId); // 等待异步执行完成
      this.isDlgDevice = true;
    },
    deleteDevice(deviceId) {
      reqDeleteDeviceById(deviceId);
      this.pageHandler(this.page);
    },
    confirmDlgDevice(device) {
      if (device.deviceId !== "") {
        reqUpdateDevice(device); // 修改一个设备
      } else {
        reqAddDevice(device); // 增加一个设备
      }
      this.pageHandler(this.page);
      this.isDlgDevice = false;
    },
    closeDlgDevice() {
      this.isDlgDevice = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function(page) {
      // here you can do custom state update
      this.page = page;
      // this.$store.dispatch("selectDeviceByPage", page, this.deviceName);
      this.$store.dispatch("selectDeviceByPage", {
        pageNum: page,
        deviceName: this.deviceName
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetDevice
  background-color red
  .headerDevice
    background-color red
    display inline
    .btnAddDevice
      position absolute
      top 30px
      left 50px
      width 80px
      height 30px
      border-radius 3px
    .searchDevice
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
  .divTabDevice
    position absolute
    left 50px
    // width 1100px
    margin-top 120px
    // background-color green
    .tabDevice
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
