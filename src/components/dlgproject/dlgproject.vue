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
          <label>项目管理:</label>
          <input type="text" placeholder="请选择项目管理员" v-model="project.projectUserId" />
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
          <input type="text" id="startTime" />
        </div>
        <div class="contextProjectItem">
          <label>运行期限:</label>
          <input type="text" id="expireTime" />
        </div>
        <div class="contextProjectItem">
          <label>到期提醒:</label>
          <input type="text" placeholder="请输入提前几天提醒" v-model="project.projectNotify" />
        </div>
        <div class="contextProjectItem">
          <label>使用状态:</label>
          <select class="contextProjectItem" v-model="project.projectUseStatus" @change="getSelectedProjectUseStatus">
            <option :value="item.id" v-for="item in selectProjectUseStatusList" :key="item.id">{{item.name}}</option>
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
export default {
  name: "dlgproject",
  components: {
    Cascader
  },
  data() {
    return {
      selectProjectUseStatusList: [
        { id: 0, name: "试用" },
        { id: 1, name: "运行" },
        { id: 2, name: "停用" }
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
    this.laydate.render({
      elem: "#startTime",
      type: "datetime",
      format: "yyyy-MM-dd",
      value: formatDate(
        this.project.projectId===''?new Date():new Date(this.project.projectStartTime),
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
      value: formatDate(
        this.project.projectId===''?new Date():new Date(this.project.projectExprieTime),
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
  created() {},
  computed: {
    ...mapState([
      "project",
      "projects",
      "lcAcsB128",
      "lcAcs",
      "address",
      "categorys"
    ])
  },
  watch: {
    value1: function(newVal, oldVal) {
      // 获取城市编码
      this.project.projectProvince = newVal[0];
      this.project.projectCity = newVal[1];
      this.project.projectCounty = newVal[2];
    }
  },
  methods: {
    dlgConfirm() {
      this.$emit("dlgConfirmDlgProject", this.project);
    },
    dlgClose() {
      this.$emit("dlgCloseDlgProject");
    },
    getSelectedProjectUseStatus() {}
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
    height 600px
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
