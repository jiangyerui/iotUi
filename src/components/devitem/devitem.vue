<template>
  <div id="devitem">
    <div class="tl">
      <h1>
        设备列表
        <span @click="tlMore" v-if="isMore">更多</span>
        <span @click="tlMoreBack" v-if="!isMore">返回</span>
      </h1>
    </div>
    <!-- <mqttws class="mqttws" ref="mymqttws" v-on:emitdeviceitem="updatemapofdeviceitem"></mqttws> -->
    <!-- <ul>
      <li v-for='(proItem,i) in list' :key="proItem.proNo">
        <p id="lab" @click="changeShow(i)">{{proItem.proName}}</p>
        <ul v-show="isShow" ref='ulall' style="height: 0px">
          <li v-for='devItem in proItem.proDev' :key="devItem.no" @click="devClick(devItem.no)">
            智慧用电设备---{{devItem.no}}--<span :style="{color: statusColor}">正常</span>
          </li>
        </ul>
      </li>
    </ul>-->
    <ul>
      <li v-for="(projectItem,i) in indexdevpros" :key="i">
        <p id="lab" @click="changeShow(i)">{{projectItem.project.projectName}}</p>
        <ul v-show="isShow" ref="ulall" style="height: 0px">
          <li
            v-for="devItem in projectItem.deviceGroups"
            :key="devItem.device.deviceId"
            @click="devClick(devItem.device.deviceNo)"
          >
            <!-- {{devItem.deviceName}}---{{devItem.deviceNo}}--<span :style="{color: statusColor}">正常</span> -->
            {{devItem.device.deviceName}} ( {{devItem.device.deviceNo}} )
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import mqttws from "../../components/mqttws/mqttws.vue";
export default {
  name: 'devitem',
  data() {
    return {
      isMore: true,
      isShow: true,
      statusColor: 'green',
      lcAcsTimer: null,
      list: [
        {
          isShow: true,
          proNo: 1,
          proName: '联创项目1',
          proDev: [
            { dt: new Date(), no: '862545119420', type: '电气火灾' },
            { dt: new Date(), no: '861192545421', type: '电气火灾' },
            { dt: new Date(), no: '861192545422', type: '电气火灾' },
            { dt: new Date(), no: '861192545423', type: '电气火灾' },
            { dt: new Date(), no: '861192545424', type: '电气火灾' },
            { dt: new Date(), no: '861192545425', type: '电气火灾' },
            { dt: new Date(), no: '861192545426', type: '电气火灾' },
            { dt: new Date(), no: '861192545427', type: '电气火灾' }]
        },
        {
          isShow: false,
          proNo: 2,
          proName: '联创项目2',
          proDev: [
            { dt: new Date(), no: '862545119430', type: '电气火灾' },
            { dt: new Date(), no: '861192545431', type: '电气火灾' },
            { dt: new Date(), no: '861192545432', type: '电气火灾' },
            { dt: new Date(), no: '861192545433', type: '电气火灾' },
            { dt: new Date(), no: '861192545434', type: '电气火灾' },
            { dt: new Date(), no: '861192545435', type: '电气火灾' },
            { dt: new Date(), no: '861192545436', type: '电气火灾' },
            { dt: new Date(), no: '861192545437', type: '电气火灾' }]
        },
        {
          isShow: false,
          proNo: 3,
          proName: '联创项目3',
          proDev: [
            { dt: new Date(), no: '862545119440', type: '电气火灾' },
            { dt: new Date(), no: '861192545441', type: '电气火灾' },
            { dt: new Date(), no: '861192545442', type: '电气火灾' },
            { dt: new Date(), no: '861192545443', type: '电气火灾' },
            { dt: new Date(), no: '861192545444', type: '电气火灾' },
            { dt: new Date(), no: '861192545445', type: '电气火灾' },
            { dt: new Date(), no: '861192545446', type: '电气火灾' },
            { dt: new Date(), no: '861192545447', type: '电气火灾' }]
        },
        {
          isShow: false,
          proNo: 4,
          proName: '电气火灾项目',
          proDev: [
            { dt: new Date(), no: 'aeb8e77b8209001', type: '电气火灾' },
            { dt: new Date(), no: 'aeb8e77b8209002', type: '电气火灾' },
            { dt: new Date(), no: 'aeb8e77b8209003', type: '电气火灾' },
            { dt: new Date(), no: 'aeb8e77b8209004', type: '电气火灾' },
            { dt: new Date(), no: 'aeb8e77b8209005', type: '电气火灾' },
            { dt: new Date(), no: 'aeb8e77b8209006', type: '电气火灾' },
            { dt: new Date(), no: 'aeb8e77b8209007', type: '电气火灾' },
            { dt: new Date(), no: 'aeb8e77b8209008', type: '电气火灾' }]
        }
      ]
    }
  },
  mounted() {
    // this.$store.dispatch("getLcAcsB128","aeb8e77b8209");
  },
  components: {
    mqttws
  },
  computed: {
    ...mapState(["devicedata", "indexdevpros", "lcAcs", "address", "categorys"])
  },
  methods: {
    tlMore() {
      this.isMore = false
      this.$emit('tlMore')
    },
    tlMoreBack() {
      // this.isMore=false
      this.$router.go(0);
      location.reload();
    },
    updatemapofdeviceitem() {
      console.log("updatemapofdeviceitem")
      this.$emit('emithome')
    },
    devClick(mac) {
      this.$store.dispatch("selectDeviceDataByMac", mac);
      // this.$refs.mymqttws.changeTopic(mac);
      this.$emit('func', mac)
      this.$emit('emithomeupdatedevicedata', mac)
    },
    changeShow(i) {
      // console.log(i)
      // console.log(this.$refs.ulall[i].style.height)
      if (this.$refs.ulall[i].style.height !== '0px') {
        this.$refs.ulall[i].style.height = 0 + 'px'
      } else {
        this.$refs.ulall[i].style.height = 'auto'
      }
      // this.isShow = false
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#devitem
  height 650px
  // background-color #131313
  background-color rgba(19, 19, 19, 0.8)
  border 3px solid #383838
  border-radius 20px
  overflow hidden
  .tl
    // background-color #1E1E1E
    h1
      position relative
      top 5px
      height 30px
      color #E7EAED
      text-align center
      font-size 18px
      font-weight bold
      span
        position absolute
        left 250px
        top 5px
        font-size 14px
        cursor pointer
  ul
    position relative
    // height 650px
    // overflow: hidden
    overflow-y scroll
    li
      line-height 30px
      text-align center
      font-size 14px
      color #E7EAED
      background #383838
      border-top 1px solid #000
      cursor pointer
      #lab
        width 100%
        height 35px
        background-color #252526
        cursor pointer
</style>
