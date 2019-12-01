<template>
  <div id="dlguser">
    <div class="container">
      <div class="titleCompany">{{user.userId==''?'增加用户':'编辑用户'}}</div>
      <div class="contextUser">
        <div class="contextUserItem">
          <label>绑定手机:</label>
          <input type="text" placeholder="请输入11位手机号" v-model="user.user.userPhone" />
        </div>
        <div class="contextUserItem">
          <label>用户密码:</label>
          <input type="password" placeholder="请输入0-9或a-z" v-model="user.user.userPassword" />
        </div>
        <div class="contextUserItem">
          <label>确认密码:</label>
          <input type="password" placeholder="请输入0-9或a-z" v-model="userPasswordConfirm" />
        </div>
        <div class="contextUserItem">
          <label>用户名称:</label>
          <input type="text" placeholder="请不超过20个字符" v-model="user.user.userName" />
        </div>
        <div class="contextUserItem">
          <label>用户邮箱:</label>
          <input type="text" placeholder="请输入邮箱格式" v-model="user.user.userMail" />
        </div>
        <!-- <div class="contextUserItem">
          <label>用户权限:</label>
          <input type="text" v-model="user.userPermission" />
        </div>-->
        <div class="contextUserItem">
          <label>用户角色:</label>
          <!-- <input type="text" v-model="user.userRole" /> -->
          <select
            v-if="usercurrent.userRole===1"
            class
            v-model="user.user.userRole"
            @change="getSelectedUserStatus"
          >
            <option
              :value="item.id"
              v-for="item in selectUserRoleListSuper"
              :key="item.id"
            >{{item.name}}</option>
          </select>
          <select
            v-else-if="usercurrent.userRole===2"
            class
            v-model="user.userRole"
            @change="getSelectedUserStatus"
          >
            <option
              :value="item.id"
              v-for="item in selectUserRoleListCompany"
              :key="item.id"
            >{{item.name}}</option>
          </select>
          <select
            v-else-if="usercurrent.userRole===3"
            class
            v-model="user.userRole"
            @change="getSelectedUserStatus"
          >
            <option
              :value="item.id"
              v-for="item in selectUserRoleListProject"
              :key="item.id"
            >{{item.name}}</option>
          </select>
        </div>
        <div class="contextUserItem">
          <label>所属集团:</label>
          <select
            class
            v-model="childusertree"
            @change="companyChange()"
          >
            <option
              :value="item"
              v-for="item in userstree"
              :key="item.id"
            >{{item.company.companyName}}</option>
          </select>
        </div>
        <div class="contextUserItem">
          <label>所属项目:</label>
          <!-- <input type="text" v-model="user.userRole" /> -->
          <select
            class
            v-model="user.user.userProjectId"
            @change="projectChange()"
          >
            <option
              :value="item.project.projectId"
              v-for="item in childusertree.userProjects"
              :key="item.id"
            >{{item.project.projectName}}</option>
          </select>
        </div>
        <div class="contextUserItem">
          <label>用户状态:</label>
          <!-- <input type="text" v-model="user.userStatus" /> -->
          <select class v-model="user.user.userStatus" @change="getSelectedUserStatus">
            <option
              :value="item.id"
              v-for="item in selectUserStatusList"
              :key="item.id"
            >{{item.name}}</option>
          </select>
        </div>
        <div class="permissionDiv">
          <label>访问权限:</label>
          <div class="permission">
            <div class="permissionItem">
              <input v-model="user.permission.permissionZhyd" type="checkbox" />
              <font>智慧用电</font>
            </div>
            <div class="permissionItem">
              <input v-model="user.permission.permissionXfdy" type="checkbox" />
              <font>消防电源</font>
            </div>
            <div class="permissionItem">
              <input v-model="user.permission.permissionDqhz" type="checkbox" />
              <font>电气火灾</font>
            </div>
            <div class="permissionItem">
              <input v-model="user.permission.permissionSdy" type="checkbox" />
              <font>双电源</font>
            </div>
            <div class="permissionItem">
              <input v-model="user.permission.permissionZnzm" type="checkbox" />
              <font>智能照明</font>
            </div>
            <div class="permissionItem">
              <input v-model="user.permission.permissionZndy" type="checkbox" />
              <font>智能电涌</font>
            </div>
            <div class="permissionItem">
              <input v-model="user.permission.permissionZnpd" type="checkbox" />
              <font>智能配电</font>
            </div>
            <div class="permissionItem">
              <input v-model="user.permission.permissionZngqy" value="value" type="checkbox" />
              <font>智能过欠</font>
            </div>
          </div>
          <!-- <input type="text" placeholder="请不超过20个字符" v-model="company.companyPermission" /> -->
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
// import { reqSelectCurrentUser } from "../../api";
export default {
  name: "dlguser",
  props: ["dlguserCurrent","childusertree"],
  data() {
    return {
      userstreeitem: {},
      value: "haha",
      // permission_zhyd: false,
      // permission_dqhz: false,
      // permission_xfdy: true,
      // permission_sdy: false,
      // permission_znzm: false,
      // permission_zndy: false,
      // permission_znpd: false,
      // permission_zngqy: false,
      userPasswordConfirm: "",
      userTemp: {
        userPhone: "",
        userPassword: "",
        userName: "",
        userRole: "",
        userImg: "",
        userMail: "",
        userPermission: "",
        userStatus: ""
      },
      selectUserStatusList: [{ id: 0, name: "锁定" }, { id: 1, name: "正常" }],
      selectUserRoleListSuper: [
        { id: 2, name: "集团用户" },
        { id: 3, name: "项目用户" },
        { id: 4, name: "普通用户" }
      ],
      selectUserRoleListCompany: [
        { id: 3, name: "项目用户" },
        { id: 4, name: "普通用户" }
      ],
      selectUserRoleListProject: [{ id: 4, name: "普通用户" }],
      selectUserRoleListCommon: [],
      selectedUserStatus: ""
    };
  },
  mounted() {
    // reqSelectCurrentUser()
    // 赋值用户树枝
    this.userstreeitem.userProjects = this.usertree
    this.userPasswordConfirm = this.user.user.userPassword
  },
  created() {},
  computed: {
    ...mapState(["userstree","usertree","usercurrent", "user", "users", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    dlgConfirm() {
      if (this.user.user.userPassword !== this.userPasswordConfirm) {
        alert("两次密码输入不一致");
      } else {
        this.$emit("dlgConfirmDlgUser", this.user);
      }
    },
    dlgClose() {
      this.$emit("dlgCloseDlgUser");
    },
    getSelectedUserStatus() {},
    companyChange() {
      this.user.user.userCompanyId = this.childusertree.company.companyId
    },
    projectChange() {
      // this.userstreeitem = this.childusertree
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#dlguser
  position fixed
  top 0px
  bottom 0px
  left 0px
  right 0px
  background-color rgba(0, 0, 0, 0.6)
  z-index 9999
  .container
    position absolute
    width 650px
    height 500px
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-color #131313
    border-radius 8px
    overflow hidden
    color #E7EAED
    .titleCompany
      width 100%
      height 30px
      background-color #383838
      padding-top 10px
    .contextUser
      position absolute
      left 15px
      .contextUserItem
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
          border-radius 3px
      .permissionDiv
        // background-color green
        position absolute
        top 20px
        left 410px
        // vertical-align left
        label
          position absolute
          left 0px
        .permission
          // background-color green
          position relative
          left 0px
          top 20px
          width 250px
          height 240px
          // position relative
          // right 150px
          // vertical-align left
          // float left
          .permissionItem
            width 200px
            margin-top 10px
            vertical-align left
            input
              position absolute
              left 10px
              width 20px
              height 20px
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
