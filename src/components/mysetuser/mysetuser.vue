<template>
  <!-- <div id="mysetcompany" v-if="this.$route.path=='/mysetcompany'"> -->
  <div id="mysetuser">
    <div class="headeruser">
      <button class="btnAdduser" @click="addUserBtn" v-if="usercurrent.userRole!==4">增加用户</button>
      <dlguser
        v-bind:childusertree="parentusertree"
        v-bind:dlguserCurrent="userCurrent"
        v-if="isDlgUser"
        @dlgConfirmDlgUser="confirmDlgUser"
        @dlgCloseDlgUser="closeDlgUser"
      ></dlguser>
      <div class="searchuser">
        <input type="text" placeholder="输入用户手机号" v-model="userPhone" />
        <input type="text" placeholder="输入用户名称" v-model="userName" />
        <button @click="pageHandler(1)">查询</button>
      </div>
    </div>
    <div class="divTabuser">
      <table class="tabuser">
        <tr>
          <td>用户手机</td>
          <td>用户名称</td>
          <td>用户角色</td>
          <!-- <td>用户头像</td> -->
          <td>用户邮箱</td>
          <td>用户权限</td>
          <td>用户状态</td>
          <!-- <td>父类用户</td> -->
          <td>操作用户</td>
        </tr>
        <tr v-for="item in users.rows" :key="item.id">
          <td>{{item.user.userPhone}}</td>
          <td v-if="item.user.userName">{{item.user.userName}}</td>
          <td v-else>—</td>
          <!-- <td>{{item.userRole}}</td> -->
          <td v-if="item.user.userRole==1">超级用户</td>
          <td v-else-if="item.user.userRole==2">集团用户</td>
          <td v-else-if="item.user.userRole==3">项目用户</td>
          <td v-else-if="item.user.userRole==4">普通用户</td>
          <td v-else>—</td>
          <!-- <td v-if="item.userImg">{{item.userImg}}</td>
          <td v-else>—</td>-->
          <td v-if="item.user.userMail">{{item.user.userMail}}</td>
          <td v-else>—</td>
          <td>
            <span
              v-if="item.permission.permissionZhyd!==null&&item.permission.permissionZhyd===true"
            >智慧用电</span>
            <span
              v-if="item.permission.permissionXfdy!==null&&item.permission.permissionXfdy===true"
            >,消防电源</span>
            <span
              v-if="item.permission.permissionDqhz!==null&&item.permission.permissionDqhz===true"
            >,电气火灾</span>
            <span
              v-if="item.permission.permissionSdy!==null&&item.permission.permissionSdy===true"
            >,双电源</span>
            <span
              v-if="item.permission.permissionZnzm!==null&&item.permission.permissionZnzm===true"
            >,智能照明</span>
            <span
              v-if="item.permission.permissionZndy!==null&&item.permission.permissionZndy===true"
            >,智能电涌</span>
            <span
              v-if="item.permission.permissionZnpd!==null&&item.permission.permissionZnpd===true"
            >,云配电</span>
            <span
              v-if="item.permission.permissionZngqy!==null&&item.permission.permissionZngqy===true"
            >,智能过欠</span>
          </td>
          <!-- <td>{{item.userStatus}}</td> -->
          <td v-if="item.user.userStatus==0" style="color: red">锁定</td>
          <td v-else-if="item.user.userStatus==1" style="color: green">正常</td>
          <td v-else>—</td>
          <!-- <td>{{item.userParentId}}</td> -->
          <td>
            <span v-if="item.user.userId === usercurrent.userId">-</span>
            <a
              href="#"
              v-else
              @click.prevent="updateUser(item.user.userId,item.user.userCompanyId)"
            >修改</a>
            <span v-if="item.user.userId === usercurrent.userId">-</span>
            <a href="#" v-else @click.prevent="deleteUser(item.user.userId)">删除</a>
          </td>
        </tr>
      </table>
      <div class="wrap" id="wrap">
        <zpagenav
          v-bind:page="page"
          v-bind:page-size="5"
          v-bind:total="users.total"
          v-bind:max-page="users.total"
          v-on:pagehandler="pageHandler"
        ></zpagenav>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import dlguser from "../dlguser/dlguser.vue";
