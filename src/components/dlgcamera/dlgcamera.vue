<template>
  <div id="dlgcamera">
    <div class="container">
      <div class="titleCamera">{{camera.cameraId==''?'增加相机':'编辑相机'}}</div>
      <div class="contextCamera">
        <div class="contextCameraItem">
          <label>识别码:</label>
          <input type="text" placeholder="请不要超过20个字符" v-model="camera.camera.cameraCode" />
        </div>
        <div class="contextCameraItem">
          <label>相机名称:</label>
          <input type="text" placeholder="请不要超过20个字符" v-model="camera.camera.cameraName" />
        </div>
        <div class="contextCameraItem">
          <label>所属项目:</label>
          <!-- <input type="text" placeholder="请输入11位手机号" v-model="device.deviceProjectId" /> -->
          <select class v-model="camera.camera.cameraProjectId" @change="projectChange()">
            <option
              :value="item.project.projectId"
              v-for="item in projectscurrent"
              :key="item.id"
            >{{item.project.projectName}}</option>
          </select>
        </div>
        <!-- <div class="contextCameraItem">
          <label>相机地址:</label>
          <input type="text" placeholder="请不超过20个字符" v-model="camera.camera.cameraIp" />
        </div> -->
        <div class="contextCameraItem">
          <label>url:</label>
          <input type="text" placeholder="请输入url" v-model="camera.camera.cameraUrl" />
        </div>
        <div class="contextCameraItem">
          <label>apiKey:</label>
          <input type="text" placeholder="请输入api-key" v-model="camera.camera.cameraApiKey" />
        </div>
        <div class="contextCameraItem">
          <label>secret:</label>
          <input type="text" placeholder="请输入secret" v-model="camera.camera.cameraSecret" />
        </div>
        <div class="contextCameraItem">
          <label>serial:</label>
          <input type="text" placeholder="请serial-number" v-model="camera.camera.cameraSerialNumber" />
        </div>
        <div class="contextCameraItem">
          <label>相机状态:</label>
          <!-- <input type="text" placeholder="请不要超过20个字符" v-model="camera.cameraStatus" /> -->
          <select class="" v-model="camera.camera.cameraStatus">
            <option :value="item.id" v-for="item in selectCameraStatusList" :key="item.id">{{item.name}}</option>
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
  name: "dlgcamera",
  props: ["childdevicetree"],
  data() {
    return {
      selectCameraStatusList: [
        { id: 0, name: "" },
        { id: 1, name: "未知" },
        { id: 2, name: "运行" },
        { id: 3, name: "失联" }
      ],
      cameraPasswordConfirm: "",
      cameraTemp: {
        cameraId: "",
        cameraNo: "",
        cameraName: "",
        cameraPermission: "",
        cameraCompanyId: "",
        cameraProjectId: "",
        cameraIntroduce: "",
        cameraCameraId: "",
        cameraStatus: ""
      },
      // selectCameraStatusList: [{ id: 0, name: "锁定" }, { id: 1, name: "正常" }],
      selectCameraRoleList: [
        { id: 1, name: "设备用户" },
        { id: 2, name: "设备用户" },
        { id: 3, name: "普通用户" }
      ],
      selectedCameraStatus: ""
    };
  },
  mounted() {
    // this.cameraPasswordConfirm = this.camera.cameraPassword;111
  },
  created() { },
  computed: {
    ...mapState(["projectscurrent","camera", "cameras", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    dlgConfirm() {
      this.$emit("dlgConfirmDlgCamera", this.camera);
    },
    dlgClose() {
      this.$emit("dlgCloseDlgCamera");
    },
    getSelectedCameraStatus() { },
    projectChange() { }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#dlgcamera
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
    .titleCamera
      width 100%
      height 30px
      background-color #383838
      padding-top 10px
    .contextCamera
      position absolute
      left 15px
      .contextCameraItem
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
