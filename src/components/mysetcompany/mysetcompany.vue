<template>
  <div id="mysetCompany">
    <div class="headerCompany">
      <!-- 只有超级管理员才能增加集团 -->
      <button
        class="btnAddCompany"
        @click="addCompanyBtn"
        v-if="usercurrent.userRole===1"
      >增加集团</button>
      <dlgcompany
        v-if="isDlgCompany"
        @dlgConfirmDlgCompany="confirmDlgCompany"
        @dlgCloseDlgCompany="closeDlgCompany"
      ></dlgcompany>
      <div class="searchCompany">
        <!-- <input type="text" placeholder="输入集团手机号" v-model="companyPhone" /> -->
        <input type="text" placeholder="输入集团名称" v-model="companyName" />
        <button @click="pageHandler(1)">查询</button>
      </div>
    </div>
    <div class="divTabCompany">
      <table class="tabCompany">
        <tr>
          <td>集团名称</td>
          <td>集团简介</td>
          <td>集团管理</td>
          <!-- <td>访问权限</td> -->
          <td>操作集团</td>
        </tr>
        <tr v-for="item in companys.rows" :key="item.company.companyId">
          <td v-if="item.company.companyName">{{item.company.companyName}}</td>
          <td v-else>—</td>
          <td v-if="item.company.companyIntroduce">{{item.company.companyIntroduce}}</td>
          <td v-else>—</td>
          <td v-if="item.company.companyUserId">{{item.user.userName}}</td>
          <td v-else>—</td>
          <!-- <td v-if="item.companyPermission">{{item.companyPermission}}</td> -->
          <!-- <td v-else>—</td> -->
          <td>
            <a href="#" @click.prevent="updateCompany(item.company.companyId)">修改</a>
            <a href="#" @click.prevent="deleteCompany(item.company.companyId)">删除</a>
          </td>
        </tr>
      </table>
      <div class="wrap" id="wrap">
        <zpagenav
          v-bind:page="page"
          v-bind:page-size="5"
          v-bind:total="companys.total"
          v-bind:max-page="companys.total"
          v-on:pagehandler="pageHandler"
        ></zpagenav>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import dlgcompany from "../dlgcompany/dlgcompany.vue";
// import dlgconfirm from "../dlgConfirm/dlgConfirm.vue";
import zpagenav from "../../components/zpageNav/zpageNav.vue";
import { mapState } from "vuex";
import { reqAddCompany, reqDeleteCompanyById, reqUpdateCompany } from "../../api";
export default {
  name: "mysetCompany",
  components: {
    // dlgconfirm,
    dlgcompany,
    zpagenav
  },
  data() {
    return {
      companyName: "",
      isDlgCompany: false,
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
    // this.$store.dispatch("selectAllcompany");
    // this.$store.dispatch("selectCompanyByPage", 1, this.companyName);
  },
  computed: {
    ...mapState(["usercurrent", "user", "company", "companys", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  methods: {
    selectCompanyByIf() { },
    addCompanyBtn() {
      var companyTemp = {
        companyId: "",
        companyName: "",
        companyIntroduce: "",
        companyImg: "",
        companyUserId: ""
      };
      this.$store.dispatch("clearCompanyVal", companyTemp);
      this.isDlgCompany = true;
    },
    async updateCompany(companyId) {
      await this.$store.dispatch("selectCompanyById", companyId);// 等待异步执行完成
      this.isDlgCompany = true;
    },
    deleteCompany(companyId) {
      var a = window.confirm("确认要删除吗？")
      if (a) {
        reqDeleteCompanyById(companyId);
        this.pageHandler(this.page);
        alert("删除成功！")
      } else {
      }
    },
    confirmDlgCompany(company) {
      if (company.companyId !== "") {
        reqUpdateCompany(company); // 修改一个集团
      } else {
        reqAddCompany(company); // 增加一个集团
      }
      this.pageHandler(this.page);
      this.isDlgCompany = false;
    },
    closeDlgCompany() {
      this.isDlgCompany = false;
    },
    //  pagehandler方法 跳转到page页
    pageHandler: function (page) {
      // here you can do custom state update
      this.page = page;
      // this.$store.dispatch("selectCompanyByPage", page, this.companyName);
      this.$store.dispatch("selectCompanyByPage", {
        pageNum: page,
        companyName: this.companyName
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetCompany
  background-color red
  .headerCompany
    background-color red
    display inline
    .btnAddCompany
      position absolute
      top 30px
      left 50px
      width 80px
      height 30px
      border-radius 3px
    .searchCompany
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
  .divTabCompany
    position absolute
    left 50px
    // width 1100px
    margin-top 120px
    // background-color green
    .tabCompany
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
