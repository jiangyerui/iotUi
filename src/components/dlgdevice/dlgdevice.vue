<template>
  <div id="dlgdevice">
    <div class="container">
      <div class="titleDevice">{{device.deviceId==''?'增加设备':'编辑设备'}}</div>
      <div class="contextDevice">
        <div class="contextDeviceItem">
          <label>设备编号:</label>
          <input type="text" placeholder="请输入正确的设备编号" v-model="device.deviceNo" />
        </div>
        <div class="contextDeviceItem">
          <label>设备名称:</label>
          <input type="text" placeholder="请不要超过20个字符" v-model="device.deviceName" />
        </div>
        <div class="contextDeviceItem">
          <label>所属系列:</label>
          <!-- <input type="texts" placeholder="请不要超过20个字符" v-model="device.devicePermission" /> -->
          <select class="" v-model="device.devicePermission" @change="getSelectedDeviceStatus">
            <option :value="item.id" v-for="item in devicePermissionList" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="contextDeviceItem">
          <label>所属集团:</label>
          <input type="text" placeholder="请不超过20个字符" v-model="device.deviceCompanyId" />
        </div>
        <div class="contextDeviceItem">
          <label>所属项目:</label>
          <input type="text" placeholder="请输入11位手机号" v-model="device.deviceProjectId" />
        </div>
        <div class="contextDeviceItem">
          <label>关联相机:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="device.deviceCameraId" />
        </div>
        <div class="contextDeviceItem">
          <label>设备状态:</label>
          <!-- <input type="password" placeholder="请不要超过20个字符" v-model="device.deviceStatus" /> -->
          <select class="" v-model="device.deviceStatus" @change="getSelectedDeviceStatus">
            <option :value="item.id" v-for="item in selectDeviceStatusList" :key="item.id">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="btnDiv">
        <button class="btnCom btnConfirm" @click="dlgConfirm">确认</button>
        <button class="btnCom btnCancel" @click="dlgClose">取消</button>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import { mapState } from "vuex";
export default {
  name: "dlgdevice",
  data() {
    return {
      selectDeviceStatusList: [
        { id: 0, name: "" },
        { id: 1, name: "试用" },
        { id: 2, name: "运行" },
        { id: 3, name: "停用" }
      ],
      // 1智慧用电，2电气火灾，3消防电源，4双电源，5智能照明，6智能电涌，7智能配电，8智能过欠',
      devicePermissionList: [
        { id: 0, name: "" },
        { id: 1, name: "智慧用电" },
        { id: 2, name: "电气火灾" },
        { id: 3, name: "消防电源" },
        { id: 4, name: "双电源" },
        { id: 5, name: "智能照明" },
        { id: 6, name: "智能电涌" },
        { id: 7, name: "智能配电" },
        { id: 8, name: "智能过欠" }
      ],
      devicePasswordConfirm: "",
      deviceTemp: {
        deviceId: "",
        deviceNo: "",
        deviceName: "",
        devicePermission: "",
        deviceCompanyId: "",
        deviceProjectId: "",
        deviceIntroduce: "",
        deviceCameraId: "",
        deviceStatus: ""
      },
      // selectDeviceStatusList: [{ id: 0, name: "锁定" }, { id: 1, name: "正常" }],
      selectDeviceRoleList: [
        { id: 1, name: "设备用户" },
        { id: 2, name: "设备用户" },
        { id: 3, name: "普通用户" }
      ],
      selectedDeviceStatus: ""
    };
  },
  mounted() {
    // this.devicePasswordConfirm = this.device.devicePassword;111
  },
  created() {},
  computed: {
    ...mapState(["device", "devices", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    dlgConfirm() {
      this.$emit("dlgConfirmDlgDevice", this.device);
    },
    dlgClose() {
      this.$emit("dlgCloseDlgDevice");
    },
    getSelectedDeviceStatus() {}
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#dlgdevice
  position fixed
  top 0px
  bottom 0px
  left 0px
  right 0px
  background-color rgba(0, 0, 0, 0.6)
  z-index 9999
  .container
    position absolute
    width 500px
    height 500px
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-color #131313
    border-radius 8px
    overflow hidden
    color #E7EAED
    .titleDevice
      width 100%
      height 30px
      background-color #383838
      padding-top 10px
    .contextDevice
      position absolute
      left 15px
      .contextDeviceItem
        // display inline
        margin-top 20px
        label
          display inline
          position absolute
          left 20px
          margin-right 10px
        input
          // position absolute
          // left 50px
          width 220px
          height 25px
          margin-left 100px
          border-radius 4px
          padding-left 10px
        select
          display inline
          // left 50px
          // margin-left 100px
          width 130px
          height 27px
          border-radius 4px
    .btnDiv
      position absolute
      // margin-right 50px
      bottom 15px
      right 10px
      .btnCom
        width 80px
        height 30px
        border-radius 5px
        margin-right 10px
      .btnConfirmCom
        // background-color green
      .btnCancelCom
        // margin-left 10px
        // margin-right 10px
        // background-color red
</style>
