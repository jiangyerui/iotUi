<template>
  <div id="dlgproject">
    <div class="container">
      <div class="titleProject">{{project.projectId==''?'增加项目':'编辑项目'}}</div>
      <div class="contextProject">
        <div class="contextProjectItem">
          <label>项目名称:</label>
          <input type="text" placeholder="请输入项目名称" v-model="project.projectName" />
        </div>
        <div class="contextProjectItem">
          <label>项目简介:</label>
          <input type="text" placeholder="请不要超过20个字符" v-model="project.projectIntroduce" />
        </div>
        <div class="contextProjectItem">
          <label>所属集团:</label>
          <!-- <input type="text" placeholder="请选择项目管理员" v-model="project.projectUserId" /> -->
          <select class v-model="childusertree" @change="changeCompany()">
            <option
              :value="item"
              v-for="item in userstree"
              :key="item.id"
            >{{item.company.companyName}}</option>
          </select>
        </div>
        <div class="contextProjectItem">
          <label>项目管理:</label>
          <!-- <input type="text" placeholder="请选择项目管理员" v-model="project.projectUserId" /> -->
          <select class v-model="project.projectUserId" @change="changeProject()">
            <option
              :value="item.userProject.userId"
              v-for="item in childusertree.userProjects"
              :key="item.id"
            >{{item.userProject.userName}}</option>
          </select>
        </div>
        <div class="contextProjectItem">
          <label>项目地址:</label>
          <Cascader :data="data" v-model="value1"></Cascader>
          <!-- <input type="text" placeholder="请不超过20个字符" v-model="project.projectPermission" /> -->
        </div>
        <div class="contextProjectItem">
          <label>详细地址:</label>
          <input type="text" placeholder="请输入详细地址" v-model="project.projectAddress" />
        </div>
        <div class="contextProjectItem" v-if="usercurrent.userRole===1">
          <label>项目图片:</label>
          <input type="hidden" placeholder="选择项目图片" v-model="project.projectImg" />
          <input type="file" value id="file" @change="onUpload" />
          <img :src='project.projectImg' alt="" >
        </div>
        <div class="contextProjectItem" v-if="usercurrent.userRole===1">
          <label>3D-url:</label>
          <input type="text" placeholder="请输入3D图像url" v-model="project.project3durl" />
        </div>
        <!-- <div class="contextProjectItem">
          <label>项目图片:</label>
          <input type="password" placeholder="请选择项目图片" v-model="project.projectImg" />
        </div>
        <div class="contextProjectItem">
          <label>逃生图片:</label>
          <input type="password" placeholder="请择选逃生图片" v-model="project.projectCad" />
        </div>-->
        <div class="contextProjectItem">
          <label>开启时间:</label>
          <input type="text" id="startTime" placeholder="点击选择日期" />
          <img src="./date.png" class="date-input-icon1" alt />
        </div>
        <div class="contextProjectItem">
          <label>运行期限:</label>
          <input type="text" id="expireTime" />
          <img src="./date.png" class="date-input-icon2" alt />
        </div>
        <div class="contextProjectItem">
          <label>到期提醒:</label>
          <input type="text" placeholder="请输入提前几天提醒" v-model="project.projectNotify" />
        </div>
        <div class="contextProjectItem">
          <label>使用状态:</label>
          <select class v-model="project.projectUseStatus" @change="getSelectedProjectUseStatus">
            <option
              :value="item.id"
              v-for="item in selectProjectUseStatusList"
              :key="item.id"
            >{{item.name}}</option>
          </select>
          <!-- <input type="password" placeholder="请不要超过20个字符" v-model="project.projectUseStatus" /> -->
        </div>
        <div class="contextProjectItem" v-if="usercurrent.userRole===1||usercurrent.userRole===2">
          <label>权限状态:</label>
          <select
            class
            v-model="project.projectPermissionStatus"
            @change="getSelectedProjectUseStatus"
          >
            <option
              :value="item.id"
              v-for="item in selectProjectPermissionStatusList"
              :key="item.id"
            >{{item.name}}</option>
          </select>
          <!-- <input type="password" placeholder="请不要超过20个字符" v-model="project.projectUseStatus" /> -->
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
import { formatDate } from "@/common/commonUtil.js";
import { mapState } from "vuex";
import axios from "axios";
import { Cascader } from "view-design";
// import axios from 'axios'
export default {
  name: "dlgproject",
  components: {
    Cascader
  },
  props: ["childusertree"],
  data() {
    return {
      startTime: "",
      userProjects: {},
      selectProjectPermissionStatusList: [
        { id: 1, name: "上锁" },
        { id: 2, name: "正常" },
        { id: 3, name: "提醒" },
        { id: 4, name: "到期" }
      ],
      selectProjectUseStatusList: [
        { id: 1, name: "试用" },
        { id: 2, name: "运行" },
        { id: 3, name: "停用" }
      ],
      // 获取全局的laydate，带入到组件中
      laydate: window.laydate,
      projectPasswordConfirm: "",
      projectTemp: {
        projectId: "",
        projectName: "",
        projectIntroduce: "",
        projectUserId: "",
        //  projectUserId: "",
        projectAddress: "",
        projectImg: "",
        projectCad: "",
        projectStartTime: "",
        projectExpire: "",
        projectNotify: "",
        projectPermissionStatus: "",
        projectUseStatus: ""
      },
      selectProjectStatusList: [
        { id: 0, name: "锁定" },
        { id: 1, name: "正常" }
      ],
      selectProjectRoleList: [
        { id: 1, name: "项目用户" },
        { id: 2, name: "项目用户" },
        { id: 3, name: "普通用户" }
      ],
      selectedProjectStatus: "",
      value1: [],
      data: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫"
            },
            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.userProjects = this.userprojects;
    this.laydate.render({
      elem: "#startTime",
      type: "datetime",
      format: "yyyy-MM-dd",
      eventElem: ".date-input-icon1",
      trigger: "click",
      // showBottom: false,
      change: function (value) {
        // console.log('dididididididi')
        // this.startTime = value
      },
      value: formatDate(
        this.project.projectId === ""
          ? new Date()
          : new Date(this.project.projectStartTime),
        "yyyy-MM-dd hh:mm:ss"
      ),
      done: value => {
        this.project.projectStartTime = value;
      }
    });
    this.laydate.render({
      elem: "#expireTime",
      type: "datetime",
      format: "yyyy-MM-dd",
      eventElem: ".date-input-icon2",
      trigger: "click",
      value: formatDate(
        this.project.projectId === ""
          ? new Date()
          : new Date(this.project.projectExpireTime),
        "yyyy-MM-dd hh:mm:ss"
      ),
      done: value => {
        this.project.projectExpireTime = value;
      }
    });
    // 回显初值
    this.value1 = [
      this.project.projectProvince,
      this.project.projectCity,
      this.project.projectCounty
    ];
    axios({
      method: "get",
      url: "static/city_code.json"
    }).then(response => {
      this.data = response.data;
    });
  },
  created() { },
  computed: {
    ...mapState([
      "userstree",
      "usercurrent",
      "userprojects",
      "usercompanys",
      "project",
      "projects",
      "lcAcsB128",
      "lcAcs",
      "address",
      "categorys"
    ])
  },
  watch: {
    value1: function (newVal, oldVal) {
      // 获取城市编码
      this.project.projectProvince = newVal[0];
      this.project.projectCity = newVal[1];
      this.project.projectCounty = newVal[2];
    }
  },
  methods: {
    uploadImg: function (url, data) {
      // return $.ajax({
      //   url: url,
      //   data: data,
      //   dataType: "json",
      //   method: "post",
      //   contentType: false,
      //   cache: false,
      //   processData: false
      // });
      this.axios({
        method: "post",
        url: url,
        // data: JSON.stringify(data),
        data: data,
        // data: data,
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(response => {
          console.log(response.data.message);
          this.project.projectImg = response.data.message
        })
        .catch(error => {
          console.log(error);
        });
    },
    upload: function (file2) {
      // var url = root + "/upload/img?";//后台接口
      var url = "http://localhost:8089/platform/upload/uploadimg";// 后台接口
      var data = new FormData();
      data.append("file", file2);
      // data.append("pathType", 4)
      return this.uploadImg(url, data);
    },
    onUpload: function (e) {
      var file2 = e.target.files[0];
      this.upload(file2)
      // .done(function (res) { // 封装的请求接口api.js文件
      //   if (res.result.code === 0) {
      //     console.log(res);
      //   }
      // });
    },
    dlgConfirm() {
      this.$emit("dlgConfirmDlgProject", this.project);
    },
    dlgClose() {
      this.$emit("dlgCloseDlgProject");
    },
    getSelectedProjectUseStatus() {
      this.userProjects = this.userprojects;
    },
    async changeCompany() {
      // this.userProjects = this.userprojects
      // console.log("hahahahah")
      // await this.$store.dispatch("clearUseProjectVal", this.userProjects); // 等待异步执行完成
    },
    changeProject() {
      // console.log("hahahahah");
      // this.userprojects = this.userProjects
      // this.userProjects = this.userprojects;
    }
  },
  filters: {}
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#dlgproject
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
    height 700px
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-color #131313
    border-radius 8px
    overflow hidden
    color #E7EAED
    .titleProject
      width 100%
      height 30px
      background-color #383838
      padding-top 10px
    .contextProject
      position absolute
      left 15px
      .contextProjectItem
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
        img
          width 20px
          // position absolute
          // width 50px
          // left 100px
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
