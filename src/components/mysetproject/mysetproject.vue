<template>
  <div id="mysetProject">
    <div class="headerProject">
      <button class="btnAddProject" v-if="usercurrent.userRole!==4" @click="addProjectBtn">增加项目</button>
      <dlgproject
        v-bind:childusertree="parentusertree"
        v-if="isDlgProject"
        @dlgConfirmDlgProject="confirmDlgProject"
        @dlgCloseDlgProject="closeDlgProject"
      ></dlgproject>
      <div class="searchProject">
        <input type="text" placeholder="输入项目名称" v-model="projectName" />
        <button @click="pageHandler(1)">查询</button>
      </div>
    </div>
    <div class="divTabProject">
      <table class="tabProject">
        <tr>
          <td>项目名称</td>
          <td>项目简介</td>
          <td>项目管理</td>
          <!-- <td>项目地址</td> -->
          <td>详细地址</td>
          <!-- <td>项目图片</td> -->
          <!-- <td>逃生图片</td> -->
          <td>开启时间</td>
          <!-- <td>运行期限</td> -->
          <td>到期提醒</td>
          <td>权限状态</td>
          <td>使用状态</td>
          <td>操作项目</td>
        </tr>
        <tr v-for="item in projects.rows" :key="item.id">
          <td v-if="item.project.projectName">{{item.project.projectName}}</td>
          <td v-else>—</td>
          <td v-if="item.project.projectIntroduce">{{item.project.projectIntroduce}}</td>
          <td v-else>—</td>
          <td v-if="item.user.userName">{{item.user.userName}}</td>
          <td v-else>—</td>
          <!-- <td v-if="item.projectPermission">{{item.projectPermission}}</td>
          <td v-else>未填写项目地址</td>-->
          <td v-if="item.project.projectAddress">{{item.project.projectAddress}}</td>
          <td v-else>—</td>
          <!-- <td v-if="item.projectImg">{{item.projectImg}}</td>
          <td v-else>未填写项目图片</td>
          <td v-if="item.projectCad">{{item.projectCad}}</td>
          <td v-else>未填写逃生图片</td>-->
          <td
            v-if="item.project.projectStartTime"
          >{{item.project.projectStartTime | dateFormat('yyyy-mm-DD')}}</td>
          <td v-else>—</td>
          <!--<td v-if="item.projectExpire">{{item.projectExpire}}</td>
          <td v-else>未填写运行期限</td>-->
          <td v-if="item.project.projectNotify">{{item.project.projectNotify}}</td>
          <td v-else>—</td>
          <td
            :class="projectPermissionStatusList[item.project.projectPermissionStatus].class"
            v-if="item.project.projectPermissionStatus"
          >{{projectPermissionStatusList[item.project.projectPermissionStatus].name}}</td>
          <td v-else>—</td>
          <td
            :class="projectUseStatusList[item.project.projectUseStatus].class"
            v-if="item.project.projectUseStatus"
          >{{projectUseStatusList[item.project.projectUseStatus].name}}</td>
          <td v-else>—</td>
          <td>
            <a
              href="#"
              @click.prevent="updateProject(item.project.projectId,item.project.projectCompanyId)"
            >修改</a>
            <a href="#" @click.prevent="deleteProject(item.project.projectId)">删除</a>
          </td>
        </tr>
      </table>
      <div class="wrap" id="wrap">
        <zpagenav
          v-bind:page="page"
          v-bind:page-size="5"
          v-bind:total="projects.total"
          v-bind:max-page="projects.total"
          v-on:pagehandler="pageHandler"
        ></zpagenav>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import dlgproject from "../dlgproject/dlgproject.vue";
import zpagenav from "../../components/zpageNav/zpageNav.vue";
import { mapState } from "vuex";
import {
  reqAddProject,
  reqDeleteProjectById,
  reqUpdateProject
} from "../../api";
export default {
  name: "mysetProject",
  components: {
    dlgproject,
    zpagenav
  },
  data() {
    return {
      parentusertree: {},
      classError: "",
      classWarn: "",
      classInfo: "",
      projectPermissionStatusList: [
        { class: "", name: "" },
        { class: "classError", name: "上锁" },
        { class: "classInfo", name: "正常" },
        { class: "classWarn", name: "提醒" },
        { class: "classError", name: "到期" }
      ],
      projectUseStatusList: [
        { class: "", name: "" },
        { class: "classError", name: "试用" },
        { class: "classInfo", name: "运行" },
        { class: "classWarn", name: "停用" }
      ],
      projectName: "",
      isDlgProject: false,
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
    this.$store.dispatch("selectProjectById", 1); // 初始化vuex中的project
    // this.$store.dispatch("selectCompanyUsers"); // 查用户组
    // this.$store.dispatch("selectUsersTree");
  },
  computed: {
    ...mapState([
      "userstree",
      "usercurrent",
      "project",
      "projects",
      "lcAcsB128",
      "lcAcs",
      "address",
      "categorys"
    ])
  },
  watch: {},
  methods: {
    selectProjectByIf() { },
    addProjectBtn() {
      var projectTemp = {
        projectId: "",
        projectName: "",
        projectIntroduce: "",
        projectImg: "",
        projectUserId: "",
        projectStartTime: "",
        projectExpireTime: ""
      };
      this.$store.dispatch("clearProjectVal", projectTemp);
      // this.parentusertree = "";
      this.isDlgProject = true;
    },
    async updateProject(projectId, projectCompanyId) {
      await this.$store.dispatch("selectProjectById", projectId); // 等待异步执行完成
      // await this.$store.dispatch("selectUserProjectByProjectId", projectId); // 等待异步执行完成
      this.userstree.forEach(item => {
        if (item.company.companyId === projectCompanyId) {
          this.parentusertree = item
        }
      });
      this.isDlgProject = true;
    },
    deleteProject(projectId) {
      var a = window.confirm("确认要删除吗？")
      if (a) {
        reqDeleteProjectById(projectId);
        this.pageHandler(this.page);
        alert("删除成功！")
      } else {
      }
    },
    confirmDlgProject(project) {
      if (project.projectId !== "") {
        reqUpdateProject(project); // 修改一个项目
      } else {
        reqAddProject(project); // 增加一个项目
      }
      this.$store.dispatch("selectDeviceTreeByCurrentUser");// 有增加或更新了，就得重新放一次招
      this.pageHandler(this.page);
      this.isDlgProject = false;
    },
    closeDlgProject() {
      this.isDlgProject = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function (page) {
      this.page = page;
      this.$store.dispatch("selectProjectByPage", {
        pageNum: page,
        projectName: this.projectName
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetProject
  background-color red
  .headerProject
    background-color red
    display inline
    .btnAddProject
      position absolute
      top 30px
      left 50px
      width 80px
      height 30px
      border-radius 3px
    .searchProject
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
  .divTabProject
    position absolute
    left 50px
    // width 1100px
    margin-top 120px
    // background-color green
    .tabProject
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