import dlgconfirm from "../dlgconfirm/dlgconfirm.vue";
import zpagenav from "../../components/zpageNav/zpageNav.vue";
import { mapState } from "vuex";
import { reqAddUser, reqDeleteUserById, reqUpdateUser } from "../../api";
export default {
  name: "mysetuser",
  components: {
    dlgconfirm,
    dlguser,
    zpagenav
  },
  data() {
    return {
      parentusertree: {},
      userName: "",
      userPhone: "",
      isDlgUser: false,
      page: 1, //  显示的是哪一页
      pageSize: 5, //  每一页显示的数据条数
      total: 0, //  记录总数
      maxPage: 9, // 最大页数
      userCurrent: {
        userId: "",
        userPhone: "",
        userPassword: "",
        userName: "",
        userRole: "",
        userImg: "",
        userMail: "",
        userPermission: "",
        userStatus: ""
      }
    };
  },
  created: function () {
    //  created  表示页面加载完毕，立即执行
    this.pageHandler(1);
    this.$store.dispatch("selectCurrentUser");
  },
  mounted() {
    this.$store.dispatch("selectCurrentUser");
    // console.log("usercurrent:" + this.usercurrent.userRole);
    // this.userCurrent.userRole = this.users.rows[0].userRole;
    // this.$store.dispatch("selectUsersTree");
    // this.$store.dispatch("selectUserByPage", 1, this.userName);
  },
  computed: {
    ...mapState([
      "userstree",
      "usercurrent",
      "userstree",
      "usertree",
      "user",
      "users",
      "lcAcsB128",
      "lcAcs",
      "address",
      "categorys"
    ])
  },
  methods: {
    selectUserByIf() { },
    addUserBtn() {
      var userTemp = {
        user: {
          userId: "",
          userPhone: "",
          userPassword: "",
          userName: "",
          userRole: "",
          userImg: "",
          userMail: "",
          userPermission: "",
          userStatus: "",
          userParentId: ""
        },
        permission: {
          permissionZhyd: false,
          permissionDqhz: false,
          permissionXfdy: false,
          permissionSdy: false,
          permissionZnzm: false,
          permissionZndy: false,
          permissionZnpd: false,
          permissionZngqy: false
        }
      };
      this.$store.dispatch("clearUserVal", userTemp);
      // this.parentusertree = null
      this.isDlgUser = true;
    },
    async updateUser(userId, companyId) {
      // console.log(userId)
      await this.$store.dispatch("selectUserById", userId); // 等待异步执行完成
      // await this.$store.dispatch("selectUserTreeByUserId", userId); // 查询用户树枝
      this.userstree.forEach(item => {
        if (item.company.companyId === companyId) {
          this.parentusertree = item
        }
      });
      this.isDlgUser = true;
    },
    deleteUser(userId) {
      var a = window.confirm("确认要删除吗？")
      if (a) {
        reqDeleteUserById(userId);
        this.pageHandler(this.page);
        alert("删除成功！")
      } else {
      }
    },
    confirmDlgUser(user) {
      if (user.user.userId !== "") {
        reqUpdateUser(user); // 修改一个用户
      } else {
        reqAddUser(user); // 增加一个用户
        this.pageHandler(this.page);
      }
      this.isDlgUser = false;
      this.pageHandler(this.page);
    },
    closeDlgUser() {
      this.isDlgUser = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function (page) {
      // here you can do custom state update
      this.page = page;
      // this.$store.dispatch("selectUserByPage", page, this.userName);
      this.$store.dispatch("selectUserByPage", {
        pageNum: page,
        userPhone: this.userPhone,
        userName: this.userName
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetuser
  background-color red
  .headeruser
    background-color red
    display inline
    .btnAdduser
      position absolute
      top 30px
      left 50px
      width 80px
      height 30px
      border-radius 3px
    .searchuser
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
  .divTabuser
    position absolute
    left 50px
    // width 1100px
    margin-top 120px
    // background-color green
    .tabuser
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
