<template>
  <div id="dlgcompany">
    <div class="container">
      <div class="titleCompany">增加集团</div>
      <div class="contextCompany">
        <div class="contextCompanyItem">
          <label>集团名称:</label>
          <input type="text" placeholder="请不要超过20个字符" v-model="company.companyName" />
        </div>
        <div class="contextCompanyItem">
          <label>集团简介:</label>
          <textarea rows="5" cols="20" placeholder="请不要超过255个字符" v-model="company.companyIntroduce"></textarea>
        </div>
        <div class="contextCompanyItem">
          <label>集团管理:</label>
          <!-- <input type="hidden" v-model="company.companyUserId" v-if="usercurrent.userRole===2">{{usercurrent.userName}} -->
          <!-- <input type="text" v-model="user.userStatus" /> -->
          <select class v-model="company.companyUserId">
            <option
              :value="item.company.companyUserId"
              v-for="item in userstree"
              :key="item.id"
            >{{item.company.companyName}}</option>
          </select>
        </div>
        <!-- <div class="contextCompanyItem"> -->
        <!-- <label>访问权限:</label> -->
        <!-- <input type="text" placeholder="请不超过20个字符" v-model="company.companyPermission" /> -->
        <!-- </div> -->
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
  name: "dlgcompany",
  data() {
    return {
      companyPasswordConfirm: "",
      companyTemp: {
        companyId: "",
        companyName: "",
        companyIntroduce: "",
        companyImg: "",
        companyUserId: ""
      },
      selectCompanyStatusList: [
        { id: 0, name: "锁定" },
        { id: 1, name: "正常" }
      ],
      selectCompanyRoleList: [
        { id: 1, name: "集团用户" },
        { id: 2, name: "项目用户" },
        { id: 3, name: "普通用户" }
      ],
      selectedCompanyStatus: ""
    };
  },
  mounted() {
    this.companyPasswordConfirm = this.company.companyPassword;
  },
  created() {
    // this.$store.dispatch("selectCompanyUsers");
  },
  computed: {
    ...mapState([
      "userstree",
      "usercurrent",
      "usercompanys",
      "company",
      "companys",
      "lcAcsB128",
      "lcAcs",
      "address",
      "categorys"
    ])
  },
  methods: {
    dlgConfirm() {
      if (this.company.companyPassword !== this.companyPasswordConfirm) {
        alert("两次密码输入不一致");
      } else {
        this.$emit("dlgConfirmDlgCompany", this.company);
      }
    },
    dlgClose() {
      this.$emit("dlgCloseDlgCompany");
    },
    getSelectedCompanyStatus() {}
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#dlgcompany
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
    .contextCompany
      position absolute
      left 15px
      .contextCompanyItem
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
        textarea
          // position absolute
          // left 50px
          width 220px
          // height 25px
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
