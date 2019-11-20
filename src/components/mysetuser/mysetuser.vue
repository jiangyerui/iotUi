<template>
  <!-- <div id="mysetcompany" v-if="this.$route.path=='/mysetcompany'"> -->
  <div id="mysetuser">
    <div class="headeruser">
      <button class="btnAdduser" @click="addUserBtn">增加用户</button>
      <dlguser v-if="isDlgUser" @dlgConfirmDlgUser="confirmDlgUser" @dlgCloseDlgUser="closeDlgUser"></dlguser>
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
          <td>用户头像</td>
          <td>用户邮箱</td>
          <td>用户权限</td>
          <td>用户状态</td>
          <!-- <td>父类用户</td> -->
          <td>操作用户</td>
        </tr>
        <tr v-for="item in users.rows" :key="item.id">
          <td>{{item.userPhone}}</td>
          <td v-if="item.userName">{{item.userName}}</td>
          <td v-else>未填写用户名称</td>
          <!-- <td>{{item.userRole}}</td> -->
          <td v-if="item.userRole==0">超级用户</td>
          <td v-else-if="item.userRole==1">集团用户</td>
          <td v-else-if="item.userRole==2">项目用户</td>
          <td v-else-if="item.userRole==3">普通用户</td>
          <td v-else>未知用户角色</td>
          <td v-if="item.userImg">{{item.userImg}}</td>
          <td v-else>未填写用户头像</td>
          <td v-if="item.userMail">{{item.userMail}}</td>
          <td v-else>未填写用户邮箱</td>
          <td>{{item.userPermissionId}}</td>
          <!-- <td>{{item.userStatus}}</td> -->
          <td v-if="item.userStatus==0" style="color: red">锁定</td>
          <td v-else-if="item.userStatus==1" style="color: green">正常</td>
          <td v-else>未知状态</td>
          <!-- <td>{{item.userParentId}}</td> -->
          <td>
            <a href="#" @click.prevent="updateUser(item.userId)">修改</a>
            <a href="#" @click.prevent="deleteUser(item.userId)">删除</a>
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
      userName: "",
      userPhone: "",
      isDlgUser: false,
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
    // this.$store.dispatch("selectAllUser");
    // this.$store.dispatch("selectUserByPage", 1, this.userName);
  },
  computed: {
    ...mapState(["user", "users", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    selectUserByIf() {},
    addUserBtn() {
      var userTemp = {
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
      };
      this.$store.dispatch("clearUserVal", userTemp);
      this.isDlgUser = true;
    },
    async updateUser(userId) {
      // console.log(userId)
      await this.$store.dispatch("selectUserById", userId);// 等待异步执行完成
      this.isDlgUser = true;
    },
    deleteUser(userId) {
      reqDeleteUserById(userId);
      this.pageHandler(this.page);
    },
    confirmDlgUser(user) {
      if (user.userId !== "") {
        reqUpdateUser(user); // 修改一个用户
      } else {
        reqAddUser(user); // 增加一个用户
      }
      this.pageHandler(this.page);
      this.isDlgUser = false;
    },
    closeDlgUser() {
      this.isDlgUser = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function(page) {
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
