<template>
  <div id="yuntu">
    <div class="tl">
      <h1>设备云图</h1>
    </div>
    <img src="./img/yuntu.png" alt />
    <ul class="yuntuV">
      <li v-if="devicedata.arvValue">{{devicedata.arvValue}}V</li>
      <li v-else>0V</li>
      <li v-if="devicedata.brvValue">{{devicedata.brvValue}}V</li>
      <li v-else>0V</li>
      <li v-if="devicedata.crvValue">{{devicedata.crvValue}}V</li>
      <li v-else>0V</li>
    </ul>
    <ul class="yuntuA">
      <li v-if="devicedata.aiValue">{{devicedata.aiValue}}A</li>
      <li v-else>0A</li>
      <li v-if="devicedata.biValue">{{devicedata.biValue}}A</li>
      <li v-else>0A</li>
      <li v-if="devicedata.ciValue">{{devicedata.ciValue}}A</li>
      <li v-else>0A</li>
    </ul>
    <ul class="yuntuMa">
      <li :class="[classAlarm1]">回路1: {{devicedata.l1Value}}{{devicedata.l1Type===1?'mA':'°C'}}</li>
      <li :class="[classAlarm2]">回路2: {{devicedata.l2Value}}{{devicedata.l2Type===1?'mA':'°C'}}</li>
      <li :class="[classAlarm3]">回路3: {{devicedata.l3Value}}{{devicedata.l3Type===1?'mA':'°C'}}</li>
      <li :class="[classAlarm4]">回路4: {{devicedata.l4Value}}{{devicedata.l4Type===1?'mA':'°C'}}</li>
      <li :class="[classAlarm5]">回路5: {{devicedata.l5Value}}{{devicedata.l5Type===1?'mA':'°C'}}</li>
      <li :class="[classAlarm5]">回路6: {{devicedata.l6Value}}{{devicedata.l6Type===1?'mA':'°C'}}</li>
      <li :class="[classAlarm5]">回路7: {{devicedata.l7Value}}{{devicedata.l7Type===1?'mA':'°C'}}</li>
      <li :class="[classAlarm5]">回路8: {{devicedata.l8Value}}{{devicedata.l8Type===1?'mA':'°C'}}</li>
    </ul>
    <!-- <ul class="yuntuMa">
      <li :class="[classAlarm1]">回路1: {{lcAcs.l1Value}}mA</li>
      <li :class="[classAlarm2]">回路2: {{lcAcs.l2Value}}mA</li>
      <li :class="[classAlarm3]">回路3: {{lcAcs.l3Value}}mA</li>
      <li :class="[classAlarm4]">回路4: {{lcAcs.l4Value}}mA</li>
      <li :class="[classAlarm5]">回路5: {{lcAcs.l5Value}}°C</li>
      <li>回路6: 30°C</li>
      <li>回路7: 30°C</li>
      <li style="color: gray">回路8: 掉线</li>
    </ul>-->
    <p class="yuntuYanGan">{{devicedata.ygStatus===1?'正常':'报警'}}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'yuntu',
  data() {
    return {
      classAlarm1: '',
      classAlarm2: '',
      classAlarm3: '',
      classAlarm4: '',
      classAlarm5: ''
    }
  },
  computed: {
    ...mapState(["devicedata", "lcAcsB128", "lcAcs", "address", "categorys"])
  },
  watch: {
    'lcAcs.l1Value': function (newVal, oldVal) {
      if (newVal > 500) {
        this.classAlarm1 = "alarm"
      } else {
        this.classAlarm1 = "common"
      }
    },
    'lcAcs.l2Value': function (newVal, oldVal) {
      if (newVal > 500) {
        this.classAlarm2 = "alarm"
      } else {
        this.classAlarm2 = "common"
      }
    },
    'lcAcs.l3Value': function (newVal, oldVal) {
      if (newVal > 500) {
        this.classAlarm3 = "alarm"
      } else {
        this.classAlarm3 = "common"
      }
    },
    'lcAcs.l4Value': function (newVal, oldVal) {
      if (newVal > 500) {
        this.classAlarm4 = "alarm"
      } else {
        this.classAlarm4 = "common"
      }
    },
    'lcAcs.l5Value': function (newVal, oldVal) {
      if (newVal > 50) {
        this.classAlarm5 = "alarm"
      } else {
        this.classAlarm5 = "common"
      }
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#yuntu
  // background-color #131313
  background-color rgba(19, 19, 19, 0.8)
  border 3px solid #383838
  border-radius 20px
  width 600px
  // height 430px
  height 425px
  img
    width 100%
    height 94%
    // background-color #C0C0C0
    background-color rgba(19, 19, 19, 0.8)
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
  .yuntuV
    position absolute
    top 190px
    left 75px
    li
      padding-left 18px
      display block
      float left
      color green
      // top 50px
      // left 100px
      // display inline
  .yuntuA
    position absolute
    top 365px
    left 65px
    li
      padding-left 30px
      display block
      float left
      color green
  .yuntuMa
    position absolute
    top 405px
    left 760px
    li
      padding-left 20px
      padding-bottom 0.5px
      display block
      text-align left
      color green
    .alarm
      color red
    .common
      color green
  .yuntuYanGan
    position absolute
    top 230px
    left 510px
    color green
</style>
