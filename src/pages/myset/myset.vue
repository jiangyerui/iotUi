<template>
  <div id="myset">
    <div class="homeTl">
      <h1>北京联创广汇安全用电物联网云</h1>
      <!-- <h1 @click.stop="funHomeTl()">北京联创广汇安全用电物联网云</h1> -->
      <!-- <span :style="{color: homeSpanColor}" @click.stop="funHomeSpan()">{{homeSpanText}}</span> -->
    </div>
    <div class="leftSide">
      <ul>
        <li><router-link to="/myset/mysetcompany">集团管理</router-link></li>
        <li><router-link to="/myset/mysetproject">项目管理</router-link></li>
        <li><router-link to="/myset/mysetdevice">设备管理</router-link></li>
        <li><router-link to="/myset/mysetuser">用户管理</router-link></li>
        <li><router-link to="/myset/mysetcamera">相机管理</router-link></li>
        <li><router-link to="/myset/mysetalarm">报警管理</router-link></li>
        <li><router-link to="/myset/mysetlog">日志管理</router-link></li>
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
import mysetalarm from "../../components/mysetalarm/mysetalarm.vue";
import mysetlog from "../../components/mysetlog/mysetlog.vue";
export default {
  name: "myset",
  data() {
    return {};
  },
  components: {
    mysetcompany,
    mysetcamera,
    mysetdevice,
    mysetuser,
    mysetlog,
    mysetalarm,
    mysetproject
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#myset
  .homeTl
    height: 45px;
    background-color: #131313;
    border: 3px solid #131313;
    border-radius: 10px;
    text-align: center;
    h1
      display: block;
      position: relative;
      top: 10px;
      color: #E7EAED;
      font-size: 25px;
      font-weight: bold;
  .leftSide
    background-color #131313
    width 200px
    height 700px
    border-radius: 10px;
    ul
      padding-top 20px
     li
      vertical-align center
      height 40px
      color #E7EAED
      padding-top 20px
      // margin-top 30px
      // font-size 16px
      text-height 20px
      border-bottom 1px solid #E7EAED
      cursor pointer
    li:hover
      background-color #383838
  .contextMySet
    background-color #383838
    position absolute
    top 50px
    left 200px
    width 1340px
    height 700px
</style>
