<template>
  <div id="home" v-if="this.$route.path=='/home'">
    <div class="homeTl">
      <h1 @click.stop="funHomeTl()">北京联创广汇安全用电物联网云</h1>
      <span :style="{color: homeSpanColor}" @click.stop="funHomeSpan()">{{homeSpanText}}</span>
    </div>
    <mymap class="mymap" v-show="isMyMap" ref="myrefmap"></mymap>
    <!-- <mqttws class="mqttws"></mqttws> -->
    <!-- <viewtest class="viewtest"></viewtest> -->
    <devstatus
      class="devStatus"
      :class="[classDevStatus]"
      @click.native="funIsDevStatus()"
      v-show="isDevStatus"
    >设备状态</devstatus>
    <devcount
      class="devCount"
      :class="[classDevCount]"
      @click.native="funIsDevCount()"
      v-show="isDevCount"
    >设备统计</devcount>
    <monthcount
      class="monthCount"
      :class="[classMonthCount]"
      @click.native="funMonthCount()"
      v-show="isMonthCount"
    >本月统计</monthcount>
    <powerstatus
      class="powerStatus"
      :class="[classPowerStatus]"
      @click.native="funPowerStatus()"
      v-show="isPowerStatus"
    >用电量</powerstatus>
    <nowalarm
      ref="myNowAlarm"
      class="nowAlarm"
      :class="[classNowAlarm]"
      @click.native="funIsNowAlarm()"
      v-show="isNowAlarm"
    >当前报警</nowalarm>
    <!-- <devitem class="devItem" :class="[classDevItem]" :style="{left: devItemLeft+'px'}" @click.native='funIsDevItem()' v-show="isDevItem">设备列表</devitem> -->
    <devitem
      class="devItem"
      :class="[classDevItem]"
      :style="{left: devItemLeft+'px'}"
      v-on:func="funIsDevItem"
      v-on:emithome="updatemapofhome"
      v-show="isDevItem"
    >设备列表</devitem>
    <devdata
      class="devData"
      :class="[classDevData]"
      :style="{left: devDataLeft+'px'}"
      @click.native="funIsDevData()"
      v-show="isDevData"
    >单设备数据</devdata>
    <yuntu
      class="yunTu"
      :class="[classYuntu]"
      :style="{left: yunTuLeft+'px'}"
      @click.native="funIsYuntu()"
      v-show="isYunTu"
    >云图</yuntu>
    <projectimg
      class="projectImg"
      :class="[classProjectimg]"
      @click.native="funIsProjectImg()"
      v-show="isProjectImg"
    >项目图片</projectimg>
    <projectcad
      class="projectCad"
      :class="[classProjectCad]"
      @click.native="funIsProjectCad()"
      v-show="isProjectCad"
    >逃生图</projectcad>
    <projectcad2
      class="projectCad2"
      :class="[classProjectCad2]"
      @click.native="funIsProjectCad2()"
      v-show="isProjectCad2"
    >逃生图2</projectcad2>
    <projectmp4
      class="projectMp4"
      :class="[classProjectMp4]"
      @click.native="funIsProjectMp4()"
      v-show="isProjectMp4"
    >视频监控</projectmp4>
    <alarmanalysis
      class="alarmanalysis"
      :class="[classAlarmanalysis]"
      @click.native="funIsAlarmanalysis()"
      v-show="isAlarmanalysis"
    >视频监控</alarmanalysis>
  </div>
</template>

