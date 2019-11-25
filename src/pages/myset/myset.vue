<template>
  <div id="myset">
    <div class="iotTitle">
      <h1 class="iotTitleH1">北京联创广汇安全用电物联网云</h1>
    </div>
    <div class="mysetside">
      <ul class="mysetsideUl">
        <li :class="this.$route.path=='/myset/mysetuser'?'classActive':''" class="mysetsideLi">
          <router-link id="mysetsideA" to="/myset/mysetuser">用户管理</router-link>
        </li>
        <li :class="this.$route.path=='/myset/mysetcompany'?'classActive':''" class="mysetsideLi">
          <router-link id="mysetsideA" to="/myset/mysetcompany">集团管理</router-link>
        </li>
        <li :class="this.$route.path=='/myset/mysetproject'?'classActive':''" class="mysetsideLi">
          <router-link id="mysetsideA" to="/myset/mysetproject">项目管理</router-link>
        </li>
        <li :class="this.$route.path=='/myset/mysetdevice'?'classActive':''" class="mysetsideLi">
          <router-link id="mysetsideA" to="/myset/mysetdevice">设备管理</router-link>
        </li>
        <li :class="this.$route.path=='/myset/mysetcamera'?'classActive':''" class="mysetsideLi">
          <router-link id="mysetsideA" to="/myset/mysetcamera">相机管理</router-link>
        </li>
        <li :class="this.$route.path=='/myset/mysetalarmlog'?'classActive':''" class="mysetsideLi">
          <router-link id="mysetsideA" to="/myset/mysetalarmlog">报警管理</router-link>
        </li>
        <li
          :class="this.$route.path=='/myset/mysetoperationlog'?'classActive':''"
          class="mysetsideLi"
        >
          <router-link id="mysetsideA" to="/myset/mysetoperationlog">日志管理</router-link>
        </li>
      </ul>
    </div>
    <div class="contextMySet">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import mysetcompany from "../../components/mysetcompany/mysetcompany.vue";
import mysetcamera from "../../components/mysetcamera/mysetcamera.vue";
import mysetdevice from "../../components/mysetdevice/mysetdevice.vue";
import mysetuser from "../../components/mysetuser/mysetuser.vue";
import mysetproject from "../../components/mysetproject/mysetproject.vue";
import mysetalarmlog from "../../components/mysetalarmlog/mysetalarmlog.vue";
import mysetoperationlog from "../../components/mysetoperationlog/mysetoperationlog.vue";
export default {
  name: "myset",
  data() {
    return {
      classActve: "classActive"
    };
  },
  components: {
    mysetcompany,
    mysetcamera,
    mysetdevice,
    mysetuser,
    mysetoperationlog,
    mysetalarmlog,
    mysetproject
  },
  mounted() {}
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#myset
  .iotTitle
    // height: 45px;
    background-color #131313
    border 3px solid #131313
    // border-radius 10px
    text-align center
    .iotTitleH1
      // display: block;
      // position: relative;
      // top: 10px;
      // height: 45px
      color #E7EAED
      // font-size: 25px;
      // text-height 45px
      // font-weight: bold;
  .mysetside
    background-color #131313
    width 200px
    height 700px
    // border-radius 10px
    .mysetsideUl
      padding-top 50px
    .classActive
      background-color #383838
    .mysetsideLi
      // vertical-align center
      // height 40px
      color #E7EAED
      padding 20px 20px
      // padding-top 20px
      // margin-top 30px
      // font-size 16px
      // text-height 20 px
      border-bottom 1px solid #383838
      cursor pointer
      // background-color yellow
      #mysetsideA
        // display block
        // background-color green
        // vertical-align center
        color #E7EAED
        font-size 16px
        // text-height 30px
        // margin-bottom 50px
        // padding-bottom 30px
    .mysetsideLi:hover
      background-color #383838
  .contextMySet
    background-color #383838
    position absolute
    top 45px
    left 200px
    width 1340px
    height 700px
</style>
