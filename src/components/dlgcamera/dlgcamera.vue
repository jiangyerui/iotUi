<template>
  <div id="dlguser">
    <div class="container">
      <div class="titleCompany">增加用户</div>
      <div class="contextUser">
        <div class="contextUserItem">
          <label>绑定手机:</label>
          <input type="text" placeholder="请输入11位手机号" v-model="user.userPhone" />
        </div>
        <div class="contextUserItem">
          <label>用户密码:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="user.userPassword" />
        </div>
        <div class="contextUserItem">
          <label>确认密码:</label>
          <input type="password" placeholder="请不要超过20个字符" v-model="userPasswordConfirm" />
        </div>
        <div class="contextUserItem">
          <label>用户名称:</label>
          <input type="text" placeholder="请不超过20个字符" v-model="user.userName" />
        </div>
        <div class="contextUserItem">
          <label>用户邮箱:</label>
          <input type="text" placeholder="请输入邮箱格式" v-model="user.userMail" />
        </div>
        <!-- <div class="contextUserItem">
          <label>用户权限:</label>
          <input type="text" v-model="user.userPermission" />
        </div> -->
        <div class="contextUserItem">
          <label>用户角色:</label>
          <!-- <input type="text" v-model="user.userRole" /> -->
          <select class="contextUserItem" v-model="user.userRole" @change="getSelectedUserStatus">
            <option :value="item.id" v-for="item in selectUserRoleList" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="contextUserItem">
          <label>用户状态:</label>
          <!-- <input type="text" v-model="user.userStatus" /> -->
          <select class="contextUserItem" v-model="user.userStatus" @change="getSelectedUserStatus">
            <option
              :value="item.id"
              v-for="item in selectUserStatusList"
              :key="item.id"
            >{{item.name}}</option>
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
  name: "dlguser",
  data() {
    return {
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
      selectUserRoleList: [
        { id: 1, name: "集团用户" },
        { id: 2, name: "项目用户" },
        { id: 3, name: "普通用户" }
      ],
      selectedUserStatus: ""
    };
  },
  mounted() {
    this.userPasswordConfirm = this.user.userPassword;
  },
  created() {},
  computed: {
    ...mapState(["user", "users", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    dlgConfirm() {
      if (this.user.userPassword !== this.userPasswordConfirm) {
        alert("两次密码输入不一致");
      } else {
        this.$emit("dlgConfirmDlgUser", this.user);
      }
    },
    dlgClose() {
      this.$emit("dlgCloseDlgUser");
    },
    getSelectedUserStatus() {}
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
    width 500px
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
