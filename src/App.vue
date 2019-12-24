<template>
  <div id="app">
    <router-view />
    <div class="context" v-if="this.$route.path=='/'">
      <div class="logo">
        <img src="./common/img/logo.jpg" />
        <span>雪鹰云</span>
      </div>
      <!-- <span style="color: white">{{lcAcsB128.mac}}</span> -->
      <!-- <div class="input">
        <label>用户名：</label>
        <input type="text" name="username" />
        <label>密码：</label>
        <input type="password" name="password" />
        <button type="button" class @click="login()">登陆</button>
      </div>-->
      <div class="input">
        <!-- <form action="http://localhost:8080/login" method="post"> -->
        <!-- <form action="login" method="post"> -->
        <label>用户名：</label>
        <input type="text" name="username" v-focus v-model="loginForm.username" />
        <label>密码：</label>
        <input
          type="password"
          name="password"
          v-model="loginForm.password"
          @keyup.enter="submitClick"
        />
        <button type @click="submitClick">登陆</button>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import { postRequest } from './api/ajaxPost'
export default {
  name: "App",
  created() { },
  mounted() {
    this.$store.dispatch("selectCurrentUser");
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus();
      }
    }
  },
  data() {
    return {
      arg: "",
      lcAcsB128: {},
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      // this.$router.replace("/login");
      // this.$router.push({path: 'devsys'})
      // this.$store.dispatch('getLcAcsB128')
      // console.log('jj:'+lcAcsB128.mac)
    },

    submitClick: function() {
      var _this = this;
      this.loading = true;
      postRequest("/login", {
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then(resp => {
        _this.loading = false;
        if (resp && resp.status === 200) {
          // var data = resp.data;
          // _this.$store.commit("login", data.obj);
          var path = _this.$route.query.redirect;
          _this.$router.replace({
            path: path === "/" || path === undefined ? "/devsys" : path
          });
        }
      });
    }
    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/login",
    //   data: {
    //     username: this.loginForm.username,
    //     password: this.loginForm.password
    //   },
    //   // data: data,
    //   headers: {
    //     // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    //     "Content-Type": "application/json;charset=UTF-8"
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    //   var result = ajaxPost(
    //     "http://localhost:8080/login",
    //     {
    //       username: this.loginForm.username,
    //       password: this.loginForm.password
    //     }
    //   )
    //   console.log("result:"+result)
    // }
  },
  computed: {
    // ...mapState(['lcAcsB128', 'address', 'categorys', 'userInfo']),
    /*
      根据categorys一维数组生成一个2维数组
      小数组中的元素个数最大是8
       */
    categorysArr() {
      const { categorys } = this;
      // 准备空的2维数组
      const arr = [];
      // 准备一个小数组(最大长度为8)
      let minArr = [];
      // 遍历categorys
      categorys.forEach(c => {
        // 如果当前小数组已经满了, 创建一个新的
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果minArr是空的, 将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到小数组中
        minArr.push(c);
      });

      return arr;
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  text-align center
  .context
    position absolute
    background-color #131313
    height 900px
    width 100%
    .logo
      position absolute
      top 10px
      left 10px
      img
        height 35px
        vertical-align middle // 居中对齐
      span
        font-size 25px
        color #F2F2F2
        border-left 3px solid #F2F2F2
        padding-left 15px
        margin-left 15px
        vertical-align middle // 居中对齐
    .input
      margin-top 320px
      label
        margin-left 20px
        color #F2F2F2
        font-size 18px
      input
        height 28px
        border-radius 10pxs
      button
        background-color #E7EAED
        width 60px
        height 28px
        margin-left 15px
</style>
