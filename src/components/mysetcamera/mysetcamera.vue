<template>
  <div id="mysetCamera">
    <div class="headerCamera">
      <button class="btnAddCamera" @click="addCameraBtn">增加设备</button>
      <dlgcamera
        v-bind:childdevicetree="parentdevicetree"
        v-if="isDlgCamera"
        @dlgConfirmDlgCamera="confirmDlgCamera"
        @dlgCloseDlgCamera="closeDlgCamera"
      ></dlgcamera>
      <div class="searchCamera">
        <!-- <input type="text" placeholder="输入设备手机号" v-model="cameraPhone" /> -->
        <input type="text" placeholder="输入设备名称" v-model="cameraName" />
        <button @click="pageHandler(1)">查询</button>
      </div>
    </div>
    <div class="divTabCamera">
      <table class="tabCamera">
        <tr>
          <!-- <td>相机编号{{camera.rows}}</td> -->
          <td>相机识别码</td>
          <td>相机名称</td>
          <td>所属项目</td>
          <!-- <td>相机地址</td> -->
          <td>相机状态</td>
          <td>url</td>
          <td>api-key</td>
          <td>secret</td>
          <td>serial-number</td>
          <td>操作相机</td>
        </tr>
        <tr v-for="item in cameras.rows" :key="item.id">
          <!-- <td v-if="item.cameraId">{{item.cameraId}}</td>
          <td v-else>—</td>-->
          <td v-if="item.camera.cameraCode">{{item.camera.cameraCode}}</td>
          <td v-else>—</td>
          <td v-if="item.camera.cameraName">{{item.camera.cameraName}}</td>
          <td v-else>—</td>
          <td v-if="item.project.projectName">{{item.project.projectName}}</td>
          <td v-else>—</td>
          <!-- <td v-if="item.cameraIp">{{item.cameraIp}}</td>
          <td v-else>—</td>-->
          <td
            :class="cameraStatusList[item.camera.cameraStatus].class"
            v-if="item.camera.cameraStatus"
          >{{cameraStatusList[item.camera.cameraStatus].name}}</td>
          <td v-else>—</td>
          <!-- <td>{{item.cameraStatus}}</td> -->
          <td v-if="item.camera.cameraUrl">{{item.camera.cameraUrl}}</td>
          <td v-else>—</td>
          <td v-if="item.camera.cameraApiKey">{{item.camera.cameraApiKey}}</td>
          <td v-else>—</td>
          <td v-if="item.camera.cameraSecret">{{item.camera.cameraSecret}}</td>
          <td v-else>—</td>
          <td v-if="item.camera.cameraSerialNumber">{{item.camera.cameraSerialNumber}}</td>
          <td v-else>—</td>
          <td>
            <a href="#" @click.prevent="updateCamera(item.camera.cameraId)">修改</a>
            <a href="#" @click.prevent="deleteCamera(item.camera.cameraId)">删除</a>
          </td>
        </tr>
      </table>
      <div class="wrap" id="wrap">
        <zpagenav
          v-bind:page="page"
          v-bind:page-size="5"
          v-bind:total="cameras.total"
          v-bind:max-page="cameras.total"
          v-on:pagehandler="pageHandler"
        ></zpagenav>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import dlgcamera from "../dlgcamera/dlgcamera.vue";
// import dlgconfirm from "../dlgConfirm/dlgConfirm.vue";
import zpagenav from "../../components/zpageNav/zpageNav.vue";
import { mapState } from "vuex";
import { reqAddCamera, reqDeleteCameraById, reqUpdateCamera } from "../../api";
export default {
  name: "mysetCamera",
  components: {
    // dlgconfirm,
    dlgcamera,
    zpagenav
  },
  data() {
    return {
      classNone: "",
      classWarn: "",
      classInfo: "",
      cameraStatusList: [
        { class: "", name: "" },
        { class: "classNone", name: "未知" },
        { class: "classInfo", name: "在线" },
        { class: "classWarn", name: "失联" }
      ],
      parentdevicetree: {},
      cameraName: "",
      isDlgCamera: false,
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
    this.$store.dispatch("selectCameraById", 1);// 初始化vuex中的camera
    this.$store.dispatch("selectAllProjectByCurrentUser");
  },
  computed: {
    ...mapState(["camera", "cameras", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    selectCameraByIf() { },
    addCameraBtn() {
      var cameraTemp = {
        camera: {
          cameraId: "",
          cameraCode: "",
          cameraName: "",
          cameraIp: "",
          cameraApiKey: "",
          cameraSecret: "",
          cameraSerialNumber: "",
          cameraRemark: "",
          cameraStatus: ""
        },
        project: {}
      };
      this.$store.dispatch("clearCameraVal", cameraTemp);
      this.isDlgCamera = true;
    },
    async updateCamera(cameraId) {
      await this.$store.dispatch("selectCameraById", cameraId);// 等待异步执行完成
      this.isDlgCamera = true;
    },
    deleteCamera(cameraId) {
      var a = window.confirm("确认要删除吗？")
      if (a) {
        reqDeleteCameraById(cameraId);
        this.pageHandler(this.page);
        alert("删除成功！")
      } else {
      }
    },
    confirmDlgCamera(camera) {
      if (camera.camera.cameraId !== "") {
        reqUpdateCamera(camera); // 修改一个设备
      } else {
        reqAddCamera(camera); // 增加一个设备
        this.pageHandler(this.page);
      }
      this.pageHandler(this.page);
      this.isDlgCamera = false;
    },
    closeDlgCamera() {
      this.isDlgCamera = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function (page) {
      // here you can do custom state update
      this.page = page;
      // this.$store.dispatch("selectCameraByPage", page, this.cameraName);
      this.$store.dispatch("selectCameraByPage", {
        pageNum: page,
        cameraName: this.cameraName
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetCamera
  background-color red
  .headerCamera
    background-color red
    display inline
    .btnAddCamera
      position absolute
      top 30px
      left 50px
      width 80px
      height 30px
      border-radius 3px
    .searchCamera
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
  .divTabCamera
    position absolute
    left 50px
    // width 1100px
    margin-top 120px
    // background-color green
    .tabCamera
      tr
        td
          // padding 10px 25px
          padding 10px 10px
          border 1px solid #000
          color #E7EAED
        .classNone
          color gray
        .classWarn
          color yellow
        .classInfo
          color green
      tr:nth-child(odd)
        background-color #131313
      tr:nth-child(even)
        background-color #383838
</style>