<script type='text/ecmascript-6'>
import mymap from "../../components/mymap/mymap.vue";
// import viewtest from "../../components/viewtest/viewtest.vue";
import mqttws from "../../components/mqttws/mqttws.vue";
import devstatus from "../../components/devstatus/devstatus.vue";
import devcount from "../../components/devcount/devcount.vue";
import monthcount from "../../components/monthcount/monthcount.vue";
import powerstatus from "../../components/powerstatus/powerstatus.vue";
import nowalarm from "../../components/nowalarm/nowalarm.vue";
import devitem from "../../components/devitem/devitem.vue";
import devdata from "../../components/devdata/devdata.vue";
import yuntu from "../../components/yuntu/yuntu.vue";
import projectimg from "../../components/projectimg/projectimg.vue";
import projectcad from "../../components/projectcad/projectcad.vue";
import projectcad2 from "../../components/projectcad2/projectcad2.vue";
import projectmp4 from "../../components/projectmp4/projectmp4.vue";
import alarmanalysis from "../../components/alarmanalysis/alarmanalysis.vue";
import { mapState } from "vuex";
export default {
  name: "home",
  mounted() {
    // console.log('home:'+this.$route.path)
    // var hao = new SpeechSynthesisUtterance('Hi, I\'m jigsaw!')
    // speechSynthesis.speak(hao)

    // var hao = new SpeechSynthesisUtterance(this.$refs.myNowAlarm.alarmToString);
    // speechSynthesis.speak(hao);
    // console.log(this.$refs.myNowAlarm.alarmToString)
    this.$store.dispatch("selectDeviceProjectsByCurrentUser");
    this.$store.dispatch("selectAlarmLogByCurrentUser");
  },
  computed: {
    ...mapState(["usercurrent", "address", "indexdevpros", "categorys"])
  },
  components: {
    mymap,
    mqttws,
    // viewtest,
    devstatus,
    devcount,
    monthcount,
    nowalarm,
    powerstatus,
    devitem,
    devdata,
    yuntu,
    projectimg,
    projectcad,
    projectcad2,
    projectmp4,
    alarmanalysis
  },
  props: {
    // isWel: false
  },
  data() {
    return {
      classDevStatus: "",
      classDevCount: "",
      classMonthCount: "",
      classPowerStatus: "",
      classNowAlarm: "",
      classDevItem: "",
      classDevData: "",
      classYuntu: "",
      classProjectimg: "",
      classProjectCad: "",
      classProjectCad2: "",
      classProjectMp4: "",
      classAlarmanalysis: "",
      devItemLeft: 260,
      devDataLeft: 570,
      yunTuLeft: 570,
      homeSpanColor: "red",
      homeSpanText: "消音",
      isMyMap: true,
      isDevStatus: true, // 饼
      isDevCount: true, // 设备数量
      isMonthCount: true, // 本月统计
      isNowAlarm: true, // 报警列表
      isPowerStatus: true, // 用电量分析
      isDevItem: false, // 设备列表
      isDevData: false, // 设备数据
      isYunTu: false, // 云图
      isProjectImg: false, // 项目图片
      isProjectCad: false, // 逃生图
      isProjectCad2: false, // 逃生图 大
      isProjectMp4: false, // 视频监控
      isAlarmanalysis: false, // 报警分析
      devDataFlag: false,
      yunTuFlag: false
    };
  },
  methods: {
    updatemapofhome() {
      console.log("updatemapofhome")
      this.$refs.myrefmap.updatemapofmymap()
    },
    funHomeTl() {
      this.$router.go(0);
      location.reload();
      // this.$store.dispatch("getLcAcsB128");
    },
    funHomeSpan() {
      speechSynthesis.pause();
      if (this.homeSpanColor === "red") {
        speechSynthesis.pause();
        this.homeSpanColor = "green";
        this.homeSpanText = "播放";
      } else {
        speechSynthesis.resume();
        this.homeSpanColor = "red";
        this.homeSpanText = "消音";
      }
    },
    funIsDevStatus() {
      this.classDevItem = "box animated bounceInUp";
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = false;
      this.isProjectImg = false;
      this.isProjectCad = false;
      this.isProjectCad2 = false;
      this.isProjectMp4 = false;
    },
    funIsDevCount() {
      this.classDevItem = "box animated bounceInUp";
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = false;
      this.isProjectImg = false;
      this.isProjectCad = false;
      this.isProjectCad2 = false;
      this.isProjectMp4 = false;
    },
    funMonthCount() {
      this.classDevItem = "box animated bounceInUp";
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = false;
      this.isProjectImg = false;
      this.isProjectCad = false;
      this.isProjectCad2 = false;
      this.isProjectMp4 = false;
    },
    funIsNowAlarm() {
      this.classDevItem = "box animated bounceInUp";
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = false;
      this.isProjectImg = false;
      this.isProjectCad = false;
      this.isProjectCad2 = false;
      this.isProjectMp4 = false;
    },
    funPowerStatus() {
      this.classDevItem = "box animated bounceInUp";
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = false;
      this.isProjectImg = false;
      this.isProjectCad = false;
      this.isProjectCad2 = false;
      this.isProjectMp4 = false;
    },
    funIsDevItem(arg) {
      // alert('当前设备编号为：'+arg)
      this.classPowerStatus = "box animated bounceOutUp";
      this.classNowAlarm = "box animated bounceOutDown";
      // this.classYuntu = 'box animated bounceInRight'
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      // this.isPowerStatus = true
      // this.isNowAlarm = true
      this.isDevItem = true;
      // this.isDevData = false
      // this.isYunTu = true
      // this.isProjectImg = false
      // this.isProjectCad = false
      this.isProjectCad2 = false;
      // this.isProjectMp4 = false
      if (this.yunTuFlag === false && this.devDataFlag === false) {
        this.classYuntu = "box animated bounceInRight";
        this.isDevData = false;
        this.isYunTu = true;
        this.yunTuFlag = true;
      }
    },
    funIsDevData() {
      this.classDevStatus = "box animated bounceOutLeft";
      this.classDevCount = "box animated bounceOutLeft";
      this.classMonthCount = "box animated bounceOutLeft";
      this.classDevItem = "box animated bounceInDown";
      this.classProjectCad = "box animated bounceInDown";
      this.classProjectimg = "box animated bounceInDown";
      this.classProjectMp4 = "box animated bounceInDown";
      this.classAlarmanalysis = "box animated bounceInDown";
      this.devItemLeft = 260 - 250;
      this.devDataLeft = 570 - 250;
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = true;
      this.isProjectImg = true;
      this.isProjectCad = true;
      this.isProjectCad2 = false;
      this.isProjectMp4 = true;
      this.isAlarmanalysis = true;
    },
    funIsYuntu() {
      // this.classDevStatus = 'box animated bounceOutLeft'
      // this.classDevCount = 'box animated bounceOutLeft'
      // this.classMonthCount = 'box animated bounceOutLeft'
      // this.classDevItem = 'box animated bounceInDown'
      this.classYuntu = "box animated bounceOutDown";
      this.classDevData = "box animated bounceInDown";
      // this.devItemLeft = 260 - 250
      // this.devDataLeft = 570 - 250
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = true;
      this.isYunTu = true;
      this.isProjectImg = false;
      this.isProjectCad = false;
      this.isProjectCad2 = false;
      this.yunTuFlag = false;
      this.devDataFlag = true;
      this.isProjectMp4 = false;
    },
    funIsProjectImg() { },
    funIsProjectCad() {
      // this.classDevStatus = 'box animated bounceOutLeft'
      // this.classDevCount = 'box animated bounceOutLeft'
      // this.classMonthCount = 'box animated bounceOutLeft'
      // this.classDevItem = 'box animated bounceInDown'
      // this.classProjectCad = 'box animated bounceInDown'
      // this.classProjectimg = 'box animated bounceInDown'
      this.classProjectCad2 = "box animated bounceIn";
      // this.devItemLeft = 260 - 250
      // this.devDataLeft = 570 - 250
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = true;
      this.isProjectImg = true;
      this.isProjectCad = true;
      this.isProjectCad2 = true;
      this.isProjectMp4 = true;
    },
    funIsProjectCad2() {
      // this.classDevStatus = 'box animated bounceOutLeft'
      // this.classDevCount = 'box animated bounceOutLeft'
      // this.classMonthCount = 'box animated bounceOutLeft'
      // this.classDevItem = 'box animated bounceInDown'
      // this.classProjectCad = 'box animated bounceInDown'
      // this.classProjectimg = 'box animated bounceInDown'
      this.classProjectCad2 = "box animated bounceOut";
      // this.devItemLeft = 260 - 250
      // this.devDataLeft = 570 - 250
      this.isMyMap = true;
      this.isDevStatus = true;
      this.isDevCount = true;
      this.isMonthCount = true;
      this.isPowerStatus = true;
      this.isNowAlarm = true;
      this.isDevItem = true;
      this.isDevData = false;
      this.isYunTu = true;
      this.isProjectImg = true;
      this.isProjectCad = true;
      this.isProjectCad2 = true;
      this.isProjectMp4 = true;
    },
    funIsProjectMp4() { }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#home
  .homeTl
    height 45px
    background-color #131313
    border 3px solid #131313
    border-radius 10px
    text-align center
    h1
      display block
      position relative
      top 10px
      color #E7EAED
      font-size 25px
      font-weight bold
    span
      position absolute
      top 20px
      right 100px
      color red
  .mymap
    position absolute
    top 50px
    left 0px
  .devStatus
    position absolute
    top 55px
    width 250px
    height 260px
    animation-delay 1000ms
  .mqttws
    position absolute
    top 55px
    left 300px
    width 300px
    height 260px
    animation-delay 1000ms
  .viewtest
    position absolute
    top 55px
    left 500px
    width 300px
    height 260px
    animation-delay 1000ms
  .devCount
    position absolute
    top 325px
    left 0px
    width 250px
    height 200px
    animation-delay 1000ms
  .monthCount
    position absolute
    top 535px
    width 250px
    height 210px
    animation-delay 1000ms
  .devItem
    position absolute
    // left 0px
    top 55px
    width 300px
    height 690px
    animation-delay 1000ms
  .devData
    position absolute
    // left 570px
    top 55px
    width 300px
    height 690px
    animation-delay 1000ms
  .yunTu
    position absolute
    top 55px
    // left 300px
    width 930px
    height 690px
    animation-delay 1000ms
  .projectImg
    position absolute
    left 728px
    top 430px
    width 380px
    height 315px
    animation-delay 1000ms
  .projectCad
    position absolute
    left 330px
    top 430px
    width 380px
    height 315px
    animation-delay 1000ms
  .projectCad2
    position absolute
    width 1520px
    z-index 100
  .powerStatus
    position absolute
    top 60px
    right 0px
    width 450px
    height 350px
    animation-duration 1000ms
  .nowAlarm
    position absolute
    top 430px
    right 0px
    width 450px
    height 315px
    overflow hidden
    animation-duration 1000ms
  .projectMp4
    position absolute
    left 1130px
    top 430px
    width 380px
    height 315px
    animation-delay 1000ms
  .alarmanalysis
    position absolute
    right 10px
    top 55px
    width 580px
    height 365px
    animation-delay 1000ms
</style>
