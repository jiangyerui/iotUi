<template>
  <div id="dlgproject">
    <div class="container">
      <div class="titleProject">增加项目</div>
      <div class="contextProject">
        <div class="contextProjectItem">
          <label>项目名称:</label>
          <input type="text" placeholder="请输入11位手机号" v-model="project.projectName" />
        </div>
        <div class="contextProjectItem">
          <label>项目简介:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="project.projectIntroduce" />
        </div>
        <div class="contextProjectItem">
          <label>项目管理:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="projectUserId" />
        </div>
        <div class="contextProjectItem">
          <label>项目地址:</label>
          <!-- <input type="text" placeholder="请不超过20个字符" v-model="project.projectPermission" /> -->
        </div>
        <div class="contextProjectItem">
          <label>详细地址:</label>
          <input type="text" placeholder="请输入11位手机号" v-model="project.projectAddress" />
        </div>
        <div class="contextProjectItem">
          <label>项目图片:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="project.projectImg" />
        </div>
        <div class="contextProjectItem">
          <label>逃生图片:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="projectCad" />
        </div>
        <div class="contextProjectItem">
          <label>开启时间:</label>
          <!-- <input type="text" placeholder="请不超过20个字符" v-model="project.projectStartTime" /> -->
        </div>
        <div class="contextProjectItem">
          <label>运行期限:</label>
          <!-- <input type="password" placeholder="请不要超过20个字符" v-model="projectExpire" /> -->
        </div>
        <div class="contextProjectItem">
          <label>到期提醒:</label>
          <input type="text" placeholder="请不超过20个字符" v-model="project.projectNotify" />
        </div>
        <div class="contextProjectItem">
          <label>权限状态:</label>
          <input type="text" placeholder="请输入11位手机号" v-model="project.projectPermissionStatus" />
        </div>
        <div class="contextProjectItem">
          <label>使用状态:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="project.projectUseStatus" />
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
  name: "dlgproject",
  data() {
    return {
      projectPasswordConfirm: "",
      projectTemp: {
        projectId: "",
        projectName: "",
        projectIntroduce: "",
        projectUserId: "",
        // projectUserId: "",
        projectAddress: "",
        projectImg: "",
        projectCad: "",
        projectStartTime: "",
        projectExpire: "",
        projectNotify: "",
        projectPermissionStatus: "",
        projectUseStatus: ""
      },
      selectProjectStatusList: [{ id: 0, name: "锁定" }, { id: 1, name: "正常" }],
      selectProjectRoleList: [
        { id: 1, name: "项目用户" },
        { id: 2, name: "项目用户" },
        { id: 3, name: "普通用户" }
      ],
      selectedProjectStatus: ""
    };
  },
  mounted() {
    // this.projectPasswordConfirm = this.project.projectPassword;
  },
  created() {},
  computed: {
    ...mapState(["project", "projects", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    dlgConfirm() {
      this.$emit("dlgConfirmDlgProject", this.project);
    },
    dlgClose() {
      this.$emit("dlgCloseDlgProject");
    },
    getSelectedProjectStatus() {}
  }
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
    height 500px
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
